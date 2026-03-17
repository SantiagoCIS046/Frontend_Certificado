import axiosInstance from '../plugins/axios';
import { useAuthStore } from '../store/auth';

export const authService = {
  /**
   * Autenticar usuario y almacenar token.
   */
  login: async (email, password) => {
    try {
      const response = await axiosInstance.post('/auth/login', { email, password });
      const { token, supervisor } = response.data;

      const authStore = useAuthStore();
      authStore.setLogin(token, supervisor);

      return { success: true, user: supervisor };
    } catch (error) {
      return { 
        success: false, 
        message: error.response?.data?.message || 'Error de conexión con el servidor' 
      };
    }
  },

  /**
   * Limpiar datos de la sesión.
   */
  logout: () => {
    const authStore = useAuthStore();
    authStore.logout();
  },

  /**
   * Verificar si el usuario está autenticado.
   */
  isAuthenticated: () => {
    const authStore = useAuthStore();
    return authStore.isAuthenticated;
  }
};
