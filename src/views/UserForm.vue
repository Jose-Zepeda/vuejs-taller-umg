<template>
    <v-container class="d-flex align-center justify-center">
        <v-card class="w-full max-w-md p-6">
            <div class="text-center mb-4">
                <h2 class="text-lg font-semibold">Nuevo usuario</h2>
            </div>

            <v-form v-model="valid" @submit.prevent="onSubmit">
                <v-text-field v-model="nombre" label="Nombre" :rules="[rules.required]" prepend-inner-icon="mdi-account" density="comfortable" clearable />
                <v-text-field v-model="email" label="Email" type="email" :rules="[rules.required, rules.email]" prepend-inner-icon="mdi-email" density="comfortable" clearable />
                <v-text-field v-model="password" label="Password" type="password" :rules="[rules.required, rules.min6]" prepend-inner-icon="mdi-lock" density="comfortable" clearable />

                <v-select
                    v-model="rol"
                    :items="roles"
                    label="Rol"
                    density="comfortable"
                    clearable
                />

                <v-alert v-if="errorMsg" type="error" variant="tonal" class="mb-3" :text="errorMsg" density="comfortable" />

                <v-btn :loading="loading" :disabled="!valid || loading" type="submit" color="primary" class="w-full">
                    Agregar usuario
                </v-btn>
            </v-form>
        </v-card>
    </v-container>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import api from '@/services/api'

const router = useRouter()

const nombre = ref('')
const email = ref('')
const password = ref('')
const rol = ref('usuario')
const roles = ['admin', 'usuario']

const loading = ref(false)
const valid = ref(false)
const errorMsg = ref('')

const rules = {
    required: (v: string) => !!v || 'Requerido',
    email: (v: string) => /.+@.+\..+/.test(v) || 'Email inválido',
    min6: (v: string) => (v?.length ?? 0) >= 6 || 'Mínimo 6 caracteres',
}

const onSubmit = async () => {
    errorMsg.value = ''
    loading.value = true
    try {
        const payload = {
            nombre: nombre.value,
            email: email.value,
            password: password.value,
            rol: rol.value,
        }

        await api.post('/usuarios/addUser', payload)

        // éxito: volver a la lista de usuarios
        router.push('/usuarios')
    } catch (e: any) {
        errorMsg.value = e?.response?.data?.message ||
            e?.response?.data?.errors?.email?.[0] ||
            'No se pudo crear el usuario.'
    } finally {
        loading.value = false
    }
}
</script>

<style scoped>
.max-w-md { max-width: 28rem; }
.p-6 { padding: 1.5rem; }
.mb-3 { margin-bottom: .75rem; }
.mb-4 { margin-bottom: 1rem; }
.w-full { width: 100%; }
.text-center { text-align: center; }
.text-lg { font-size: 1.125rem; }
.font-semibold { font-weight: 600; }
</style>