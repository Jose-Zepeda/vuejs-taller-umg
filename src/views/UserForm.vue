<template>
    <v-container class="py-8" fluid>
        <v-row justify="center">
            <v-col cols="12" md="8" lg="6">
                <v-card class="pa-4">
                    <div class="d-flex align-center justify-space-between mb-2">
                        <div class="text-h6">{{ isEdit ? 'Editar usuario' : 'Nuevo usuario' }}</div>
                        <v-btn variant="text" @click="goBack" prepend-icon="mdi-arrow-left">Volver</v-btn>
                    </div>

                    <v-divider class="mb-4" />

                    <v-form v-model="valid" @submit.prevent="onSubmit">
                        <v-text-field
                            v-model="nombre"
                            label="Nombre"
                            :rules="[rules.required]"
                            prepend-inner-icon="mdi-account"
                            density="comfortable"
                            class="mb-3"
                            clearable
                        />

                        <v-text-field
                            v-model="email"
                            label="Email"
                            type="email"
                            :rules="[rules.required, rules.email]"
                            prepend-inner-icon="mdi-email"
                            density="comfortable"
                            class="mb-3"
                            clearable
                        />

                        <v-text-field
                            v-model="password"
                            :label="isEdit ? 'Password (opcional)' : 'Password'"
                            type="password"
                            :rules="isEdit ? [] : [rules.required, rules.min6]"
                            prepend-inner-icon="mdi-lock"
                            density="comfortable"
                            class="mb-3"
                            clearable
                        />

                        <v-select
                            v-model="rol"
                            :items="roles"
                            label="Rol"
                            :rules="[rules.required]"
                            prepend-inner-icon="mdi-shield-account"
                            density="comfortable"
                            class="mb-4"
                        />

                        <v-alert v-if="errorMsg" type="error" variant="tonal" class="mb-3" :text="errorMsg" />
                        <v-alert v-if="successMsg" type="success" variant="tonal" class="mb-3" :text="successMsg" />

                        <div class="d-flex justify-end ga-2">
                            <v-btn variant="text" @click="goBack">Cancelar</v-btn>
                            <v-btn color="primary" :loading="loading" :disabled="!valid || loading" type="submit">
                                {{ isEdit ? 'Guardar cambios' : 'Crear usuario' }}
                            </v-btn>
                        </div>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import api from '@/services/api'

const route = useRoute()
const router = useRouter()

const isEdit = ref<boolean>(!!route.params.id)
const valid = ref(false)
const loading = ref(false)
const errorMsg = ref('')
const successMsg = ref('')

// form fields
const nombre = ref('')
const email = ref('')
const password = ref('')
const rol = ref<'admin' | 'usuario' | ''>('')
const roles = [
    { title: 'admin', value: 'admin' },
    { title: 'usuario', value: 'usuario' },
]

const rules = {
    required: (v: string) => !!(v && String(v).trim()) || 'Requerido',
    email: (v: string) => /.+@.+\..+/.test(v) || 'Email inválido',
    min6: (v: string) => (v?.length ?? 0) >= 6 || 'Mínimo 6 caracteres',
}

const goBack = () => router.push('/usuarios')

// cargar usuario si es edición
onMounted(async () => {
    if (!isEdit.value) return
    try {
        loading.value = true
        const { data } = await api.get(`/usuarios/getUser/${route.params.id}`)
        // si backend envía { data: {...} } o directo {...}
        const u = (data?.data ?? data)
        nombre.value = u.nombre
        email.value = u.email
        rol.value = u.rol
    } catch (e: any) {
        errorMsg.value = e?.response?.data?.message || 'No se pudo cargar el usuario'
    } finally {
        loading.value = false
    }
})

const onSubmit = async () => {
    errorMsg.value = ''
    successMsg.value = ''
    loading.value = true
    try {
        if (isEdit.value) {
            const payload: any = { nombre: nombre.value, email: email.value, rol: rol.value }
            if (password.value) payload.password = password.value
            await api.put(`/usuarios/updateUser/${route.params.id}`, payload)
            successMsg.value = 'Usuario actualizado'
        } else {
            await api.post('/usuarios/addUser', {
                nombre: nombre.value,
                email: email.value,
                password: password.value,
                rol: rol.value,
            })
            successMsg.value = 'Usuario creado'
        }
        // volver tras breve confirmación
        setTimeout(() => router.push('/usuarios'), 400)
    } catch (e: any) {
        errorMsg.value =
            e?.response?.data?.message ||
            e?.response?.data?.errors?.email?.[0] ||
            e?.response?.data?.errors?.password?.[0] ||
            'No se pudo guardar el usuario'
    } finally {
        loading.value = false
    }
}
</script>

<style scoped>
.ga-2 { gap: .5rem; }
</style>