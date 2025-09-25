<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 class="text-h4 mb-4">Gestión de Tareas</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <lista-tareas></lista-tareas>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ListaTareas from '@/components/tareas/ListaTareas.vue'

export default {
  name: 'TareasView',
  components: {
    ListaTareas
  }
}
</script>