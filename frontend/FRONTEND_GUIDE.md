# Guía de Arquitectura y Desarrollo - Frontend

Esta guía proporciona una descripción detallada de la estructura, archivos y funciones que componen el frontend del sistema de **Automatización de Certificados**.

## 1. Estructura de Directorios

```text
frontend/
├── src/
│   ├── assets/             # Recursos estáticos (Logos, imágenes de fondo)
│   ├── components/         # Componentes reutilizables (Formularios, Alertas)
│   ├── constants/          # Valores constantes (Opciones de select, tipos)
│   ├── router/             # Configuración de Vue Router (Navegación)
│   ├── services/           # Abstracción de llamadas a la API (Axios)
│   ├── styles/             # Estilos globales y tokens de diseño
│   ├── utils/              # Funciones de utilidad (Notificaciones)
│   ├── views/              # Páginas principales (Vistas de nivel superior)
│   ├── App.vue             # Componente raíz de la aplicación
│   └── main.js             # Punto de entrada y configuración global (Bootstrap, plugins)
```

---

## 2. Vistas Principales (`src/views/`)

### `Login.vue`
Gestiona el acceso seguro al sistema.
- **Propósito**: Validar credenciales y simular el inicio de sesión.
- **Funciones Clave**:
  - `handleLogin()`: Valida que el correo y la contraseña no estén vacíos. Verifica contra los datos en `localStorage`.
  - `showPassword`: Lógica reactiva para alternar la visibilidad de la contraseña.

### `Dashboard.vue`
Panel de control central para el usuario.
- **Propósito**: Ofrecer accesos rápidos a la creación de solicitudes por plataforma.
- **Funciones Clave**:
  - `handleFormAction()`: Determina qué formulario mostrar basado en la plataforma seleccionada (SOI, Asopagos, etc.).
  - `handleLogout()`: Limpia la sesión del usuario.

### `Certificados.vue`
La vista más compleja, gestiona el historial y la exportación de reportes.
- **Propósito**: Visualizar, filtrar y exportar certificados generados.
- **Funciones Clave**:
  - `filteredCertificates`: Propiedad computada que aplica filtros dinámicos sobre la lista de certificados.
  - `handleExportPDF()`: Genera un reporte en PDF usando `jsPDF`.
  - `handleExportExcel()`: Exporta los datos actuales a formato CSV.
  - `confirmDriveExport()`: Simula la sincronización con Google Drive.
  - `handleVisualize()`: Abre un modal para ver los detalles de una solicitud específica.

---

## 3. Componentes de Formulario (`src/components/`)

Estos componentes encapsulan la lógica de captura de datos según la entidad de seguridad social.

### Formularios Específicos
- **`SoiForm.vue` / `AsopagosForm.vue` / `CompensarForm.vue` / `AportesForm.vue`**:
  - Todos implementan la **Guía de Integración Backend**.
  - **`handleSend()`**: Valida los campos, construye el payload JSON y utiliza `reportService` para enviar los datos.
  - **`props.readOnly`**: Permite reutilizar el formulario para solo visualización en la tabla de certificados.

### UI & UX
- **`SuccessAlert.vue`**: Componente global de notificaciones. Utiliza Bootstrap para mostrar avisos de éxito o error en la parte superior derecha sin bloquear la interfaz.

---

## 4. Servicios y Utilidades (`src/services/` & `src/utils/`)

### `reportService.js`
- **`createReport(data)`**: Realiza la petición `POST /api/reports` para registrar una nueva solicitud.

### `supervisorService.js`
- **`getSupervisors()`**: Obtiene la lista de supervisores autorizados desde el backend.

### `notifications.js`
- **`notify(message, type)`**: Función global que activa el visualizador de `SuccessAlert.vue` con un mensaje y estilo específico (success/error).

---

## 5. Conexión con el Backend

El sistema está diseñado para ser conectado fácilmente a una API REST:
1. **Axios Config**: En `src/services/api.js` se define la `baseURL`.
2. **Payloads**: Los formularios envían un objeto JSON estandarizado que incluye `documentType`, `documentNumber`, `fullName`, `eps`, `supervisorId` y `platformData`.

Para más detalles sobre la estructura del JSON, consulte el archivo `backend_integration_plan.md`.
