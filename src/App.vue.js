export default (await import('vue')).defineComponent({
    computed: {
        isAuthenticated() {
            return !!localStorage.getItem('token');
        }
    },
    methods: {
        cerrarSesion() {
            localStorage.removeItem('token');
            this.$router.push('/login');
        }
    }
});
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
const __VLS_0 = {}.VApp;
/** @type {[typeof __VLS_components.VApp, typeof __VLS_components.vApp, typeof __VLS_components.VApp, typeof __VLS_components.vApp, ]} */ ;
// @ts-ignore
VApp;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_4 = {};
const { default: __VLS_5 } = __VLS_3.slots;
const __VLS_6 = {}.VAppBar;
/** @type {[typeof __VLS_components.VAppBar, typeof __VLS_components.vAppBar, typeof __VLS_components.VAppBar, typeof __VLS_components.vAppBar, ]} */ ;
// @ts-ignore
VAppBar;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({
    title: "Taller Laravel + Vue",
}));
const __VLS_8 = __VLS_7({
    title: "Taller Laravel + Vue",
}, ...__VLS_functionalComponentArgsRest(__VLS_7));
const { default: __VLS_10 } = __VLS_9.slots;
if (__VLS_ctx.isAuthenticated) {
    // @ts-ignore
    [isAuthenticated,];
    {
        const { append: __VLS_11 } = __VLS_9.slots;
        const __VLS_12 = {}.VBtn;
        /** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
        // @ts-ignore
        VBtn;
        // @ts-ignore
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
            to: "/usuarios",
        }));
        const __VLS_14 = __VLS_13({
            to: "/usuarios",
        }, ...__VLS_functionalComponentArgsRest(__VLS_13));
        const { default: __VLS_16 } = __VLS_15.slots;
        var __VLS_15;
        const __VLS_17 = {}.VBtn;
        /** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
        // @ts-ignore
        VBtn;
        // @ts-ignore
        const __VLS_18 = __VLS_asFunctionalComponent(__VLS_17, new __VLS_17({
            to: "/tareas",
        }));
        const __VLS_19 = __VLS_18({
            to: "/tareas",
        }, ...__VLS_functionalComponentArgsRest(__VLS_18));
        const { default: __VLS_21 } = __VLS_20.slots;
        var __VLS_20;
        const __VLS_22 = {}.VBtn;
        /** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
        // @ts-ignore
        VBtn;
        // @ts-ignore
        const __VLS_23 = __VLS_asFunctionalComponent(__VLS_22, new __VLS_22({
            ...{ 'onClick': {} },
            color: "red",
        }));
        const __VLS_24 = __VLS_23({
            ...{ 'onClick': {} },
            color: "red",
        }, ...__VLS_functionalComponentArgsRest(__VLS_23));
        let __VLS_26;
        let __VLS_27;
        const __VLS_28 = ({ click: {} },
            { onClick: (__VLS_ctx.cerrarSesion) });
        const { default: __VLS_29 } = __VLS_25.slots;
        // @ts-ignore
        [cerrarSesion,];
        var __VLS_25;
    }
}
var __VLS_9;
const __VLS_30 = {}.VMain;
/** @type {[typeof __VLS_components.VMain, typeof __VLS_components.vMain, typeof __VLS_components.VMain, typeof __VLS_components.vMain, ]} */ ;
// @ts-ignore
VMain;
// @ts-ignore
const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({}));
const __VLS_32 = __VLS_31({}, ...__VLS_functionalComponentArgsRest(__VLS_31));
const { default: __VLS_34 } = __VLS_33.slots;
const __VLS_35 = {}.RouterView;
/** @type {[typeof __VLS_components.RouterView, typeof __VLS_components.routerView, ]} */ ;
// @ts-ignore
RouterView;
// @ts-ignore
const __VLS_36 = __VLS_asFunctionalComponent(__VLS_35, new __VLS_35({}));
const __VLS_37 = __VLS_36({}, ...__VLS_functionalComponentArgsRest(__VLS_36));
var __VLS_33;
var __VLS_3;
var __VLS_dollars;
let __VLS_self;
