import axios from "axios";

/**
 * Instancia de Axios configurada para el backend.
 * Incluye baseURL desde variables de entorno e interceptores.
 */
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor para incluir el token de autorización en cada petición
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// Interceptor para manejo global de errores y depuración
axiosInstance.interceptors.response.use(
  response => response,
  error => {
    console.error("API ERROR:", error.response);
    return Promise.reject(error);
  }
);

export default axiosInstance;
