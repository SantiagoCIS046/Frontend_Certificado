import api from './api';

export const supervisorService = {
  /**
   * Fetch the list of supervisors from the backend.
   * @returns {Promise<Array>}
   */
  getSupervisors: async () => {
    const response = await api.get('/supervisors'); // Assuming the endpoint from the guide
    return response.data;
  }
};
