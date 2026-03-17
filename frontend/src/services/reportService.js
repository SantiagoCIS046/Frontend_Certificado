import axiosInstance from '../plugins/axios';

export const reportService = {
  /**
   * Registrar una nueva solicitud de reporte en el backend.
   */
  createReport: async (reportData) => {
    const response = await axiosInstance.post('/rep', reportData);
    return response.data;
  },

  /**
   * Obtener historial de reportes desde el backend.
   */
  getCertificates: async (page = 1, limit = 50) => {
    const response = await axiosInstance.get('/certificates', {
      params: { page, limit }
    });
    return response.data;
  },

  /**
   * Obtener estadísticas del tablero desde el backend.
   */
  getStats: async () => {
    const response = await axiosInstance.get('/stats');
    return response.data;
  },
};
