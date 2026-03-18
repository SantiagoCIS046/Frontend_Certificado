# DOCUMENTACIÓN TÉCNICA Y GUÍA DE INTEGRACIÓN

Este documento describe la arquitectura, tecnologías y lógica del Sistema de Gestión de Certificados de Seguridad Social.

---

## 0. Guía de Inicio Rápido

Para ejecutar el entorno de desarrollo del frontend, asegúrate de estar en la carpeta correcta:

```powershell
cd frontend
npm install
npm run dev
```

O desde la raíz del proyecto:
```powershell
npm run dev --prefix frontend
```

---

## 1. Stack Tecnológico (Frontend)

El sistema ha sido construido con tecnologías modernas para garantizar velocidad, modularidad y una experiencia de usuario premium:

- **Vue.js 3 (Composition API)**: Motor principal de la interfaz, permitiendo una gestión de estado reactiva y componentes modulares.
- **Vite**: Herramienta de empaquetado ultra-rápida para el desarrollo frontend.
- **Vue Router**: Encargado de la navegación entre el Login, Dashboard y la vista de Certificados.
- **Vanilla CSS**: Se utilizan estilos personalizados (CSS puro) para lograr una estética única y profesional (Glassmorphism, animaciones suaves, diseño responsivo).
- **jsPDF & jspdf-autotable**: Librerías para la generación dinámica de reportes en formato PDF.
- **Reactive State (Vue)**: Gestión de notificaciones globales y estados de formularios sin necesidad de librerías externas pesadas.

---

## 2. Descripción de Campos (Formularios)

Cada plataforma (SOI, Asopagos, Compensar, Aportes) recopila datos esenciales para la certificación.

### Sección: Datos del Contratista
- **Tipo de Documento**: Selector para CC o CE, define la identidad legal.
- **Número de Documento**: Identificador numérico único del usuario.
- **Nombre Completo**: Nombre legal del contratista para el reporte.
- **EPS**: Entidad promotora de salud a la que se reportan los pagos.

### Sección: Detalle de Solicitud
- **Plataforma Destino**: Indica a qué entidad se dirige la solicitud (fijo según el formulario abierto).
- **Mes/Año**: Periodo de tiempo que se desea certificar.
- **Supervisor Encargado**: Selector dinámico para asignar la revisión a una autoridad específica.

---

## 3. Funciones Principales del Frontend

### Gestión de Envío
- `handleSend()`: Captura el estado reactivo `formData`, invoca el sistema de notificaciones y emite el evento de éxito hacia el componente superior.
- `notify(message)`: Nueva utilidad global que dispara una alerta visual animada en reemplazo de los `alert()` nativos.

### Visualización y Reportes
- `handleVisualize(item)`: Mapea los datos de un certificado existente a un formulario en modo `readOnly` (Solo Lectura).
- `handleExportPDF()`: Recopila los datos filtrados de la tabla y genera una descarga inmediata de un archivo PDF estructurado.
- `handleExportExcel()`: Convierte los datos de la tabla a formato CSV para su manejo en hojas de cálculo.

### Filtrado Dinámico
- `filteredCertificates`: Una propiedad computada que procesa la barra de búsqueda y los selectores (Contratista, Plataforma, Estado) para actualizar la tabla instantáneamente sin recargar la página.

---

---

## 4. Estado Actual (Standalone)

El sistema se encuentra en un estado **100% Standalone (Frontend Puro)**. No requiere de una conexión activa a un backend o base de datos externa para funcionar.

### Características del Modo Standalone:
- **Autenticación Simulada**: Los servicios de autenticación validan credenciales internamente (Mock).
- **Persistencia Local**: Los datos se manejan en memoria o a través de `localStorage` para demostración.
- **Sin Dependencias de Red**: Se han eliminado bibliotecas como `axios` y configuraciones de proxy para garantizar que la aplicación sea ligera y modular.

### Pruebas de Desarrollo:
Para iniciar el proyecto sin dependencias externas:
1. `cd frontend`
2. `npm install`
3. `npm run dev`

Usa las credenciales `admin@example.com` / `password123` para acceder al sistema.
