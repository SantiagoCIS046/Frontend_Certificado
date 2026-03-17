import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('authToken') || null,
    user: JSON.parse(localStorage.getItem('userProfile')) || null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
  actions: {
    setLogin(token, supervisor) {
      this.token = token;
      this.user = supervisor;
      localStorage.setItem('authToken', token);
      localStorage.setItem('userName', supervisor.name);
      localStorage.setItem('userEmail', supervisor.email);
      localStorage.setItem('userProfile', JSON.stringify(supervisor));
    },
    logout() {
      this.token = null;
      this.user = null;
      localStorage.removeItem('authToken');
      localStorage.removeItem('userName');
      localStorage.removeItem('userEmail');
      localStorage.removeItem('userProfile');
      localStorage.removeItem('lastDriveSync');
    }
  }
});
