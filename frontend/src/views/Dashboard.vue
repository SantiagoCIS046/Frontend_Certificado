<template>
  <div class="dashboard-container">
    <!-- Top Navigation Bar -->
    <header class="navbar">
      <div class="nav-left">
        <div class="brand">
          <div class="brand-logo"></div>
          <span class="brand-name">Gestión de Certificados</span>
        </div>
        <nav class="nav-links">
          <a href="#" class="nav-link active">Inicio</a>
          <a href="#" class="nav-link">Certificados</a>
          <a href="#" class="nav-link">Reportes</a>
          <a href="#" class="nav-link">Configuración</a>
        </nav>
      </div>

      <div class="nav-right">
        <div class="search-bar">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          <input type="text" placeholder="Buscar certificados...">
        </div>
        <div class="nav-icons">
          <button class="icon-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
          </button>
          <button class="icon-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
          </button>
        </div>
        <div class="user-info">
          <div class="user-text">
            <span class="user-name">{{ userName }}</span>
            <span class="user-role">Administrador</span>
          </div>
          <div class="user-avatar">{{ userInitials }}</div>
        </div>
      </div>
    </header>

    <!-- Page Content -->
    <main class="page-main">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="hero-left">
          <h1 class="hero-title">Panel de Control de <br><span class="accent-text">Seguridad Social</span></h1>
          <p class="hero-desc">Gestione sus certificados y supervisiones de manera eficiente desde una <br>plataforma centralizada y segura.</p>
        </div>
        <div class="hero-right">
          <button class="btn btn-green">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
            Reporte Mensual
          </button>
          <button class="btn btn-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            Historial
          </button>
        </div>
      </section>

      <!-- Stats Grid -->
      <section class="stats-grid">
        <div class="stat-card">
          <div class="stat-header">
            <div class="stat-icon-box green">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14.5 2 14.5 8 20 8"/></svg>
            </div>
            <span class="stat-badge green">+12% vs mes anterior</span>
          </div>
          <span class="stat-label">CERTIFICADOS EMITIDOS</span>
          <span class="stat-value">1,240</span>
        </div>

        <div class="stat-card">
          <div class="stat-header">
            <div class="stat-icon-box orange">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="m9 16 2 2 4-4"/></svg>
            </div>
            <span class="stat-badge orange">Requiere atención</span>
          </div>
          <span class="stat-label">PENDIENTES DE FIRMA</span>
          <span class="stat-value">15</span>
        </div>

        <div class="stat-card">
          <div class="stat-header">
            <div class="stat-icon-box blue">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="m9 14 2 2 4-4"/></svg>
            </div>
            <span class="stat-badge blue">Meta: 50</span>
          </div>
          <span class="stat-label">REVISIONES HOY</span>
          <span class="stat-value">42</span>
        </div>
      </section>

      <!-- Action Cards Section -->
      <section class="action-cards-grid">
        <div class="action-card form-card">
          <div class="card-visual-side green">
            <div class="visual-icon-box green">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14.5 2 14.5 8 20 8"/><path d="M10 13l2 2 4-4"/></svg>
            </div>
          </div>
          <div class="card-body">
            <h2 class="card-title">Llenar Formulario</h2>
            <p class="card-text">Complete nuevas solicitudes de certificados de seguridad social de forma digital. Acceso rápido a todos los formularios estandarizados.</p>
            <ul class="feature-list">
              <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#39a900" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg> Validación automática de datos</li>
              <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#39a900" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg> Guardado automático de borradores</li>
            </ul>
            <button class="btn-action primary" @click="$router.push('/platform-selection')">
              Nueva Solicitud <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
          </div>
        </div>

        <div class="action-card supervisor-card">
          <div class="card-visual-side dark">
            <div class="visual-icon-box dark">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
            </div>
          </div>
          <div class="card-body">
            <h2 class="card-title">Módulo Supervisor</h2>
            <p class="card-text">Revisión y aprobación de solicitudes pendientes. Control de calidad y seguimiento de procesos para personal autorizado.</p>
            <ul class="feature-list">
              <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#39a900" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg> Gestión de colas de aprobación</li>
              <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#39a900" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg> Firma digital centralizada</li>
            </ul>
            <button class="btn-action secondary">
              Panel de Supervisión <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 16h10"/><path d="M7 12h10"/><path d="M7 8h10"/></svg>
            </button>
          </div>
        </div>
      </section>

      <!-- Recent Requests Table -->
      <section class="requests-section">
        <div class="section-header">
          <h2 class="section-subtitle">Solicitudes Recientes</h2>
          <a href="#" class="view-all">Ver todo el historial</a>
        </div>
        <div class="table-container">
          <table class="data-table">
            <thead>
              <tr>
                <th>ID SOLICITUD</th>
                <th>BENEFICIARIO</th>
                <th>TIPO DE TRÁMITE</th>
                <th>FECHA</th>
                <th>ESTADO</th>
                <th>ACCIÓN</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="id-cell">#CS-9421</td>
                <td>
                  <div class="beneficiary">
                    <div class="avatar-sm">RM</div>
                    <span>Ricardo Martínez</span>
                  </div>
                </td>
                <td>Pensión por Vejez</td>
                <td class="date-cell">Hoy, 10:24 AM</td>
                <td><span class="status-badge orange-bg">Pendiente</span></td>
                <td><button class="view-btn"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0z"/><circle cx="12" cy="12" r="3"/></svg></button></td>
              </tr>
              <tr>
                <td class="id-cell">#CS-9420</td>
                <td>
                  <div class="beneficiary">
                    <div class="avatar-sm">LC</div>
                    <span>Laura Castro</span>
                  </div>
                </td>
                <td>Subsidio Familiar</td>
                <td class="date-cell">Ayer, 16:45 PM</td>
                <td><span class="status-badge green-bg">Aprobado</span></td>
                <td><button class="view-btn"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0z"/><circle cx="12" cy="12" r="3"/></svg></button></td>
              </tr>
              <tr>
                <td class="id-cell">#CS-9419</td>
                <td>
                  <div class="beneficiary">
                    <div class="avatar-sm">JS</div>
                    <span>Jorge Sánchez</span>
                  </div>
                </td>
                <td>Accidente Laboral</td>
                <td class="date-cell">24 Oct, 09:12 AM</td>
                <td><span class="status-badge green-bg">Aprobado</span></td>
                <td><button class="view-btn"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0z"/><circle cx="12" cy="12" r="3"/></svg></button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>

    <!-- Footer -->
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
import { ref, onMounted, computed } from 'vue';

const userName = ref('Usuario');
const isCollapsed = ref(false);

onMounted(() => {
  const savedName = localStorage.getItem('userName');
  if (savedName) {
    userName.value = savedName;
  }
});

const userInitials = computed(() => {
  if (!userName.value || userName.value === 'Usuario') return 'U';
  return userName.value.split(/[. ]/).map(n => n[0]).join('').substring(0, 2).toUpperCase();
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

.dashboard-container {
  font-family: 'Inter', sans-serif;
  background-color: #f8fafc;
  min-height: 100vh;
  color: #0f172a;
  display: flex;
  flex-direction: column;
}

/* Navbar Style */
.navbar {
  height: 64px;
  background-color: white;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4rem;
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
  gap: 1rem;
}

.brand-logo {
  width: 32px;
  height: 32px;
  background-color: #39a900;
  border-radius: 6px;
}

.brand-name {
  font-weight: 700;
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
  font-size: 0.95rem;
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

.search-bar {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background-color: #f1f5f9;
  padding: 0.6rem 1.25rem;
  border-radius: 12px;
  width: 280px;
}

.search-bar input {
  background: none;
  border: none;
  font-size: 0.9rem;
  outline: none;
  width: 100%;
}

.nav-icons {
  display: flex;
  gap: 0.75rem;
  border-right: 1px solid #e2e8f0;
  padding-right: 1.5rem;
}

.icon-btn {
  background: none;
  border: none;
  color: #64748b;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
}

.icon-btn:hover { background-color: #f1f5f9; color: #0f172a; }

.user-info {
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
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

.user-avatar {
  width: 40px;
  height: 40px;
  background-color: #ecfdf5;
  color: #39a900;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.85rem;
  border: 1px solid #d1fae5;
}

/* Hero Section Style */
.page-main {
  padding: 2rem 4rem;
  max-width: 1300px;
  margin: 0 auto;
  width: 100%;
}

.hero-section {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 3.5rem;
}

.hero-title {
  font-size: 2.25rem;
  font-weight: 800;
  line-height: 1.15;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
}

.accent-text { color: #39a900; }

.hero-desc {
  color: #64748b;
  font-size: 0.95rem;
  line-height: 1.6;
}

.hero-right {
  display: flex;
  gap: 1rem;
  padding-top: 1rem;
}

.btn {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.4rem;
  border-radius: 12px;
  font-weight: 700;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s;
  border: none;
}

.btn-green { background-color: #39a900; color: white; }
.btn-green:hover { background-color: #2d7a34; transform: translateY(-2px); box-shadow: 0 10px 20px rgba(57, 169, 0, 0.2); }

.btn-white { background-color: white; color: #0f172a; border: 1px solid #e2e8f0; }
.btn-white:hover { border-color: #cbd5e1; background-color: #f8fafc; transform: translateY(-2px); }

/* Stats Grid Style */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;
}

.stat-card {
  background-color: white;
  padding: 1.75rem;
  border-radius: 20px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  border: 1px solid #e2e8f0;
}

.stat-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.stat-icon-box {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.stat-icon-box.green { background-color: #ecfdf5; color: #10b981; }
.stat-icon-box.orange { background-color: #fff7ed; color: #f97316; }
.stat-icon-box.blue { background-color: #eff6ff; color: #3b82f6; }

.stat-badge {
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.4rem 0.8rem;
  border-radius: 30px;
}

.stat-badge.green { background-color: #dcfce7; color: #166534; }
.stat-badge.orange { background-color: #ffedd5; color: #9a3412; }
.stat-badge.blue { background-color: #dbeafe; color: #1e40af; }

.stat-label {
  display: block;
  font-size: 0.8rem;
  font-weight: 700;
  color: #94a3b8;
  letter-spacing: 0.05em;
  margin-bottom: 0.5rem;
}

.stat-value {
  font-size: 1.85rem;
  font-weight: 800;
  color: #0f172a;
}

/* Action Cards Style */
.action-cards-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
  margin-bottom: 4.5rem;
}

.action-card {
  background-color: white;
  border-radius: 32px;
  display: flex;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0,0,0,0.03);
  border: 1px solid #e2e8f0;
  transition: transform 0.3s ease;
}

.action-card:hover { transform: translateY(-8px); }

.card-visual-side {
  flex: 0 0 140px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-visual-side.green { background-color: #ecfdf5; }
.card-visual-side.dark { background-color: #f1f5f9; }

.visual-icon-box {
  width: 110px;
  height: 110px;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
}

.visual-icon-box.green { background-color: #10b981; color: white; }
.visual-icon-box.dark { background-color: #0f172a; color: white; }

.card-body {
  padding: 2rem;
  display: flex;
  flex-direction: column;
}

.card-title {
  font-size: 1.75rem;
  font-weight: 800;
  margin-bottom: 1rem;
}

.card-text {
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 1rem;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.feature-list li {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-weight: 600;
  font-size: 0.95rem;
  color: #334155;
}

.btn-action {
  padding: 1rem 2rem;
  border-radius: 16px;
  font-weight: 800;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  border: none;
  width: fit-content;
  transition: all 0.2s;
}

.btn-action.primary { background-color: #39a900; color: white; }
.btn-action.primary:hover { background-color: #2d7a34; box-shadow: 0 10px 25px rgba(57, 169, 0, 0.25); }

.btn-action.secondary { background-color: #0f172a; color: white; }
.btn-action.secondary:hover { background-color: #1e293b; box-shadow: 0 10px 25px rgba(15, 23, 42, 0.25); }

/* Table Style */
.requests-section {
  background-color: white;
  border-radius: 32px;
  padding: 2.5rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 10px 40px rgba(0,0,0,0.03);
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.5rem;
}

.section-subtitle {
  font-size: 1.5rem;
  font-weight: 800;
}

.view-all {
  color: #39a900;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.95rem;
}

.table-container { overflow-x: auto; }

.data-table {
  width: 100%;
  border-collapse: collapse;
}

.data-table th {
  text-align: left;
  font-size: 0.75rem;
  font-weight: 700;
  color: #94a3b8;
  padding: 1rem 1.5rem;
  border-bottom: 1.5px solid #f1f5f9;
  letter-spacing: 0.05em;
}

.data-table td {
  padding: 1.5rem;
  font-size: 0.95rem;
  color: #334155;
  border-bottom: 1px solid #f1f5f9;
}

.id-cell { font-weight: 700; color: #64748b; }

.beneficiary {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: 700;
}

.avatar-sm {
  width: 32px;
  height: 32px;
  border-radius: 10px;
  background-color: #f1f5f9;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 800;
  color: #475569;
}

.status-badge {
  padding: 0.4rem 1rem;
  border-radius: 30px;
  font-size: 0.8rem;
  font-weight: 800;
}

.orange-bg { background-color: #fff7ed; color: #f97316; }
.green-bg { background-color: #ecfdf5; color: #10b981; }

.view-btn {
  background: none;
  border: none;
  color: #94a3b8;
  cursor: pointer;
  padding: 0.5rem;
  transition: color 0.2s;
}

.view-btn:hover { color: #0f172a; }

/* Footer Style */
.page-footer {
  margin-top: auto;
  padding: 3rem 4rem;
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

@media (max-width: 1200px) {
  .hero-title { font-size: 2.5rem; }
  .action-cards-grid { grid-template-columns: 1fr; }
}

@media (max-width: 900px) {
  .stats-grid { grid-template-columns: 1fr; }
  .navbar { padding: 0 2rem; }
  .page-main { padding: 2rem; }
  .hero-section { flex-direction: column; gap: 2rem; }
  .nav-links { display: none; }
}
</style>
