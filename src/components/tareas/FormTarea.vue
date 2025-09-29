<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ props }">
      <v-btn color="primary" v-bind="props">
        Nueva Tarea
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">{{ editando ? 'Editar Tarea' : 'Nueva Tarea' }}</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="tarea.titulo"
                label="Título*"
                required
                :error-messages="errors.titulo"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea
                v-model="tarea.descripcion"
                label="Descripción"
                :error-messages="errors.descripcion"
              ></v-textarea>
            </v-col>
            <v-col cols="12" sm="6">
              <v-select
                v-model="tarea.estado"
                :items="['pendiente', 'en_progreso', 'completada']"
                label="Estado*"
                required
                :error-messages="errors.estado"
              ></v-select>
            </v-col>
            <v-col cols="12" sm="6">
              <v-select
                v-model="tarea.usuario_id"
                :items="usuarios"
                item-title="nombre"
                item-value="id"
                label="Usuario Asignado*"
                required
                :error-messages="errors.usuario_id"
                :loading="!usuarios.length"
                persistent-hint
                hint="Seleccione un usuario"
              ></v-select>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="tarea.fecha_vencimiento"
                label="Fecha de Vencimiento*"
                type="date"
                required
                :error-messages="errors.fecha_vencimiento"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <small>*indica campo requerido</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue-darken-1" text @click="cerrarDialogo">
          Cancelar
        </v-btn>
        <v-btn color="blue-darken-1" text @click="guardarTarea">
          Guardar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import api from '@/services/api';

export default {
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
        } else if (response.data && Array.isArray(response.data.data)) {
          this.usuarios = response.data.data;
        } else {
          console.error('Formato de respuesta inesperado:', response.data);
          this.usuarios = [];
        }
      } catch (error) {
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
      } catch (error) {
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
};
</script>