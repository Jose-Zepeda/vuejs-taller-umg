import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import api from '@/services/api';
const route = useRoute();
const router = useRouter();
const isEdit = ref(!!route.params.id);
const valid = ref(false);
const loading = ref(false);
const errorMsg = ref('');
const successMsg = ref('');
// form fields
const nombre = ref('');
const email = ref('');
const password = ref('');
const rol = ref('');
const roles = [
    { title: 'admin', value: 'admin' },
    { title: 'usuario', value: 'usuario' },
];
const rules = {
    required: (v) => !!(v && String(v).trim()) || 'Requerido',
    email: (v) => /.+@.+\..+/.test(v) || 'Email inválido',
    min6: (v) => (v?.length ?? 0) >= 6 || 'Mínimo 6 caracteres',
};
const goBack = () => router.push('/usuarios');
// cargar usuario si es edición
onMounted(async () => {
    if (!isEdit.value)
        return;
    try {
        loading.value = true;
        const { data } = await api.get(`/usuarios/getUser/${route.params.id}`);
        // si backend envía { data: {...} } o directo {...}
        const u = (data?.data ?? data);
        nombre.value = u.nombre;
        email.value = u.email;
        rol.value = u.rol;
    }
    catch (e) {
        errorMsg.value = e?.response?.data?.message || 'No se pudo cargar el usuario';
    }
    finally {
        loading.value = false;
    }
});
const onSubmit = async () => {
    errorMsg.value = '';
    successMsg.value = '';
    loading.value = true;
    try {
        if (isEdit.value) {
            const payload = { nombre: nombre.value, email: email.value, rol: rol.value };
            if (password.value)
                payload.password = password.value;
            await api.put(`/usuarios/updateUser/${route.params.id}`, payload);
            successMsg.value = 'Usuario actualizado';
        }
        else {
            await api.post('/usuarios/addUser', {
                nombre: nombre.value,
                email: email.value,
                password: password.value,
                rol: rol.value,
            });
            successMsg.value = 'Usuario creado';
        }
        // volver tras breve confirmación
        setTimeout(() => router.push('/usuarios'), 400);
    }
    catch (e) {
        errorMsg.value =
            e?.response?.data?.message ||
                e?.response?.data?.errors?.email?.[0] ||
                e?.response?.data?.errors?.password?.[0] ||
                'No se pudo guardar el usuario';
    }
    finally {
        loading.value = false;
    }
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
const __VLS_0 = {}.VContainer;
/** @type {[typeof __VLS_components.VContainer, typeof __VLS_components.vContainer, typeof __VLS_components.VContainer, typeof __VLS_components.vContainer, ]} */ ;
// @ts-ignore
VContainer;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    ...{ class: "py-8" },
    fluid: true,
}));
const __VLS_2 = __VLS_1({
    ...{ class: "py-8" },
    fluid: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_4 = {};
const { default: __VLS_5 } = __VLS_3.slots;
const __VLS_6 = {}.VRow;
/** @type {[typeof __VLS_components.VRow, typeof __VLS_components.vRow, typeof __VLS_components.VRow, typeof __VLS_components.vRow, ]} */ ;
// @ts-ignore
VRow;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({
    justify: "center",
}));
const __VLS_8 = __VLS_7({
    justify: "center",
}, ...__VLS_functionalComponentArgsRest(__VLS_7));
const { default: __VLS_10 } = __VLS_9.slots;
const __VLS_11 = {}.VCol;
/** @type {[typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ]} */ ;
// @ts-ignore
VCol;
// @ts-ignore
const __VLS_12 = __VLS_asFunctionalComponent(__VLS_11, new __VLS_11({
    cols: "12",
    md: "8",
    lg: "6",
}));
const __VLS_13 = __VLS_12({
    cols: "12",
    md: "8",
    lg: "6",
}, ...__VLS_functionalComponentArgsRest(__VLS_12));
const { default: __VLS_15 } = __VLS_14.slots;
const __VLS_16 = {}.VCard;
/** @type {[typeof __VLS_components.VCard, typeof __VLS_components.vCard, typeof __VLS_components.VCard, typeof __VLS_components.vCard, ]} */ ;
// @ts-ignore
VCard;
// @ts-ignore
const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({
    ...{ class: "pa-4" },
}));
const __VLS_18 = __VLS_17({
    ...{ class: "pa-4" },
}, ...__VLS_functionalComponentArgsRest(__VLS_17));
const { default: __VLS_20 } = __VLS_19.slots;
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "d-flex align-center justify-space-between mb-2" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "text-h6" },
});
(__VLS_ctx.isEdit ? 'Editar usuario' : 'Nuevo usuario');
// @ts-ignore
[isEdit,];
const __VLS_21 = {}.VBtn;
/** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
// @ts-ignore
VBtn;
// @ts-ignore
const __VLS_22 = __VLS_asFunctionalComponent(__VLS_21, new __VLS_21({
    ...{ 'onClick': {} },
    variant: "text",
    prependIcon: "mdi-arrow-left",
}));
const __VLS_23 = __VLS_22({
    ...{ 'onClick': {} },
    variant: "text",
    prependIcon: "mdi-arrow-left",
}, ...__VLS_functionalComponentArgsRest(__VLS_22));
let __VLS_25;
let __VLS_26;
const __VLS_27 = ({ click: {} },
    { onClick: (__VLS_ctx.goBack) });
const { default: __VLS_28 } = __VLS_24.slots;
// @ts-ignore
[goBack,];
var __VLS_24;
const __VLS_29 = {}.VDivider;
/** @type {[typeof __VLS_components.VDivider, typeof __VLS_components.vDivider, ]} */ ;
// @ts-ignore
VDivider;
// @ts-ignore
const __VLS_30 = __VLS_asFunctionalComponent(__VLS_29, new __VLS_29({
    ...{ class: "mb-4" },
}));
const __VLS_31 = __VLS_30({
    ...{ class: "mb-4" },
}, ...__VLS_functionalComponentArgsRest(__VLS_30));
const __VLS_34 = {}.VForm;
/** @type {[typeof __VLS_components.VForm, typeof __VLS_components.vForm, typeof __VLS_components.VForm, typeof __VLS_components.vForm, ]} */ ;
// @ts-ignore
VForm;
// @ts-ignore
const __VLS_35 = __VLS_asFunctionalComponent(__VLS_34, new __VLS_34({
    ...{ 'onSubmit': {} },
    modelValue: (__VLS_ctx.valid),
}));
const __VLS_36 = __VLS_35({
    ...{ 'onSubmit': {} },
    modelValue: (__VLS_ctx.valid),
}, ...__VLS_functionalComponentArgsRest(__VLS_35));
let __VLS_38;
let __VLS_39;
const __VLS_40 = ({ submit: {} },
    { onSubmit: (__VLS_ctx.onSubmit) });
const { default: __VLS_41 } = __VLS_37.slots;
// @ts-ignore
[valid, onSubmit,];
const __VLS_42 = {}.VTextField;
/** @type {[typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, ]} */ ;
// @ts-ignore
VTextField;
// @ts-ignore
const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({
    modelValue: (__VLS_ctx.nombre),
    label: "Nombre",
    rules: ([__VLS_ctx.rules.required]),
    prependInnerIcon: "mdi-account",
    density: "comfortable",
    ...{ class: "mb-3" },
    clearable: true,
}));
const __VLS_44 = __VLS_43({
    modelValue: (__VLS_ctx.nombre),
    label: "Nombre",
    rules: ([__VLS_ctx.rules.required]),
    prependInnerIcon: "mdi-account",
    density: "comfortable",
    ...{ class: "mb-3" },
    clearable: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_43));
// @ts-ignore
[nombre, rules,];
const __VLS_47 = {}.VTextField;
/** @type {[typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, ]} */ ;
// @ts-ignore
VTextField;
// @ts-ignore
const __VLS_48 = __VLS_asFunctionalComponent(__VLS_47, new __VLS_47({
    modelValue: (__VLS_ctx.email),
    label: "Email",
    type: "email",
    rules: ([__VLS_ctx.rules.required, __VLS_ctx.rules.email]),
    prependInnerIcon: "mdi-email",
    density: "comfortable",
    ...{ class: "mb-3" },
    clearable: true,
}));
const __VLS_49 = __VLS_48({
    modelValue: (__VLS_ctx.email),
    label: "Email",
    type: "email",
    rules: ([__VLS_ctx.rules.required, __VLS_ctx.rules.email]),
    prependInnerIcon: "mdi-email",
    density: "comfortable",
    ...{ class: "mb-3" },
    clearable: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_48));
// @ts-ignore
[rules, rules, email,];
const __VLS_52 = {}.VTextField;
/** @type {[typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, ]} */ ;
// @ts-ignore
VTextField;
// @ts-ignore
const __VLS_53 = __VLS_asFunctionalComponent(__VLS_52, new __VLS_52({
    modelValue: (__VLS_ctx.password),
    label: (__VLS_ctx.isEdit ? 'Password (opcional)' : 'Password'),
    type: "password",
    rules: (__VLS_ctx.isEdit ? [] : [__VLS_ctx.rules.required, __VLS_ctx.rules.min6]),
    prependInnerIcon: "mdi-lock",
    density: "comfortable",
    ...{ class: "mb-3" },
    clearable: true,
}));
const __VLS_54 = __VLS_53({
    modelValue: (__VLS_ctx.password),
    label: (__VLS_ctx.isEdit ? 'Password (opcional)' : 'Password'),
    type: "password",
    rules: (__VLS_ctx.isEdit ? [] : [__VLS_ctx.rules.required, __VLS_ctx.rules.min6]),
    prependInnerIcon: "mdi-lock",
    density: "comfortable",
    ...{ class: "mb-3" },
    clearable: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_53));
// @ts-ignore
[isEdit, isEdit, rules, rules, password,];
const __VLS_57 = {}.VSelect;
/** @type {[typeof __VLS_components.VSelect, typeof __VLS_components.vSelect, ]} */ ;
// @ts-ignore
VSelect;
// @ts-ignore
const __VLS_58 = __VLS_asFunctionalComponent(__VLS_57, new __VLS_57({
    modelValue: (__VLS_ctx.rol),
    items: (__VLS_ctx.roles),
    label: "Rol",
    rules: ([__VLS_ctx.rules.required]),
    prependInnerIcon: "mdi-shield-account",
    density: "comfortable",
    ...{ class: "mb-4" },
}));
const __VLS_59 = __VLS_58({
    modelValue: (__VLS_ctx.rol),
    items: (__VLS_ctx.roles),
    label: "Rol",
    rules: ([__VLS_ctx.rules.required]),
    prependInnerIcon: "mdi-shield-account",
    density: "comfortable",
    ...{ class: "mb-4" },
}, ...__VLS_functionalComponentArgsRest(__VLS_58));
// @ts-ignore
[rules, rol, roles,];
if (__VLS_ctx.errorMsg) {
    // @ts-ignore
    [errorMsg,];
    const __VLS_62 = {}.VAlert;
    /** @type {[typeof __VLS_components.VAlert, typeof __VLS_components.vAlert, ]} */ ;
    // @ts-ignore
    VAlert;
    // @ts-ignore
    const __VLS_63 = __VLS_asFunctionalComponent(__VLS_62, new __VLS_62({
        type: "error",
        variant: "tonal",
        ...{ class: "mb-3" },
        text: (__VLS_ctx.errorMsg),
    }));
    const __VLS_64 = __VLS_63({
        type: "error",
        variant: "tonal",
        ...{ class: "mb-3" },
        text: (__VLS_ctx.errorMsg),
    }, ...__VLS_functionalComponentArgsRest(__VLS_63));
    // @ts-ignore
    [errorMsg,];
}
if (__VLS_ctx.successMsg) {
    // @ts-ignore
    [successMsg,];
    const __VLS_67 = {}.VAlert;
    /** @type {[typeof __VLS_components.VAlert, typeof __VLS_components.vAlert, ]} */ ;
    // @ts-ignore
    VAlert;
    // @ts-ignore
    const __VLS_68 = __VLS_asFunctionalComponent(__VLS_67, new __VLS_67({
        type: "success",
        variant: "tonal",
        ...{ class: "mb-3" },
        text: (__VLS_ctx.successMsg),
    }));
    const __VLS_69 = __VLS_68({
        type: "success",
        variant: "tonal",
        ...{ class: "mb-3" },
        text: (__VLS_ctx.successMsg),
    }, ...__VLS_functionalComponentArgsRest(__VLS_68));
    // @ts-ignore
    [successMsg,];
}
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "d-flex justify-end ga-2" },
});
const __VLS_72 = {}.VBtn;
/** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
// @ts-ignore
VBtn;
// @ts-ignore
const __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({
    ...{ 'onClick': {} },
    variant: "text",
}));
const __VLS_74 = __VLS_73({
    ...{ 'onClick': {} },
    variant: "text",
}, ...__VLS_functionalComponentArgsRest(__VLS_73));
let __VLS_76;
let __VLS_77;
const __VLS_78 = ({ click: {} },
    { onClick: (__VLS_ctx.goBack) });
const { default: __VLS_79 } = __VLS_75.slots;
// @ts-ignore
[goBack,];
var __VLS_75;
const __VLS_80 = {}.VBtn;
/** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
// @ts-ignore
VBtn;
// @ts-ignore
const __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, new __VLS_80({
    color: "primary",
    loading: (__VLS_ctx.loading),
    disabled: (!__VLS_ctx.valid || __VLS_ctx.loading),
    type: "submit",
}));
const __VLS_82 = __VLS_81({
    color: "primary",
    loading: (__VLS_ctx.loading),
    disabled: (!__VLS_ctx.valid || __VLS_ctx.loading),
    type: "submit",
}, ...__VLS_functionalComponentArgsRest(__VLS_81));
const { default: __VLS_84 } = __VLS_83.slots;
// @ts-ignore
[valid, loading, loading,];
(__VLS_ctx.isEdit ? 'Guardar cambios' : 'Crear usuario');
// @ts-ignore
[isEdit,];
var __VLS_83;
var __VLS_37;
var __VLS_19;
var __VLS_14;
var __VLS_9;
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['py-8']} */ ;
/** @type {__VLS_StyleScopedClasses['pa-4']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['align-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-space-between']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-h6']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-end']} */ ;
/** @type {__VLS_StyleScopedClasses['ga-2']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({
        isEdit: isEdit,
        valid: valid,
        loading: loading,
        errorMsg: errorMsg,
        successMsg: successMsg,
        nombre: nombre,
        email: email,
        password: password,
        rol: rol,
        roles: roles,
        rules: rules,
        goBack: goBack,
        onSubmit: onSubmit,
    }),
});
export default (await import('vue')).defineComponent({});
; /* PartiallyEnd: #4569/main.vue */
