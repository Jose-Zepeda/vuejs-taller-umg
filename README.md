# 🖼️ Sistema Multitenant Frontend - Vue.js 3

## 🎥 Video Explicativo del Proyecto

**Ver demostración completa:** [📹 Video en Google Drive](https://drive.google.com/file/d/1U4UoGz4-kalAJe4TDvQjt4n1hHgTpezf/view?usp=sharing)

> En este video se explica paso a paso la implementación del sistema multitenant, desde la configuración del backend hasta la integración con el frontend Vue.js.

## 📋 Descripción del Proyecto

Frontend moderno desarrollado con **Vue.js 3** + **TypeScript** + **Vite** que se integra con una API Laravel multitenant para la gestión de usuarios y tareas por empresa.

### 🚀 Características Principales

- **🎨 Interfaz moderna** con Vuetify 3
- **🔐 Autenticación segura** con tokens Bearer
- **👥 Gestión de usuarios** por empresa
- **✅ CRUD completo de tareas** con asignación
- **📱 SPA responsive** para múltiples dispositivos
- **🛡️ Manejo robusto de errores** y validaciones

### 🛠️ Stack Tecnológico

- **Framework:** Vue.js 3 con Composition API
- **Lenguaje:** TypeScript
- **Build Tool:** Vite
- **UI Framework:** Vuetify 3
- **HTTP Client:** Axios con interceptors
- **Router:** Vue Router 4

### 🔧 Configuración y Desarrollo

```bash
# Instalar dependencias
npm install

# Desarrollo local
npm run dev

# Build para producción
npm run build
```

### 🌐 Integración con Backend

El frontend se comunica con la API Laravel mediante:
- **Tokens Bearer** para autenticación
- **Interceptors** automáticos para headers
- **Separación automática** de datos por tenant

## Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).
