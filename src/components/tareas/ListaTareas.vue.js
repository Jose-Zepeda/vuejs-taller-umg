import api from '@/services/api';
import FormTarea from './FormTarea.vue';
export default (await import('vue')).defineComponent({
    name: 'ListaTareas',
    components: {
        FormTarea
    },
    data: () => ({
        busqueda: '',
        headers: [
            { title: 'Título', align: 'start', key: 'titulo' },
            { title: 'Descripción', key: 'descripcion' },
            { title: 'Estado', key: 'estado' },
            { title: 'Usuario Asignado', key: 'usuario.nombre' },
            { title: 'Fecha Vencimiento', key: 'fecha_vencimiento' },
            { title: 'Acciones', key: 'actions', sortable: false, align: 'center', width: '120px' }
        ],
        tareas: [],
        cargando: true,
        dialogEliminar: false,
        tareaAEliminar: null
    }),
    created() {
        this.cargarTareas();
    },
    methods: {
        async cargarTareas() {
            try {
                this.cargando = true;
                const response = await api.get('/tareas/listTareas');
                console.log('Respuesta cargar tareas:', response.data);
                // Manejar diferentes formatos de respuesta
                if (response.data && Array.isArray(response.data)) {
                    this.tareas = response.data;
                }
                else if (response.data && Array.isArray(response.data.data)) {
                    this.tareas = response.data.data;
                }
                else {
                    console.error('Formato de respuesta inesperado:', response.data);
                    this.tareas = [];
                }
            }
            catch (error) {
                console.error('Error al cargar tareas:', error);
                this.tareas = [];
            }
            finally {
                this.cargando = false;
            }
        },
        getEstadoColor(estado) {
            const colores = {
                pendiente: 'orange',
                en_progreso: 'blue',
                completada: 'green'
            };
            return colores[estado] || 'grey';
        },
        formatearFecha(fecha) {
            return new Date(fecha).toLocaleDateString();
        },
        editarTarea(item) {
            this.$refs.formTarea.editarTarea(item);
        },
        confirmarEliminar(item) {
            this.tareaAEliminar = item;
            this.dialogEliminar = true;
        },
        async eliminarTarea() {
            try {
                await api.delete(`/tareas/deleteTarea/${this.tareaAEliminar.id}`);
                this.cargarTareas();
                this.dialogEliminar = false;
            }
            catch (error) {
                console.error('Error al eliminar tarea:', error);
            }
        }
    }
});
const __VLS_ctx = {};
let __VLS_elements;
const __VLS_componentsOption = {
    FormTarea
};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({});
const __VLS_0 = {}.VCard;
/** @type {[typeof __VLS_components.VCard, typeof __VLS_components.vCard, typeof __VLS_components.VCard, typeof __VLS_components.vCard, ]} */ ;
// @ts-ignore
VCard;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_4 } = __VLS_3.slots;
const __VLS_5 = {}.VCardTitle;
/** @type {[typeof __VLS_components.VCardTitle, typeof __VLS_components.vCardTitle, typeof __VLS_components.VCardTitle, typeof __VLS_components.vCardTitle, ]} */ ;
// @ts-ignore
VCardTitle;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({}));
const __VLS_7 = __VLS_6({}, ...__VLS_functionalComponentArgsRest(__VLS_6));
const { default: __VLS_9 } = __VLS_8.slots;
const __VLS_10 = {}.VSpacer;
/** @type {[typeof __VLS_components.VSpacer, typeof __VLS_components.vSpacer, typeof __VLS_components.VSpacer, typeof __VLS_components.vSpacer, ]} */ ;
// @ts-ignore
VSpacer;
// @ts-ignore
const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({}));
const __VLS_12 = __VLS_11({}, ...__VLS_functionalComponentArgsRest(__VLS_11));
const __VLS_15 = {}.VTextField;
/** @type {[typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, ]} */ ;
// @ts-ignore
VTextField;
// @ts-ignore
const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({
    modelValue: (__VLS_ctx.busqueda),
    appendIcon: "mdi-magnify",
    label: "Buscar",
    singleLine: true,
    hideDetails: true,
}));
const __VLS_17 = __VLS_16({
    modelValue: (__VLS_ctx.busqueda),
    appendIcon: "mdi-magnify",
    label: "Buscar",
    singleLine: true,
    hideDetails: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_16));
// @ts-ignore
[busqueda,];
var __VLS_8;
const __VLS_20 = {}.VDataTable;
/** @type {[typeof __VLS_components.VDataTable, typeof __VLS_components.vDataTable, typeof __VLS_components.VDataTable, typeof __VLS_components.vDataTable, ]} */ ;
// @ts-ignore
VDataTable;
// @ts-ignore
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({
    headers: (__VLS_ctx.headers),
    items: (__VLS_ctx.tareas),
    search: (__VLS_ctx.busqueda),
    loading: (__VLS_ctx.cargando),
}));
const __VLS_22 = __VLS_21({
    headers: (__VLS_ctx.headers),
    items: (__VLS_ctx.tareas),
    search: (__VLS_ctx.busqueda),
    loading: (__VLS_ctx.cargando),
}, ...__VLS_functionalComponentArgsRest(__VLS_21));
const { default: __VLS_24 } = __VLS_23.slots;
// @ts-ignore
[busqueda, headers, tareas, cargando,];
{
    const { 'item.estado': __VLS_25 } = __VLS_23.slots;
    const [{ item }] = __VLS_getSlotParameters(__VLS_25);
    const __VLS_26 = {}.VChip;
    /** @type {[typeof __VLS_components.VChip, typeof __VLS_components.vChip, typeof __VLS_components.VChip, typeof __VLS_components.vChip, ]} */ ;
    // @ts-ignore
    VChip;
    // @ts-ignore
    const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({
        color: (__VLS_ctx.getEstadoColor(item.estado)),
        textColor: "white",
    }));
    const __VLS_28 = __VLS_27({
        color: (__VLS_ctx.getEstadoColor(item.estado)),
        textColor: "white",
    }, ...__VLS_functionalComponentArgsRest(__VLS_27));
    const { default: __VLS_30 } = __VLS_29.slots;
    // @ts-ignore
    [getEstadoColor,];
    (item.estado);
    var __VLS_29;
}
{
    const { 'item.fecha_vencimiento': __VLS_31 } = __VLS_23.slots;
    const [{ item }] = __VLS_getSlotParameters(__VLS_31);
    (__VLS_ctx.formatearFecha(item.fecha_vencimiento));
    // @ts-ignore
    [formatearFecha,];
}
{
    const { 'item.actions': __VLS_32 } = __VLS_23.slots;
    const [{ item }] = __VLS_getSlotParameters(__VLS_32);
    const __VLS_33 = {}.VBtn;
    /** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
    // @ts-ignore
    VBtn;
    // @ts-ignore
    const __VLS_34 = __VLS_asFunctionalComponent(__VLS_33, new __VLS_33({
        ...{ 'onClick': {} },
        color: "primary",
        variant: "text",
        title: "Editar",
    }));
    const __VLS_35 = __VLS_34({
        ...{ 'onClick': {} },
        color: "primary",
        variant: "text",
        title: "Editar",
    }, ...__VLS_functionalComponentArgsRest(__VLS_34));
    let __VLS_37;
    let __VLS_38;
    const __VLS_39 = ({ click: {} },
        { onClick: (...[$event]) => {
                __VLS_ctx.editarTarea(item);
                // @ts-ignore
                [editarTarea,];
            } });
    const { default: __VLS_40 } = __VLS_36.slots;
    const __VLS_41 = {}.VIcon;
    /** @type {[typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ]} */ ;
    // @ts-ignore
    VIcon;
    // @ts-ignore
    const __VLS_42 = __VLS_asFunctionalComponent(__VLS_41, new __VLS_41({
        left: true,
    }));
    const __VLS_43 = __VLS_42({
        left: true,
    }, ...__VLS_functionalComponentArgsRest(__VLS_42));
    const { default: __VLS_45 } = __VLS_44.slots;
    var __VLS_44;
    var __VLS_36;
    const __VLS_46 = {}.VBtn;
    /** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
    // @ts-ignore
    VBtn;
    // @ts-ignore
    const __VLS_47 = __VLS_asFunctionalComponent(__VLS_46, new __VLS_46({
        ...{ 'onClick': {} },
        color: "red",
        variant: "text",
        title: "Eliminar",
    }));
    const __VLS_48 = __VLS_47({
        ...{ 'onClick': {} },
        color: "red",
        variant: "text",
        title: "Eliminar",
    }, ...__VLS_functionalComponentArgsRest(__VLS_47));
    let __VLS_50;
    let __VLS_51;
    const __VLS_52 = ({ click: {} },
        { onClick: (...[$event]) => {
                __VLS_ctx.confirmarEliminar(item);
                // @ts-ignore
                [confirmarEliminar,];
            } });
    const { default: __VLS_53 } = __VLS_49.slots;
    const __VLS_54 = {}.VIcon;
    /** @type {[typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ]} */ ;
    // @ts-ignore
    VIcon;
    // @ts-ignore
    const __VLS_55 = __VLS_asFunctionalComponent(__VLS_54, new __VLS_54({
        left: true,
    }));
    const __VLS_56 = __VLS_55({
        left: true,
    }, ...__VLS_functionalComponentArgsRest(__VLS_55));
    const { default: __VLS_58 } = __VLS_57.slots;
    var __VLS_57;
    var __VLS_49;
}
var __VLS_23;
var __VLS_3;
const __VLS_59 = {}.FormTarea;
/** @type {[typeof __VLS_components.FormTarea, typeof __VLS_components.formTarea, typeof __VLS_components.FormTarea, typeof __VLS_components.formTarea, ]} */ ;
// @ts-ignore
FormTarea;
// @ts-ignore
const __VLS_60 = __VLS_asFunctionalComponent(__VLS_59, new __VLS_59({
    ...{ 'onTareaGuardada': {} },
    ref: "formTarea",
}));
const __VLS_61 = __VLS_60({
    ...{ 'onTareaGuardada': {} },
    ref: "formTarea",
}, ...__VLS_functionalComponentArgsRest(__VLS_60));
let __VLS_63;
let __VLS_64;
const __VLS_65 = ({ tareaGuardada: {} },
    { onTareaGuardada: (__VLS_ctx.cargarTareas) });
/** @type {typeof __VLS_ctx.formTarea} */ ;
var __VLS_66 = {};
// @ts-ignore
[cargarTareas, formTarea,];
var __VLS_62;
const __VLS_69 = {}.VDialog;
/** @type {[typeof __VLS_components.VDialog, typeof __VLS_components.vDialog, typeof __VLS_components.VDialog, typeof __VLS_components.vDialog, ]} */ ;
// @ts-ignore
VDialog;
// @ts-ignore
const __VLS_70 = __VLS_asFunctionalComponent(__VLS_69, new __VLS_69({
    modelValue: (__VLS_ctx.dialogEliminar),
    maxWidth: "500px",
}));
const __VLS_71 = __VLS_70({
    modelValue: (__VLS_ctx.dialogEliminar),
    maxWidth: "500px",
}, ...__VLS_functionalComponentArgsRest(__VLS_70));
const { default: __VLS_73 } = __VLS_72.slots;
// @ts-ignore
[dialogEliminar,];
const __VLS_74 = {}.VCard;
/** @type {[typeof __VLS_components.VCard, typeof __VLS_components.vCard, typeof __VLS_components.VCard, typeof __VLS_components.vCard, ]} */ ;
// @ts-ignore
VCard;
// @ts-ignore
const __VLS_75 = __VLS_asFunctionalComponent(__VLS_74, new __VLS_74({}));
const __VLS_76 = __VLS_75({}, ...__VLS_functionalComponentArgsRest(__VLS_75));
const { default: __VLS_78 } = __VLS_77.slots;
const __VLS_79 = {}.VCardTitle;
/** @type {[typeof __VLS_components.VCardTitle, typeof __VLS_components.vCardTitle, typeof __VLS_components.VCardTitle, typeof __VLS_components.vCardTitle, ]} */ ;
// @ts-ignore
VCardTitle;
// @ts-ignore
const __VLS_80 = __VLS_asFunctionalComponent(__VLS_79, new __VLS_79({
    ...{ class: "text-h5" },
}));
const __VLS_81 = __VLS_80({
    ...{ class: "text-h5" },
}, ...__VLS_functionalComponentArgsRest(__VLS_80));
const { default: __VLS_83 } = __VLS_82.slots;
var __VLS_82;
const __VLS_84 = {}.VCardActions;
/** @type {[typeof __VLS_components.VCardActions, typeof __VLS_components.vCardActions, typeof __VLS_components.VCardActions, typeof __VLS_components.vCardActions, ]} */ ;
// @ts-ignore
VCardActions;
// @ts-ignore
const __VLS_85 = __VLS_asFunctionalComponent(__VLS_84, new __VLS_84({}));
const __VLS_86 = __VLS_85({}, ...__VLS_functionalComponentArgsRest(__VLS_85));
const { default: __VLS_88 } = __VLS_87.slots;
const __VLS_89 = {}.VSpacer;
/** @type {[typeof __VLS_components.VSpacer, typeof __VLS_components.vSpacer, typeof __VLS_components.VSpacer, typeof __VLS_components.vSpacer, ]} */ ;
// @ts-ignore
VSpacer;
// @ts-ignore
const __VLS_90 = __VLS_asFunctionalComponent(__VLS_89, new __VLS_89({}));
const __VLS_91 = __VLS_90({}, ...__VLS_functionalComponentArgsRest(__VLS_90));
const __VLS_94 = {}.VBtn;
/** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
// @ts-ignore
VBtn;
// @ts-ignore
const __VLS_95 = __VLS_asFunctionalComponent(__VLS_94, new __VLS_94({
    ...{ 'onClick': {} },
    color: "blue-darken-1",
    text: true,
}));
const __VLS_96 = __VLS_95({
    ...{ 'onClick': {} },
    color: "blue-darken-1",
    text: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_95));
let __VLS_98;
let __VLS_99;
const __VLS_100 = ({ click: {} },
    { onClick: (...[$event]) => {
            __VLS_ctx.dialogEliminar = false;
            // @ts-ignore
            [dialogEliminar,];
        } });
const { default: __VLS_101 } = __VLS_97.slots;
var __VLS_97;
const __VLS_102 = {}.VBtn;
/** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
// @ts-ignore
VBtn;
// @ts-ignore
const __VLS_103 = __VLS_asFunctionalComponent(__VLS_102, new __VLS_102({
    ...{ 'onClick': {} },
    color: "blue-darken-1",
    text: true,
}));
const __VLS_104 = __VLS_103({
    ...{ 'onClick': {} },
    color: "blue-darken-1",
    text: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_103));
let __VLS_106;
let __VLS_107;
const __VLS_108 = ({ click: {} },
    { onClick: (__VLS_ctx.eliminarTarea) });
const { default: __VLS_109 } = __VLS_105.slots;
// @ts-ignore
[eliminarTarea,];
var __VLS_105;
const __VLS_110 = {}.VSpacer;
/** @type {[typeof __VLS_components.VSpacer, typeof __VLS_components.vSpacer, typeof __VLS_components.VSpacer, typeof __VLS_components.vSpacer, ]} */ ;
// @ts-ignore
VSpacer;
// @ts-ignore
const __VLS_111 = __VLS_asFunctionalComponent(__VLS_110, new __VLS_110({}));
const __VLS_112 = __VLS_111({}, ...__VLS_functionalComponentArgsRest(__VLS_111));
var __VLS_87;
var __VLS_77;
var __VLS_72;
/** @type {__VLS_StyleScopedClasses['text-h5']} */ ;
// @ts-ignore
var __VLS_67 = __VLS_66;
var __VLS_dollars;
let __VLS_self;
