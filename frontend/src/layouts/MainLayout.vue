<template>
  <div class="main-layout">
    <header class="navbar">
      <div class="nav-left">
        <div class="brand">
          <div class="brand-logo"></div>
          <span class="brand-name">Certificados SS</span>
        </div>
        <nav class="nav-links">
          <router-link to="/dashboard" class="nav-link" active-class="active">Inicio</router-link>
          <router-link to="/certificados" class="nav-link" active-class="active">Certificados</router-link>
        </nav>
      </div>

      <div class="nav-right">
        <div class="nav-icons">
          <div class="nav-icon-badge" title="Notificaciones">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
            <span class="badge-dot"></span>
          </div>
        </div>
        <div class="user-container">
          <div class="user-info" @click="toggleUserMenu">
            <div class="user-text">
              <span class="user-name">{{ userName }}</span>
              <span class="user-role">Administrador</span>
            </div>
            <div class="user-avatar">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </div>
          </div>

          <div v-if="isUserMenuOpen" class="user-dropdown">
            <button class="dropdown-item" @click="handleEditProfile">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>
              Editar perfil
            </button>
            <div class="dropdown-divider"></div>
            <button class="dropdown-item logout" @click="handleLogout">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
              Cerrar sesión
            </button>
          </div>
        </div>
      </div>
    </header>

    <main class="content-wrapper">
      <slot />
    </main>

    <footer class="page-footer">
      <div class="footer-left">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        <span>© 2024 Gestión de Certificados de Seguridad Social. Todos los derechos reservados.</span>
      </div>
      <div class="footer-links">
        <a href="#">Términos de Servicio</a>
        <a href="#">Privacidad</a>
        <a href="#">Soporte Técnico</a>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuth } from '../composables/useAuth';

const { userName, logout } = useAuth();
const isUserMenuOpen = ref(false);

const toggleUserMenu = () => {
  isUserMenuOpen.value = !isUserMenuOpen.value;
};

const handleLogout = () => {
  logout();
};

const handleEditProfile = () => {
  // This could emit an event or be handled by a global modal
  isUserMenuOpen.value = false;
  // Prototype: dispatch custom event
  window.dispatchEvent(new CustomEvent('open-edit-profile'));
};
</script>

<style scoped>
/* Transferred styles from Certificados.vue/Dashboard.vue */
.main-layout {
  min-height: 125vh; /* For zoom 0.8 compatibility */
  display: flex;
  flex-direction: column;
  background-color: #f8fafc;
  zoom: 0.8;
}

.navbar {
  height: 52px;
  background-color: white;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.nav-left {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.brand-logo {
  width: 24px;
  height: 24px;
  background-color: #39a900;
  border-radius: 6px;
}

.brand-name {
  font-weight: 800;
  font-size: 1rem;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-link {
  text-decoration: none;
  color: #64748b;
  font-weight: 500;
  font-size: 0.85rem;
  transition: color 0.2s;
}

.nav-link:hover { color: #0f172a; }
.nav-link.active {
  color: #39a900;
  position: relative;
}
.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 24px;
  height: 2px;
  background-color: #39a900;
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-icons {
  display: flex;
  gap: 0.75rem;
  border-right: 1px solid #e2e8f0;
  padding-right: 1.5rem;
}

.user-container {
  position: relative;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  padding: 0.3rem 0.6rem;
  border-radius: 12px;
  transition: background 0.2s;
}

.user-info:hover {
  background-color: #f1f5f9;
}

.user-text {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.user-name {
  font-weight: 700;
  font-size: 0.9rem;
  color: #0f172a;
}

.user-role {
  font-size: 0.75rem;
  color: #64748b;
}

.user-dropdown {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  width: 180px;
  background-color: white;
  border-radius: 14px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  padding: 0.5rem;
  z-index: 2000;
  display: flex;
  flex-direction: column;
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: #3341155;
  background: none;
  border: none;
  border-radius: 10px;
  width: 100%;
  text-align: left;
  cursor: pointer;
  transition: all 0.2s;
}

.dropdown-item:hover {
  background-color: #f1f5f9;
  color: #0f172a;
}

.dropdown-item.logout { color: #ef4444; }
.dropdown-item.logout:hover { background-color: #fef2f2; }

.dropdown-divider {
  height: 1px;
  background-color: #f1f5f9;
  margin: 0.4rem 0.5rem;
}

.user-avatar {
  width: 40px;
  height: 40px;
  background-color: #ffedd5;
  color: #f97316;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content-wrapper {
  flex: 1;
}

.page-footer {
  margin-top: auto;
  padding: 2rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-top: 1px solid #f1f5f9;
}

.footer-left {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #94a3b8;
  font-size: 0.9rem;
  font-weight: 500;
}

.footer-links {
  display: flex;
  gap: 2rem;
}

.footer-links a {
  text-decoration: none;
  color: #94a3b8;
  font-size: 0.9rem;
  font-weight: 600;
  transition: color 0.2s;
}

.footer-links a:hover { color: #0f172a; }

.badged-dot {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 8px;
  height: 8px;
  background-color: #ef4444;
  border: 2px solid white;
  border-radius: 50%;
}
</style>
