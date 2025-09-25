declare const _default: import("vue").DefineComponent<{}, {}, {
    dialog: boolean;
    editando: boolean;
    usuarios: never[];
    tarea: {
        titulo: string;
        descripcion: string;
        estado: string;
        usuario_id: string;
        fecha_vencimiento: string;
    };
    errors: {};
}, {}, {
    cargarUsuarios(): Promise<void>;
    guardarTarea(): Promise<void>;
    cerrarDialogo(): void;
    editarTarea(tarea: any): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
