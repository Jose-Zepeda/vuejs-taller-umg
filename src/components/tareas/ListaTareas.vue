<template>
  <div>
    <v-card>
      <v-card-title>
        Lista de Tareas
        <v-spacer></v-spacer>
        <v-text-field
          v-model="busqueda"
          append-icon="mdi-magnify"
          label="Buscar"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>

      <v-data-table
        :headers="headers"
        :items="tareas"
        :search="busqueda"
        :loading="cargando"
      >
        <template v-slot:item.estado="{ item }">
          <v-chip
            :color="getEstadoColor(item.estado)"
            text-color="white"
          >
            {{ item.estado }}
          </v-chip>
        </template>

        <template v-slot:item.fecha_vencimiento="{ item }">
          {{ formatearFecha(item.fecha_vencimiento) }}
        </template>

        <template v-slot:item.actions="{ item }">
          <v-btn color="primary" variant="text" @click="editarTarea(item)" title="Editar">
            <v-icon left>mdi-pencil</v-icon> Editar
          </v-btn>
          <v-btn color="red" variant="text" @click="confirmarEliminar(item)" title="Eliminar">
            <v-icon left>mdi-delete</v-icon> Eliminar
          </v-btn>
        </template>

      </v-data-table>
    </v-card>

    <!-- Formulario de Tarea (Dialog) -->
    <form-tarea
      ref="formTarea"
      @tarea-guardada="cargarTareas"
    ></form-tarea>

    <!-- Diálogo de confirmación para eliminar -->
    <v-dialog v-model="dialogEliminar" max-width="500px">
      <v-card>
        <v-card-title class="text-h5">¿Estás seguro de eliminar esta tarea?</v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue-darken-1" text @click="dialogEliminar = false">Cancelar</v-btn>
          <v-btn color="blue-darken-1" text @click="eliminarTarea">OK</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import api from '@/services/api';
import FormTarea from './FormTarea.vue';

export default {
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
        } else if (response.data && Array.isArray(response.data.data)) {
          this.tareas = response.data.data;
        } else {
          console.error('Formato de respuesta inesperado:', response.data);
          this.tareas = [];
        }
      } catch (error) {
        console.error('Error al cargar tareas:', error);
        this.tareas = [];
      } finally {
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
      } catch (error) {
        console.error('Error al eliminar tarea:', error);
      }
    }
  }
};
</script>

<style scoped>
.v-data-table {
  width: 100%;
}
</style>