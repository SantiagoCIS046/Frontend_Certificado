import axiosInstance from '../plugins/axios';

export const supervisorService = {
  /**
   * Obtener la lista de supervisores desde el backend.
   */
  getSupervisors: async () => {
    const response = await axiosInstance.get('/supervisors/list');
    return response.data;
  },

  /**
   * Obtener perfil del supervisor actual desde el backend.
   */
  getProfile: async () => {
    const response = await axiosInstance.get('/supervisors/profile');
    return response.data;
  },

  /**
   * Actualizar perfil del supervisor en el backend.
   */
  updateProfile: async (profileData) => {
    const response = await axiosInstance.put('/supervisors/profile', profileData);
    return response.data;
  },
};
