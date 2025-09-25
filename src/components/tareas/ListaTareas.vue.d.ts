declare const _default: import("vue").DefineComponent<{}, {}, {
    busqueda: string;
    headers: ({
        title: string;
        align: string;
        key: string;
        sortable?: undefined;
    } | {
        title: string;
        key: string;
        align?: undefined;
        sortable?: undefined;
    } | {
        title: string;
        key: string;
        sortable: boolean;
        align?: undefined;
    })[];
    tareas: never[];
    cargando: boolean;
    dialogEliminar: boolean;
    tareaAEliminar: null;
}, {}, {
    cargarTareas(): Promise<void>;
    getEstadoColor(estado: any): any;
    formatearFecha(fecha: any): string;
    editarTarea(item: any): void;
    confirmarEliminar(item: any): void;
    eliminarTarea(): Promise<void>;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {
    FormTarea: import("vue").DefineComponent<{}, {}, any>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
