import api from './api';

export const reportService = {
  /**
   * Register a new report request in the backend.
   * @param {Object} reportData - The report structure following the integration guide.
   * @returns {Promise}
   */
  createReport: async (reportData) => {
    const response = await api.post('/reports', reportData);
    return response.data;
  }
};
