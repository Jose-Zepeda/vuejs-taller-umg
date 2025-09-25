<template>
  <v-app>
    <v-app-bar title="Taller Laravel + Vue">
      <template v-slot:append v-if="isAuthenticated">
        <v-btn to="/usuarios">
          Usuarios
        </v-btn>
        <v-btn to="/tareas">
          Tareas
        </v-btn>
        <v-btn @click="cerrarSesion" color="red">
          Cerrar Sesión
        </v-btn>
      </template>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  computed: {
    isAuthenticated() {
      return !!localStorage.getItem('token')
    }
  },
  methods: {
    cerrarSesion() {
      localStorage.removeItem('token')
      this.$router.push('/login')
    }
  }
}
</script>