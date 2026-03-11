<template>
  <div class="selection-container">
    <!-- Main Content -->
    <main class="selection-main">
      <div class="hero-text">
        <h1 class="hero-title">Seleccione Plataforma</h1>
        <p class="hero-subtitle">Elija la plataforma para procesar su certificado de seguridad social de manera rápida y segura.</p>
      </div>

      <div class="platform-grid">
        <div 
          v-for="platform in platforms" 
          :key="platform.id" 
          class="platform-card" 
          :class="{ active: selectedPlatform === platform.id }"
          @click="selectedPlatform = platform.id"
        >
          <div class="card-visual">
            <img v-if="platform.image" :src="platform.image" :alt="platform.name" class="platform-image" />
            <component v-else :is="platform.icon" class="platform-icon" />
          </div>
          <div class="card-info">
            <h3 class="platform-name">{{ platform.name }}</h3>
            <p class="platform-desc">Procesar vía {{ platform.name }}</p>
          </div>
        </div>
      </div>

      <div class="action-footer">
        <button class="btn btn-outline" @click="$router.push('/dashboard')">Volver</button>
        <button 
          class="btn btn-primary" 
          :disabled="!selectedPlatform"
          @click="handleContinue"
        >
          Continuar
        </button>
      </div>
    </main>

  </div>
</template>

<script setup>
import { ref, markRaw } from 'vue';
import { useRouter } from 'vue-router';
import soiLogo from '../assets/platforms/soi_logo.png';
import asopagosLogo from '../assets/platforms/asopagos_logo.png';
import compensarLogo from '../assets/platforms/compensar_logo.png';
import aportesLogo from '../assets/platforms/aportes_logo.png';

const router = useRouter();
const selectedPlatform = ref(null);

const platforms = [
  { 
    id: 'soi', 
    name: 'SOI', 
    image: soiLogo,
    icon: markRaw({
      template: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M3 7v1a3 3 0 0 0 6 0V7m6 0v1a3 3 0 0 0 6 0V7M9 7h6"/><path d="M9 11v10"/><path d="M15 11v10"/><path d="M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"/></svg>`
    })
  },
  { 
    id: 'asopagos', 
    name: 'ASOPAGOS', 
    image: asopagosLogo,
    icon: markRaw({
      template: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/></svg>`
    })
  },
  { 
    id: 'compensar', 
    name: 'COMPENSAR', 
    image: compensarLogo,
    icon: markRaw({
      template: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.82 2.96 0l2.96-2.96"/><path d="M12 21v-5"/></svg>`
    })
  },
  { 
    id: 'aportes', 
    name: 'APORTES EN LÍNEA', 
    image: aportesLogo,
    icon: markRaw({
      template: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/><path d="m19 19-2-2"/><path d="m5 5 2 2"/><path d="m19 5-2 2"/><path d="m5 19 2 2"/></svg>`
    })
  }
];

const handleContinue = () => {
  if (selectedPlatform.value) {
    alert(`Plataforma elegida: ${selectedPlatform.value}. Procediendo al formulario...`);
  }
};
</script>

<style scoped>
.selection-container {
  height: 100vh;
  overflow: hidden;
  background-color: #f8fafc;
  color: #0f172a;
  display: flex;
  flex-direction: column;
}

/* Main Content */
.selection-main {
  flex: 1;
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.hero-text {
  text-align: left;
  width: 100%;
  margin-bottom: 1.5rem;
}

.hero-title {
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
}

.hero-subtitle {
  color: #64748b;
  font-size: 0.95rem;
  max-width: 600px;
}

.platform-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  width: 100%;
  margin-bottom: 2rem;
}

.platform-card {
  background-color: white;
  border-radius: 12px;
  padding: 1.25rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}

.platform-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.platform-card.active {
  border-color: #10b981;
  background-color: #f0fdf4;
}

.card-visual {
  width: 140px;
  height: 180px;
  background-color: #eef2f6;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.platform-icon {
  width: 48px;
  height: 48px;
}

.platform-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
}

.platform-name {
  font-weight: 800;
  font-size: 1.1rem;
  margin-bottom: 0.25rem;
}

.platform-desc {
  color: #64748b;
  font-size: 0.75rem;
}

.action-footer {
  display: flex;
  gap: 1.25rem;
  margin-top: 1rem;
}

.btn {
  padding: 0.85rem 3rem;
  border-radius: 10px;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s;
  border: none;
}

.btn-outline {
  background-color: #e2e8f0;
  color: #475569;
}

.btn-outline:hover {
  background-color: #cbd5e1;
}

.btn-primary {
  background-color: #10b981;
  color: white;
}

.btn-primary:hover:not(:disabled) {
  background-color: #059669;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
}

.btn-primary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}


@media (max-width: 1024px) {
  .platform-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 640px) {
  .platform-grid { grid-template-columns: 1fr; }
  .hero-title { font-size: 2.25rem; }
}
</style>
