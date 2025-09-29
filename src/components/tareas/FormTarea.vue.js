import api from '@/services/api';
export default (await import('vue')).defineComponent({
    name: 'FormTarea',
    data: () => ({
        dialog: false,
        editando: false,
        usuarios: [],
        tarea: {
            titulo: '',
            descripcion: '',
            estado: 'pendiente',
            usuario_id: null,
            fecha_vencimiento: new Date().toISOString().substr(0, 10)
        },
        errors: {}
    }),
    created() {
        this.cargarUsuarios();
    },
    methods: {
        async cargarUsuarios() {
            try {
                console.log('Cargando usuarios...');
                const response = await api.get('/usuarios/listUsers');
                console.log('Respuesta:', response.data);
                if (response.data && Array.isArray(response.data)) {
                    this.usuarios = response.data;
                }
                else if (response.data && Array.isArray(response.data.data)) {
                    this.usuarios = response.data.data;
                }
                else {
                    console.error('Formato de respuesta inesperado:', response.data);
                    this.usuarios = [];
                }
            }
            catch (error) {
                console.error('Error al cargar usuarios:', error);
                this.usuarios = [];
            }
        },
        async guardarTarea() {
            try {
                const url = this.editando
                    ? `/tareas/updateTarea/${this.tarea.id}`
                    : '/tareas/addTarea';
                // Asegurar que usuario_id sea un número
                if (this.tarea.usuario_id) {
                    this.tarea.usuario_id = parseInt(this.tarea.usuario_id);
                }
                console.log('Enviando tarea:', this.tarea);
                const response = this.editando
                    ? await api.put(url, this.tarea)
                    : await api.post(url, this.tarea);
                console.log('Respuesta:', response.data);
                this.$emit('tarea-guardada');
                this.cerrarDialogo();
            }
            catch (error) {
                console.error('Error completo:', error.response);
                if (error.response?.data?.errors) {
                    this.errors = error.response.data.errors;
                }
            }
        },
        cerrarDialogo() {
            this.dialog = false;
            this.tarea = {
                titulo: '',
                descripcion: '',
                estado: 'pendiente',
                usuario_id: null,
                fecha_vencimiento: new Date().toISOString().substr(0, 10)
            };
            this.errors = {};
            this.editando = false;
        },
        editarTarea(tarea) {
            this.tarea = { ...tarea };
            this.editando = true;
            this.dialog = true;
        }
    }
});
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
const __VLS_0 = {}.VDialog;
/** @type {[typeof __VLS_components.VDialog, typeof __VLS_components.vDialog, typeof __VLS_components.VDialog, typeof __VLS_components.vDialog, ]} */ ;
// @ts-ignore
VDialog;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    modelValue: (__VLS_ctx.dialog),
    persistent: true,
    maxWidth: "600px",
}));
const __VLS_2 = __VLS_1({
    modelValue: (__VLS_ctx.dialog),
    persistent: true,
    maxWidth: "600px",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_4 = {};
const { default: __VLS_5 } = __VLS_3.slots;
// @ts-ignore
[dialog,];
{
    const { activator: __VLS_6 } = __VLS_3.slots;
    const [{ props }] = __VLS_getSlotParameters(__VLS_6);
    const __VLS_7 = {}.VBtn;
    /** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
    // @ts-ignore
    VBtn;
    // @ts-ignore
    const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({
        color: "primary",
        ...(props),
    }));
    const __VLS_9 = __VLS_8({
        color: "primary",
        ...(props),
    }, ...__VLS_functionalComponentArgsRest(__VLS_8));
    const { default: __VLS_11 } = __VLS_10.slots;
    var __VLS_10;
}
const __VLS_12 = {}.VCard;
/** @type {[typeof __VLS_components.VCard, typeof __VLS_components.vCard, typeof __VLS_components.VCard, typeof __VLS_components.vCard, ]} */ ;
// @ts-ignore
VCard;
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({}));
const __VLS_14 = __VLS_13({}, ...__VLS_functionalComponentArgsRest(__VLS_13));
const { default: __VLS_16 } = __VLS_15.slots;
const __VLS_17 = {}.VCardTitle;
/** @type {[typeof __VLS_components.VCardTitle, typeof __VLS_components.vCardTitle, typeof __VLS_components.VCardTitle, typeof __VLS_components.vCardTitle, ]} */ ;
// @ts-ignore
VCardTitle;
// @ts-ignore
const __VLS_18 = __VLS_asFunctionalComponent(__VLS_17, new __VLS_17({}));
const __VLS_19 = __VLS_18({}, ...__VLS_functionalComponentArgsRest(__VLS_18));
const { default: __VLS_21 } = __VLS_20.slots;
__VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
    ...{ class: "text-h5" },
});
(__VLS_ctx.editando ? 'Editar Tarea' : 'Nueva Tarea');
// @ts-ignore
[editando,];
var __VLS_20;
const __VLS_22 = {}.VCardText;
/** @type {[typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, ]} */ ;
// @ts-ignore
VCardText;
// @ts-ignore
const __VLS_23 = __VLS_asFunctionalComponent(__VLS_22, new __VLS_22({}));
const __VLS_24 = __VLS_23({}, ...__VLS_functionalComponentArgsRest(__VLS_23));
const { default: __VLS_26 } = __VLS_25.slots;
const __VLS_27 = {}.VContainer;
/** @type {[typeof __VLS_components.VContainer, typeof __VLS_components.vContainer, typeof __VLS_components.VContainer, typeof __VLS_components.vContainer, ]} */ ;
// @ts-ignore
VContainer;
// @ts-ignore
const __VLS_28 = __VLS_asFunctionalComponent(__VLS_27, new __VLS_27({}));
const __VLS_29 = __VLS_28({}, ...__VLS_functionalComponentArgsRest(__VLS_28));
const { default: __VLS_31 } = __VLS_30.slots;
const __VLS_32 = {}.VRow;
/** @type {[typeof __VLS_components.VRow, typeof __VLS_components.vRow, typeof __VLS_components.VRow, typeof __VLS_components.vRow, ]} */ ;
// @ts-ignore
VRow;
// @ts-ignore
const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({}));
const __VLS_34 = __VLS_33({}, ...__VLS_functionalComponentArgsRest(__VLS_33));
const { default: __VLS_36 } = __VLS_35.slots;
const __VLS_37 = {}.VCol;
/** @type {[typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ]} */ ;
// @ts-ignore
VCol;
// @ts-ignore
const __VLS_38 = __VLS_asFunctionalComponent(__VLS_37, new __VLS_37({
    cols: "12",
}));
const __VLS_39 = __VLS_38({
    cols: "12",
}, ...__VLS_functionalComponentArgsRest(__VLS_38));
const { default: __VLS_41 } = __VLS_40.slots;
const __VLS_42 = {}.VTextField;
/** @type {[typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, ]} */ ;
// @ts-ignore
VTextField;
// @ts-ignore
const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({
    modelValue: (__VLS_ctx.tarea.titulo),
    label: "Título*",
    required: true,
    errorMessages: (__VLS_ctx.errors.titulo),
}));
const __VLS_44 = __VLS_43({
    modelValue: (__VLS_ctx.tarea.titulo),
    label: "Título*",
    required: true,
    errorMessages: (__VLS_ctx.errors.titulo),
}, ...__VLS_functionalComponentArgsRest(__VLS_43));
// @ts-ignore
[tarea, errors,];
var __VLS_40;
const __VLS_47 = {}.VCol;
/** @type {[typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ]} */ ;
// @ts-ignore
VCol;
// @ts-ignore
const __VLS_48 = __VLS_asFunctionalComponent(__VLS_47, new __VLS_47({
    cols: "12",
}));
const __VLS_49 = __VLS_48({
    cols: "12",
}, ...__VLS_functionalComponentArgsRest(__VLS_48));
const { default: __VLS_51 } = __VLS_50.slots;
const __VLS_52 = {}.VTextarea;
/** @type {[typeof __VLS_components.VTextarea, typeof __VLS_components.vTextarea, typeof __VLS_components.VTextarea, typeof __VLS_components.vTextarea, ]} */ ;
// @ts-ignore
VTextarea;
// @ts-ignore
const __VLS_53 = __VLS_asFunctionalComponent(__VLS_52, new __VLS_52({
    modelValue: (__VLS_ctx.tarea.descripcion),
    label: "Descripción",
    errorMessages: (__VLS_ctx.errors.descripcion),
}));
const __VLS_54 = __VLS_53({
    modelValue: (__VLS_ctx.tarea.descripcion),
    label: "Descripción",
    errorMessages: (__VLS_ctx.errors.descripcion),
}, ...__VLS_functionalComponentArgsRest(__VLS_53));
// @ts-ignore
[tarea, errors,];
var __VLS_50;
const __VLS_57 = {}.VCol;
/** @type {[typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ]} */ ;
// @ts-ignore
VCol;
// @ts-ignore
const __VLS_58 = __VLS_asFunctionalComponent(__VLS_57, new __VLS_57({
    cols: "12",
    sm: "6",
}));
const __VLS_59 = __VLS_58({
    cols: "12",
    sm: "6",
}, ...__VLS_functionalComponentArgsRest(__VLS_58));
const { default: __VLS_61 } = __VLS_60.slots;
const __VLS_62 = {}.VSelect;
/** @type {[typeof __VLS_components.VSelect, typeof __VLS_components.vSelect, typeof __VLS_components.VSelect, typeof __VLS_components.vSelect, ]} */ ;
// @ts-ignore
VSelect;
// @ts-ignore
const __VLS_63 = __VLS_asFunctionalComponent(__VLS_62, new __VLS_62({
    modelValue: (__VLS_ctx.tarea.estado),
    items: (['pendiente', 'en_progreso', 'completada']),
    label: "Estado*",
    required: true,
    errorMessages: (__VLS_ctx.errors.estado),
}));
const __VLS_64 = __VLS_63({
    modelValue: (__VLS_ctx.tarea.estado),
    items: (['pendiente', 'en_progreso', 'completada']),
    label: "Estado*",
    required: true,
    errorMessages: (__VLS_ctx.errors.estado),
}, ...__VLS_functionalComponentArgsRest(__VLS_63));
// @ts-ignore
[tarea, errors,];
var __VLS_60;
const __VLS_67 = {}.VCol;
/** @type {[typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ]} */ ;
// @ts-ignore
VCol;
// @ts-ignore
const __VLS_68 = __VLS_asFunctionalComponent(__VLS_67, new __VLS_67({
    cols: "12",
    sm: "6",
}));
const __VLS_69 = __VLS_68({
    cols: "12",
    sm: "6",
}, ...__VLS_functionalComponentArgsRest(__VLS_68));
const { default: __VLS_71 } = __VLS_70.slots;
const __VLS_72 = {}.VSelect;
/** @type {[typeof __VLS_components.VSelect, typeof __VLS_components.vSelect, typeof __VLS_components.VSelect, typeof __VLS_components.vSelect, ]} */ ;
// @ts-ignore
VSelect;
// @ts-ignore
const __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({
    modelValue: (__VLS_ctx.tarea.usuario_id),
    items: (__VLS_ctx.usuarios),
    itemTitle: "nombre",
    itemValue: "id",
    label: "Usuario Asignado*",
    required: true,
    errorMessages: (__VLS_ctx.errors.usuario_id),
    loading: (!__VLS_ctx.usuarios.length),
    persistentHint: true,
    hint: "Seleccione un usuario",
}));
const __VLS_74 = __VLS_73({
    modelValue: (__VLS_ctx.tarea.usuario_id),
    items: (__VLS_ctx.usuarios),
    itemTitle: "nombre",
    itemValue: "id",
    label: "Usuario Asignado*",
    required: true,
    errorMessages: (__VLS_ctx.errors.usuario_id),
    loading: (!__VLS_ctx.usuarios.length),
    persistentHint: true,
    hint: "Seleccione un usuario",
}, ...__VLS_functionalComponentArgsRest(__VLS_73));
// @ts-ignore
[tarea, errors, usuarios, usuarios,];
var __VLS_70;
const __VLS_77 = {}.VCol;
/** @type {[typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ]} */ ;
// @ts-ignore
VCol;
// @ts-ignore
const __VLS_78 = __VLS_asFunctionalComponent(__VLS_77, new __VLS_77({
    cols: "12",
}));
const __VLS_79 = __VLS_78({
    cols: "12",
}, ...__VLS_functionalComponentArgsRest(__VLS_78));
const { default: __VLS_81 } = __VLS_80.slots;
const __VLS_82 = {}.VTextField;
/** @type {[typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, ]} */ ;
// @ts-ignore
VTextField;
// @ts-ignore
const __VLS_83 = __VLS_asFunctionalComponent(__VLS_82, new __VLS_82({
    modelValue: (__VLS_ctx.tarea.fecha_vencimiento),
    label: "Fecha de Vencimiento*",
    type: "date",
    required: true,
    errorMessages: (__VLS_ctx.errors.fecha_vencimiento),
}));
const __VLS_84 = __VLS_83({
    modelValue: (__VLS_ctx.tarea.fecha_vencimiento),
    label: "Fecha de Vencimiento*",
    type: "date",
    required: true,
    errorMessages: (__VLS_ctx.errors.fecha_vencimiento),
}, ...__VLS_functionalComponentArgsRest(__VLS_83));
// @ts-ignore
[tarea, errors,];
var __VLS_80;
var __VLS_35;
var __VLS_30;
__VLS_asFunctionalElement(__VLS_elements.small, __VLS_elements.small)({});
var __VLS_25;
const __VLS_87 = {}.VCardActions;
/** @type {[typeof __VLS_components.VCardActions, typeof __VLS_components.vCardActions, typeof __VLS_components.VCardActions, typeof __VLS_components.vCardActions, ]} */ ;
// @ts-ignore
VCardActions;
// @ts-ignore
const __VLS_88 = __VLS_asFunctionalComponent(__VLS_87, new __VLS_87({}));
const __VLS_89 = __VLS_88({}, ...__VLS_functionalComponentArgsRest(__VLS_88));
const { default: __VLS_91 } = __VLS_90.slots;
const __VLS_92 = {}.VSpacer;
/** @type {[typeof __VLS_components.VSpacer, typeof __VLS_components.vSpacer, typeof __VLS_components.VSpacer, typeof __VLS_components.vSpacer, ]} */ ;
// @ts-ignore
VSpacer;
// @ts-ignore
const __VLS_93 = __VLS_asFunctionalComponent(__VLS_92, new __VLS_92({}));
const __VLS_94 = __VLS_93({}, ...__VLS_functionalComponentArgsRest(__VLS_93));
const __VLS_97 = {}.VBtn;
/** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
// @ts-ignore
VBtn;
// @ts-ignore
const __VLS_98 = __VLS_asFunctionalComponent(__VLS_97, new __VLS_97({
    ...{ 'onClick': {} },
    color: "blue-darken-1",
    text: true,
}));
const __VLS_99 = __VLS_98({
    ...{ 'onClick': {} },
    color: "blue-darken-1",
    text: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_98));
let __VLS_101;
let __VLS_102;
const __VLS_103 = ({ click: {} },
    { onClick: (__VLS_ctx.cerrarDialogo) });
const { default: __VLS_104 } = __VLS_100.slots;
// @ts-ignore
[cerrarDialogo,];
var __VLS_100;
const __VLS_105 = {}.VBtn;
/** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
// @ts-ignore
VBtn;
// @ts-ignore
const __VLS_106 = __VLS_asFunctionalComponent(__VLS_105, new __VLS_105({
    ...{ 'onClick': {} },
    color: "blue-darken-1",
    text: true,
}));
const __VLS_107 = __VLS_106({
    ...{ 'onClick': {} },
    color: "blue-darken-1",
    text: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_106));
let __VLS_109;
let __VLS_110;
const __VLS_111 = ({ click: {} },
    { onClick: (__VLS_ctx.guardarTarea) });
const { default: __VLS_112 } = __VLS_108.slots;
// @ts-ignore
[guardarTarea,];
var __VLS_108;
var __VLS_90;
var __VLS_15;
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['text-h5']} */ ;
var __VLS_dollars;
let __VLS_self;
