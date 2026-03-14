<template>
  <div class="certificates-container">
    <!-- Top Navigation Bar -->
    <header class="navbar">
      <div class="nav-left">
        <div class="brand">
          <div class="brand-logo"></div>
          <span class="brand-name">Certificados SS</span>
        </div>
        <nav class="nav-links">
          <router-link to="/certificados" class="nav-link active">Certificados</router-link>
        </nav>
      </div>

      <div class="nav-right">
        <div class="nav-icons">
          <button class="icon-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
          </button>
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

          <!-- Profile Dropdown -->
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

    <main class="page-main">
      <!-- Header Row -->
      <div class="page-header">
        <div class="title-section">
          <h1 class="page-title">Reportes de Cumplimiento</h1>
          <p class="page-subtitle">Gestione, filtre y exporte certificados de seguridad social de contratistas</p>
        </div>
        <div class="header-actions">
          <button class="btn btn-white" @click="handleExportPDF">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
            Exportar PDF
          </button>
          <button class="btn btn-green" @click="handleExportExcel">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/></svg>
            Exportar Excel
          </button>
          <button class="btn btn-blue" @click="handleExportDrive">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            Sincronizar Drive
          </button>
        </div>
      </div>      <!-- Filters Bar -->
      <div class="filters-bar">
        <div class="filter-group">
          <!-- Date Filter -->
          <div class="filter-item-wrapper">
            <button class="filter-btn" @click="toggleDateMenu">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
              <span>{{ formattedDateRange }}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="chevron"><path d="m6 9 6 6 6-6"/></svg>
            </button>
            
            <div v-if="isDateMenuOpen" class="date-picker-dropdown">
              <div class="date-input-group">
                <label>Desde:</label>
                <input type="date" v-model="filterDateStart" class="date-input">
              </div>
              <div class="date-input-group">
                <label>Hasta:</label>
                <input type="date" v-model="filterDateEnd" class="date-input">
              </div>
              <div class="date-picker-footer">
                <button class="btn-clear-date" @click="clearDateRange">Limpiar</button>
                <button class="btn-apply-date" @click="isDateMenuOpen = false">Aplicar</button>
              </div>
            </div>
          </div>

          <!-- Contractor Filter -->
          <div class="filter-item-wrapper">
            <button class="filter-btn" @click="toggleContractorMenu">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              <span>{{ selectedContractor || 'Contratista' }}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="chevron"><path d="m6 9 6 6 6-6"/></svg>
            </button>

            <div v-if="isContractorMenuOpen" class="contractor-picker-dropdown">
              <div class="search-input-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="search-icon"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                <input type="text" v-model="searchContractorText" placeholder="Buscar contratista..." class="dropdown-search-input">
              </div>
              <div class="contractor-list">
                <button class="contractor-item" :class="{ active: !selectedContractor }" @click="selectContractor('')">
                  Todos los contratistas
                </button>
                <button 
                  v-for="name in filteredContractorNames" 
                  :key="name" 
                  class="contractor-item"
                  :class="{ active: selectedContractor === name }"
                  @click="selectContractor(name)"
                >
                  {{ name }}
                </button>
              </div>
            </div>
          </div>

          <!-- Platform Filter -->
          <div class="filter-item-wrapper">
            <button class="filter-btn" @click="togglePlatformMenu">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              <span>{{ filterPlatform || 'Plataforma: Todas' }}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="chevron"><path d="m6 9 6 6 6-6"/></svg>
            </button>

            <div v-if="isPlatformMenuOpen" class="platform-picker-dropdown">
              <button class="platform-item" :class="{ active: !filterPlatform }" @click="selectPlatform('')">
                Todas las plataformas
              </button>
              <button 
                v-for="plat in ['SOI', 'Asopagos', 'Compensar', 'Aportes']" 
                :key="plat" 
                class="platform-item"
                :class="{ active: filterPlatform === plat }"
                @click="selectPlatform(plat)"
              >
                {{ plat }}
              </button>
            </div>
          </div>

          <!-- Status Filter -->
          <div class="filter-item-wrapper">
            <button class="filter-btn" @click="toggleStatusMenu">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
              <span>{{ filterStatus || 'Estado' }}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="chevron"><path d="m6 9 6 6 6-6"/></svg>
            </button>

            <div v-if="isStatusMenuOpen" class="status-picker-dropdown">
              <button class="status-item" :class="{ active: !filterStatus }" @click="selectStatus('')">
                Todos los estados
              </button>
              <button 
                v-for="status in ['Aprobado', 'No aprobado']" 
                :key="status" 
                class="status-item"
                :class="{ active: filterStatus === status }"
                @click="selectStatus(status)"
              >
                {{ status }}s
              </button>
            </div>
          </div>
        </div>

        <!-- Global Search Bar -->
        <div class="search-bar-wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="search-icon"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          <input 
            type="text" 
            v-model="searchQuery" 
            placeholder="Buscar por nombre, cédula o área..." 
            class="global-search-input"
          >
        </div>

        <button class="btn-text" @click="clearAllFilters">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="14" y1="11" y2="17"/><line x1="14" x2="10" y1="11" y2="17"/></svg>
          Limpiar filtros
        </button>
      </div>

      <!-- Main Table Card -->
      <div class="table-card">
        <table class="data-table">
          <thead>
            <tr>
              <th>FECHA DE SOLICITUD</th>
              <th>ID (CÉDULA)</th>
              <th>NOMBRE</th>
              <th>CONTRATISTA</th>
              <th>PLATAFORMA</th>
              <th>ESTADO</th>
              <th>VISUALIZAR</th>
              <th>PLANILLA</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in paginatedCertificates" :key="item.id">
              <td class="date-cell">{{ item.date }}</td>
              <td class="id-cell">{{ item.cedula }}</td>
              <td class="name-cell">{{ item.persona }}</td>
              <td>
                <div class="contractor-cell">
                  <div class="avatar-sm">{{ item.initials }}</div>
                  <span>{{ item.name }}</span>
                </div>
              </td>
              <td>
                <span :class="['platform-badge', item.platform.toLowerCase()]">
                  {{ item.platform }}
                </span>
              </td>
              <td>
                <div :class="['status-cell', item.status === 'Aprobado' ? 'success' : 'danger']">
                  <svg v-if="item.status === 'Aprobado'" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                  <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                  {{ item.status }}
                </div>
              </td>
              <td>
                <button class="btn-visualize" @click="handleVisualize(item)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75(0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0z"/><circle cx="12" cy="12" r="3"/></svg>
                  <span>Visualizar</span>
                </button>
              </td>
              <td>
                <button class="btn-pdf-download" @click="handleExportPDF(item)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M12 18v-6"/><path d="m9 15 3 3 3-3"/></svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <!-- Table Footer/Pagination -->
        <div class="table-footer">
          <span class="results-info">
            Mostrando {{ (currentPage - 1) * itemsPerPage + 1 }} a {{ Math.min(currentPage * itemsPerPage, filteredCertificates.length) }} de {{ filteredCertificates.length }} resultados
          </span>
          <div class="pagination">
            <button class="pager-btn" :disabled="currentPage === 1" @click="prevPage">Anterior</button>
            <button 
              v-for="page in totalPages" 
              :key="page" 
              class="pager-btn" 
              :class="{ active: currentPage === page }"
              @click="goToPage(page)"
            >
              {{ page }}
            </button>
            <button class="pager-btn" :disabled="currentPage === totalPages" @click="nextPage">Siguiente</button>
          </div>
        </div>
      </div>

      <!-- Stats Grid -->
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-icon green">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
          </div>
          <div class="stat-info">
            <span class="stat-label">CERTIFICADOS APROBADOS</span>
            <span class="stat-value">{{ totalApproved }}</span>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon orange">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 9h8"/><path d="M8 13h6"/></svg>
          </div>
          <div class="stat-info">
            <span class="stat-label">NO APROBADOS / PENDIENTES</span>
            <span class="stat-value">{{ totalPending }}</span>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon blue">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 16h5v5"/></svg>
          </div>
          <div class="stat-info">
            <span class="stat-label">ÚLTIMA SINCRONIZACIÓN</span>
            <span class="stat-value">{{ lastSyncTime }}</span>
          </div>
        </div>
      </div>

      <!-- Drive Sync Modal -->
      <div v-if="isDriveModalOpen" class="modal-overlay" @click.self="closeDriveModal">
        <div class="modal-card">
          <div class="modal-header">
            <div class="modal-icon-circle">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4285F4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            </div>
            <h3>Sincronizar con Google Drive</h3>
            <p>El reporte se subirá automáticamente a su unidad en la nube.</p>
          </div>
          
          <div class="modal-body">
            <div class="form-group">
              <label>Cuenta de Google (Email)</label>
              <div class="input-with-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12A10 10 0 0 1 12 22 10 10 0 0 1 2 12 10 10 0 0 1 12 2 10 10 0 0 1 22 12z"/><path d="M16 12a4 4 0 1 0-8 0 4 4 0 0 0 8 0Zm0 0v1.5a2.5 2.5 0 0 0 5 0V12a9 9 0 1 0-3.9 7.1"/></svg>
                <input 
                  type="email" 
                  v-model="driveEmail" 
                  placeholder="ejemplo@google.com" 
                  :disabled="isSyncingToDrive"
                >
              </div>
              <small>Esta es la cuenta donde se guardará el archivo PDF generado.</small>
            </div>

            <div v-if="isSyncingToDrive" class="sync-progress">
              <div class="progress-bar-container">
                <div class="progress-bar-fill"></div>
              </div>
              <p>Sincronizando archivos con Google Drive...</p>
            </div>
          </div>

          <div class="modal-footer">
            <button class="btn-cancel" @click="closeDriveModal" :disabled="isSyncingToDrive">Cancelar</button>
            <button class="btn-confirm" @click="confirmDriveExport" :disabled="isSyncingToDrive">
              <span v-if="isSyncingToDrive" class="loading-spinner-small"></span>
              {{ isSyncingToDrive ? 'Sincronizando...' : 'Empezar Sincronización' }}
            </button>
          </div>
        </div>
      </div>

      <!-- View Form Modal -->
      <div v-if="isViewModalOpen" class="modal-overlay form-modal-overlay" @click.self="isViewModalOpen = false">
        <div class="form-modal-container">
          <SoiForm 
            v-if="selectedItemForView?.platform === 'SOI'" 
            :initialData="selectedItemForView" 
            :readOnly="true"
            @cancel="isViewModalOpen = false"
          />
          <AsopagosForm 
            v-else-if="selectedItemForView?.platform === 'Asopagos'" 
            :initialData="selectedItemForView" 
            :readOnly="true"
            @cancel="isViewModalOpen = false"
          />
          <CompensarForm 
            v-else-if="selectedItemForView?.platform === 'Compensar'" 
            :initialData="selectedItemForView" 
            :readOnly="true"
            @cancel="isViewModalOpen = false"
          />
          <AportesForm 
            v-else-if="selectedItemForView?.platform === 'Aportes'" 
            :initialData="selectedItemForView" 
            :readOnly="true"
            @cancel="isViewModalOpen = false"
          />
        </div>
      </div>

      <!-- Edit Profile Modal -->
      <div v-if="isEditProfileModalOpen" class="modal-overlay" @click.self="closeEditProfileModal">
        <div class="modal-card">
          <div class="modal-header">
            <div class="modal-icon-circle" style="background-color: #fff7ed;">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </div>
            <h3>Editar Perfil</h3>
            <p>Actualizar la información de tu cuenta.</p>
          </div>
          
          <div class="modal-body">
            <div class="form-group">
              <label>Nombre de Usuario</label>
              <div class="input-with-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                <input type="text" v-model="userName" placeholder="Nombre actual">
              </div>
            </div>

            <div class="form-group" style="margin-top: 1.25rem;">
              <label>Nueva Contraseña</label>
              <div class="input-with-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                <input type="password" v-model="profileData.password" placeholder="Ingresa nueva contraseña">
              </div>
            </div>

            <div class="form-group" style="margin-top: 1.25rem;">
              <label>Confirmar Contraseña</label>
              <div class="input-with-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                <input type="password" v-model="profileData.confirmPassword" placeholder="Confirma nueva contraseña">
              </div>
            </div>
          </div>

          <div class="modal-footer">
            <button class="btn-cancel" @click="closeEditProfileModal">Cancelar</button>
            <button class="btn-confirm" style="background-color: #f97316; box-shadow: 0 4px 12px rgba(249, 115, 22, 0.3);" @click="saveProfileChanges">
              Guardar Cambios
            </button>
          </div>
        </div>
      </div>
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
import { ref, onMounted, computed, watch } from 'vue';
import { useRouter } from 'vue-router';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import SoiForm from '../components/SoiForm.vue';
import AsopagosForm from '../components/AsopagosForm.vue';
import CompensarForm from '../components/CompensarForm.vue';
import AportesForm from '../components/AportesForm.vue';

const router = useRouter();
const userName = ref('Usuario');
const isUserMenuOpen = ref(false);
const isDateMenuOpen = ref(false);
const isContractorMenuOpen = ref(false);
const isPlatformMenuOpen = ref(false);
const isStatusMenuOpen = ref(false);
const filterDateStart = ref('');
const filterDateEnd = ref('');
const searchContractorText = ref('');
const selectedContractor = ref('');
const filterPlatform = ref('');
const filterStatus = ref('');
const searchQuery = ref('');
const isDriveModalOpen = ref(false);
const isSyncingToDrive = ref(false);
const driveEmail = ref('usuario.ejemplo@sena.edu.co');
const lastSyncTime = ref('');

// Visualization Modal State
const isViewModalOpen = ref(false);
const selectedItemForView = ref(null);

const handleVisualize = (item) => {
  selectedItemForView.value = { ...item };
  isViewModalOpen.value = true;
};

const toggleUserMenu = () => {
  isUserMenuOpen.value = !isUserMenuOpen.value;
  if (isUserMenuOpen.value) {
    isDateMenuOpen.value = false;
    isContractorMenuOpen.value = false;
    isPlatformMenuOpen.value = false;
    isStatusMenuOpen.value = false;
  }
};

const toggleDateMenu = () => {
  isDateMenuOpen.value = !isDateMenuOpen.value;
  if (isDateMenuOpen.value) {
    isUserMenuOpen.value = false;
    isContractorMenuOpen.value = false;
    isPlatformMenuOpen.value = false;
    isStatusMenuOpen.value = false;
  }
};

const toggleContractorMenu = () => {
  isContractorMenuOpen.value = !isContractorMenuOpen.value;
  if (isContractorMenuOpen.value) {
    isUserMenuOpen.value = false;
    isDateMenuOpen.value = false;
    isPlatformMenuOpen.value = false;
    isStatusMenuOpen.value = false;
  }
};

const togglePlatformMenu = () => {
  isPlatformMenuOpen.value = !isPlatformMenuOpen.value;
  if (isPlatformMenuOpen.value) {
    isUserMenuOpen.value = false;
    isDateMenuOpen.value = false;
    isContractorMenuOpen.value = false;
    isStatusMenuOpen.value = false;
  }
};

const toggleStatusMenu = () => {
  isStatusMenuOpen.value = !isStatusMenuOpen.value;
  if (isStatusMenuOpen.value) {
    isUserMenuOpen.value = false;
    isDateMenuOpen.value = false;
    isContractorMenuOpen.value = false;
    isPlatformMenuOpen.value = false;
  }
};

const selectContractor = (name) => {
  selectedContractor.value = name;
  isContractorMenuOpen.value = false;
};

const selectPlatform = (plat) => {
  filterPlatform.value = plat;
  isPlatformMenuOpen.value = false;
};

const selectStatus = (status) => {
  filterStatus.value = status;
  isStatusMenuOpen.value = false;
};

const isEditProfileModalOpen = ref(false);
const profileData = ref({
  password: '',
  confirmPassword: ''
});

const handleEditProfile = () => {
  isEditProfileModalOpen.value = true;
  isUserMenuOpen.value = false;
};

const closeEditProfileModal = () => {
  isEditProfileModalOpen.value = false;
  profileData.value.password = '';
  profileData.value.confirmPassword = '';
};

const saveProfileChanges = () => {
  if (profileData.value.password || profileData.value.confirmPassword) {
    if (profileData.value.password !== profileData.value.confirmPassword) {
      alert('Las contraseñas no coinciden.');
      return;
    }
    localStorage.setItem('userPassword', profileData.value.password);
  }
  
  if (userName.value.trim() !== '') {
    localStorage.setItem('userName', userName.value);
  }
  
  alert('Perfil actualizado correctamente.');
  closeEditProfileModal();
};

const handleLogout = () => {
  localStorage.removeItem('userName');
  router.push('/dashboard');
};

const currentPage = ref(1);
const itemsPerPage = ref(5);

const certificates = ref([
  { id: '1290', persona: 'Santiago Pérez', date: '01 Oct, 2023', name: 'Instructores', cedula: '1098765432', initials: 'IN', platform: 'SOI', status: 'Aprobado' },
  { id: '1289', persona: 'María García', date: '02 Oct, 2023', name: 'Apoyo administrativo', cedula: '1087654321', initials: 'AA', platform: 'Asopagos', status: 'No aprobado' },
  { id: '1288', persona: 'Carlos Ruiz', date: '05 Oct, 2023', name: 'Profesionales', cedula: '1076543210', initials: 'PR', platform: 'SOI', status: 'Aprobado' },
  { id: '1287', persona: 'Elena López', date: '07 Oct, 2023', name: 'Tecnología', initials: 'TE', cedula: '1065432109', platform: 'Asopagos', status: 'Aprobado' },
  { id: '1286', persona: 'Andrés Castro', date: '10 Oct, 2023', name: 'Bienestar', initials: 'BI', cedula: '1054321098', platform: 'SOI', status: 'No aprobado' },
  { id: '1285', persona: 'Paula Ortiz', date: '12 Oct, 2023', name: 'Gestión documental', cedula: '1043210987', initials: 'GD', platform: 'Asopagos', status: 'Aprobado' },
  { id: '1284', persona: 'Javier Rocha', date: '14 Oct, 2023', name: 'Instructores', cedula: '1032109876', initials: 'IN', platform: 'Compensar', status: 'Aprobado' },
  { id: '1283', persona: 'Laura Vaca', date: '15 Oct, 2023', name: 'Profesionales', cedula: '1021098765', initials: 'PR', platform: 'Aportes', status: 'Aprobado' },
  { id: '1282', persona: 'Ricardo Silva', date: '16 Oct, 2023', name: 'Tecnología', cedula: '1010987654', initials: 'TE', platform: 'SOI', status: 'No aprobado' },
  { id: '1281', persona: 'Monica Diaz', date: '18 Oct, 2023', name: 'Bienestar', cedula: '1009876543', initials: 'BI', platform: 'Asopagos', status: 'Aprobado' }
]);

// Helper to parse "DD Mon, YYYY" (e.g., "01 Oct, 2023")
const parseItemDate = (dateStr) => {
  const months = {
    Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
    Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11
  };
  const parts = dateStr.replace(',', '').split(' ');
  const day = parseInt(parts[0]);
  const month = months[parts[1]];
  const year = parseInt(parts[2]);
  return new Date(year, month, day);
};

const filteredCertificates = computed(() => {
  let result = certificates.value;

  // Global Search (Name, Cedula, Platform)
  if (searchQuery.value) {
    const q = searchQuery.value.toLowerCase();
    result = result.filter(item => 
      item.name.toLowerCase().includes(q) || 
      item.cedula.toLowerCase().includes(q) || 
      item.platform.toLowerCase().includes(q)
    );
  }

  // Filter by Contractor
  if (selectedContractor.value) {
    result = result.filter(item => item.name === selectedContractor.value);
  }

  // Filter by Platform
  if (filterPlatform.value) {
    result = result.filter(item => item.platform.toLowerCase() === filterPlatform.value.toLowerCase());
  }

  // Filter by Status
  if (filterStatus.value) {
    result = result.filter(item => item.status === filterStatus.value);
  }

  // Filter by Date
  if (filterDateStart.value || filterDateEnd.value) {
    const start = filterDateStart.value ? new Date(filterDateStart.value) : null;
    const end = filterDateEnd.value ? new Date(filterDateEnd.value) : null;

    if (start) start.setHours(0, 0, 0, 0);
    if (end) end.setHours(23, 59, 59, 999);

    result = result.filter(item => {
      const itemDate = parseItemDate(item.date);
      if (start && itemDate < start) return false;
      if (end && itemDate > end) return false;
      return true;
    });
  }

  return result;
});

const totalPages = computed(() => {
  return Math.ceil(filteredCertificates.value.length / itemsPerPage.value);
});

const paginatedCertificates = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return filteredCertificates.value.slice(start, end);
});

const totalApproved = computed(() => {
  return filteredCertificates.value.filter(item => item.status === 'Aprobado').length;
});

const totalPending = computed(() => {
  return filteredCertificates.value.filter(item => item.status === 'No aprobado').length;
});

const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--;
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++;
};

const goToPage = (page) => {
  currentPage.value = page;
};

// Reset page when filters change
watch([searchQuery, selectedContractor, filterPlatform, filterStatus, filterDateStart, filterDateEnd], () => {
  currentPage.value = 1;
});

const filteredContractorNames = computed(() => {
  const names = [...new Set(certificates.value.map(item => item.name))];
  if (!searchContractorText.value) return names;
  return names.filter(name => 
    name.toLowerCase().includes(searchContractorText.value.toLowerCase())
  );
});

const formattedDateRange = computed(() => {
  if (!filterDateStart.value && !filterDateEnd.value) return 'Rango de Fechas';
  if (filterDateStart.value && filterDateEnd.value) return `${filterDateStart.value} - ${filterDateEnd.value}`;
  return filterDateStart.value ? `Desde ${filterDateStart.value}` : `Hasta ${filterDateEnd.value}`;
});

const clearDateRange = () => {
  filterDateStart.value = '';
  filterDateEnd.value = '';
};

const clearAllFilters = () => {
  clearDateRange();
  selectedContractor.value = '';
  searchContractorText.value = '';
  filterPlatform.value = '';
  filterStatus.value = '';
  searchQuery.value = '';
  currentPage.value = 1;
};

const handleExportExcel = () => {
  if (filteredCertificates.value.length === 0) {
    alert('No hay datos para exportar con los filtros actuales.');
    return;
  }

  // Headers for CSV
  const headers = ['Fecha de Solicitud', 'ID (Cédula)', 'Nombre', 'Contratista', 'Plataforma', 'Estado'];
  
  // Map data to rows
  const rows = filteredCertificates.value.map(item => [
    item.date,
    item.cedula,
    item.persona,
    item.name,
    item.platform,
    item.status
  ]);

  // Combined CSV content with BOM for UTF-8 (Excel friendly)
  const csvContent = "\uFEFF" + [
    headers.join(','),
    ...rows.map(row => row.join(','))
  ].join('\n');

  // Create blob and download link
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  
  link.setAttribute('href', url);
  link.setAttribute('download', 'certificados_export.csv');
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const handleExportPDF = (specificItem = null) => {
  const dataToExport = specificItem ? [specificItem] : filteredCertificates.value;

  if (dataToExport.length === 0) {
    alert('No hay datos para exportar.');
    return;
  }
  
  const doc = new jsPDF();
  
  // Add title
  doc.setFontSize(18);
  const title = specificItem ? `Formulario de Contratista - ${specificItem.persona}` : 'Reporte de Cumplimiento de Certificados';
  doc.text(title, 14, 22);
  doc.setFontSize(11);
  doc.setTextColor(100);
  
  // Add metadata
  const date = new Date().toLocaleDateString();
  doc.text(`Fecha de generación: ${date}`, 14, 30);
  if (!specificItem) {
    doc.text(`Total de registros: ${dataToExport.length}`, 14, 36);
  }
  
  // Generate Table
  const tableColumn = ["Fecha", "ID (Cédula)", "Nombre", "Contratista", "Plataforma", "Estado"];
  const tableRows = dataToExport.map(item => [
    item.date,
    item.cedula,
    item.persona,
    item.name,
    item.platform,
    item.status
  ]);

  autoTable(doc, {
    head: [tableColumn],
    body: tableRows,
    startY: specificItem ? 40 : 45,
    theme: 'striped',
    headStyles: { fillColor: [34, 197, 94] }, // Verde SENA
    styles: { fontSize: 9 }
  });

  // Download the PDF
  const filename = specificItem ? `formulario_${specificItem.cedula}.pdf` : 'reporte_certificados.pdf';
  doc.save(filename);
};

const handleExportDrive = () => {
  if (filteredCertificates.value.length === 0) {
    alert('No hay datos para sincronizar con Google Drive.');
    return;
  }
  isDriveModalOpen.value = true;
};

const closeDriveModal = () => {
  if (isSyncingToDrive.value) return;
  isDriveModalOpen.value = false;
};

const confirmDriveExport = () => {
  if (!driveEmail.value || !driveEmail.value.includes('@')) {
    alert('Por favor, ingrese un correo electrónico válido.');
    return;
  }

  isSyncingToDrive.value = true;
  
  // Simulate the process
  setTimeout(() => {
    // Stage 2: Uploading
    setTimeout(() => {
      isSyncingToDrive.value = false;
      isDriveModalOpen.value = false;
      alert(`¡Sincronización Exitosa! El reporte se ha guardado en la unidad de Drive asociada a: ${driveEmail.value}`);
      
      // Persist the email used if it changed
      localStorage.setItem('lastDriveEmail', driveEmail.value);
    }, 2500);
  }, 1500);
};

const generatePDFBlob = () => {
  const doc = new jsPDF();
  doc.setFontSize(18);
  doc.text('Reporte de Cumplimiento de Certificados', 14, 22);
  doc.setFontSize(11);
  const date = new Date().toLocaleDateString();
  doc.text(`Fecha: ${date}`, 14, 30);
  
  const tableColumn = ["Fecha", "ID (Cédula)", "Nombre", "Contratista", "Plataforma", "Estado"];
  const tableRows = filteredCertificates.value.map(item => [
    item.date, item.cedula, item.persona, item.name, item.platform, item.status
  ]);

  autoTable(doc, {
    head: [tableColumn],
    body: tableRows,
    startY: 40,
    theme: 'striped',
    headStyles: { fillColor: [34, 197, 94] }
  });
  
  return doc;
};

onMounted(() => {
  const savedName = localStorage.getItem('userName');
  if (savedName) {
    userName.value = savedName;
  }

  const savedEmail = localStorage.getItem('userEmail') || localStorage.getItem('lastDriveEmail');
  if (savedEmail) {
    driveEmail.value = savedEmail;
  }
  
  // Set sync time
  const now = new Date();
  lastSyncTime.value = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

.certificates-container {
  font-family: 'Inter', sans-serif;
  background-color: #f1f8f6; /* Very light green-grey */
  min-height: 125vh; /* Compensates for zoom: 0.8 (100 / 0.8) */
  color: #0f172a;
  display: flex;
  flex-direction: column;
  zoom: 0.8;
}

/* Navbar */
.navbar {
  height: 52px; /* Reduced from 60px */
  background-color: white;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem; /* Reduced from 4rem */
  position: sticky;
  top: 0;
  z-index: 1000;
}

.nav-left, .nav-right {
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

/* User Dropdown Style */
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
  color: #334155;
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

.dropdown-item.logout {
  color: #ef4444;
}

.dropdown-item.logout:hover {
  background-color: #fef2f2;
}

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

/* Page Main */
.page-main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem 2rem; /* Reduced from 2rem 4rem */
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem; /* Matches hero-section */
}

.page-title {
  font-size: 1.6rem;
  font-weight: 800;
  line-height: 1.15;
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
}

.page-subtitle {
  color: #64748b;
  font-size: 0.85rem;
  line-height: 1.6;
}

.header-actions {
  display: flex;
  gap: 1rem;
}

.btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.55rem 1.25rem; /* Reduced from 0.75rem 1.5rem */
  border-radius: 10px; /* Reduced from 12px */
  font-weight: 700;
  font-size: 0.8rem; /* Reduced from 0.9rem */
  cursor: pointer;
  border: none;
  transition: all 0.2s;
}

.btn-white {
  background-color: #f8fafc;
  color: #1e293b;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
}

.btn-green {
  background-color: #22c55e;
  color: white;
  box-shadow: 0 10px 15px -3px rgba(34, 197, 94, 0.4);
}

.btn-blue {
  background-color: #4285F4;
  color: white;
  box-shadow: 0 10px 15px -3px rgba(66, 133, 244, 0.4);
}

.loading-spinner-small {
  width: 14px;
  height: 14px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 0.8s linear infinite;
  display: inline-block;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Filters Bar */
.filters-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  background-color: #ffffff;
  padding: 0.85rem 1.25rem;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);
}

.filter-group {
  display: flex;
  gap: 1rem;
  flex-shrink: 0;
}

.filter-item-wrapper {
  position: relative;
}

.filter-btn {
  background-color: #f8fafc;
  border: 1px solid #e2e8f0;
  padding: 0.55rem 0.85rem;
  border-radius: 10px;
  font-size: 0.8rem;
  font-weight: 700;
  color: #475569;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;
}

.filter-btn:hover {
  background-color: #ffffff;
  border-color: #39a900;
  color: #39a900;
  box-shadow: 0 4px 12px rgba(57, 169, 0, 0.08);
  transform: translateY(-1px);
}

.filter-btn svg:first-child {
  color: #39a900;
  opacity: 0.8;
}

.filter-btn .chevron {
  color: #94a3b8;
  margin-left: auto;
}

/* Date Picker Dropdown */
.date-picker-dropdown {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  width: 260px;
  background-color: white;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  padding: 1.25rem;
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.date-input-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.date-input-group label {
  font-size: 0.75rem;
  font-weight: 700;
  color: #64748b;
  text-transform: uppercase;
}

.date-input {
  padding: 0.6rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 0.85rem;
  color: #334155;
  outline: none;
}

.date-input:focus {
  border-color: #39a900;
}

.date-picker-footer {
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
}

.btn-clear-date {
  background: none;
  border: none;
  font-size: 0.8rem;
  font-weight: 600;
  color: #ef4444;
  cursor: pointer;
}

.btn-apply-date {
  background-color: #39a900;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
}

/* Contractor Filter Dropdown */
.contractor-picker-dropdown {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  width: 280px;
  background-color: white;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  padding: 0.75rem;
  z-index: 100;
  display: flex;
  flex-direction: column;
}

.search-input-wrapper {
  position: relative;
  margin-bottom: 0.5rem;
}

.search-icon {
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: #94a3b8;
}

.dropdown-search-input {
  width: 100%;
  padding: 0.5rem 0.75rem 0.5rem 2.25rem;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  font-size: 0.85rem;
  outline: none;
  background-color: #f8fafc;
}

.dropdown-search-input:focus {
  border-color: #39a900;
  background-color: white;
}

.contractor-list {
  max-height: 200px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.contractor-item {
  padding: 0.6rem 0.75rem;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  color: #334155;
  text-align: left;
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
}

.contractor-item:hover {
  background-color: #f1f5f9;
}

.contractor-item.active {
  background-color: #f0fdf4;
  color: #16a34a;
}

/* Platform Filter Dropdown */
.platform-picker-dropdown {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  width: 200px;
  background-color: white;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  padding: 0.5rem;
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.platform-item {
  padding: 0.6rem 0.75rem;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  color: #334155;
  text-align: left;
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
}

.platform-item:hover {
  background-color: #f1f5f9;
}

.platform-item.active {
  background-color: #f0fdf4;
  color: #16a34a;
}

/* Status Filter Dropdown */
.status-picker-dropdown {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  width: 180px;
  background-color: white;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  padding: 0.5rem;
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.status-item {
  padding: 0.6rem 0.75rem;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  color: #334155;
  text-align: left;
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
}

.status-item:hover {
  background-color: #f1f5f9;
}

.status-item.active {
  background-color: #f0fdf4;
  color: #16a34a;
}

/* Global Search Bar */
.search-bar-wrapper {
  position: relative;
  flex: 1;
  min-width: 150px;
  max-width: 450px;
  margin: 0 1.25rem;
}

.search-bar-wrapper .search-icon {
  position: absolute;
  left: 0.85rem;
  top: 50%;
  transform: translateY(-50%);
  color: #94a3b8;
  pointer-events: none;
  transition: color 0.2s;
}

.global-search-input {
  width: 100%;
  padding: 0.55rem 1rem 0.55rem 2.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  font-size: 0.8rem;
  font-weight: 600;
  color: #1e293b;
  background-color: #f8fafc;
  outline: none;
  transition: all 0.2s ease;
}

.global-search-input:focus {
  border-color: #39a900;
  background-color: white;
  box-shadow: 0 0 0 3px rgba(57, 169, 0, 0.1);
}

.global-search-input:focus + .search-icon {
  color: #39a900;
}

.global-search-input::placeholder {
  color: #94a3b8;
  font-weight: 500;
}

.btn-text {
  background: none;
  border: 1px solid transparent;
  padding: 0.55rem 0.85rem;
  border-radius: 10px;
  color: #64748b;
  font-weight: 700;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  gap: 0.6rem;
  white-space: nowrap;
  flex-shrink: 0;
}

.btn-text:hover {
  background-color: #fef2f2;
  color: #ef4444;
  border-color: #fee2e2;
  transform: translateY(-1px);
}

.btn-text svg {
  opacity: 0.7;
  transition: color 0.2s;
}

.btn-text:hover svg {
  color: #ef4444;
  opacity: 1;
}

/* Table Card */
.table-card {
  background-color: white;
  border-radius: 20px;
  border: 1px solid #e2e8f0;
  overflow: hidden;
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.05);
  margin-bottom: 2.5rem;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
}

.data-table th {
  text-align: left;
  padding: 0.85rem 1.25rem; /* Reduced from 1.25rem 1.5rem */
  font-size: 0.7rem; /* Reduced from 0.75rem */
  font-weight: 800;
  color: #64748b;
  background-color: #f8fafc;
  border-bottom: 1px solid #f1f5f9;
  letter-spacing: 0.05em;
}

.data-table td {
  padding: 0.85rem 1.25rem; /* Reduced from 1.25rem 1.5rem */
  border-bottom: 1px solid #f1f5f9;
  font-size: 0.85rem; /* Reduced from 0.9rem */
}

.id-cell {
  color: #64748b;
  font-weight: 600;
}

.name-cell {
  font-weight: 700;
  color: #1e293b;
}

.contractor-cell {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: 700;
}

.avatar-sm {
  width: 32px;
  height: 32px;
  background-color: #f1f5f9;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 800;
}

.platform-badge {
  padding: 0.25rem 0.75rem;
  border-radius: 8px;
  font-size: 0.75rem;
  font-weight: 800;
}

.platform-badge.soi { background-color: #eff6ff; color: #3b82f6; }
.platform-badge.asopagos { background-color: #f5f3ff; color: #8b5cf6; }
.platform-badge.compensar { background-color: #fff7ed; color: #ea580c; }
.platform-badge.aportes { background-color: #ecfdf5; color: #059669; }

.status-cell {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
}

.status-cell.success { color: #16a34a; }
.status-cell.danger { color: #ef4444; }

.btn-visualize {
  background: none;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
  font-size: 0.8rem;
  cursor: pointer;
  color: #64748b;
  transition: all 0.2s;
}

.btn-visualize:hover {
  color: #39a900;
}

.btn-pdf-download {
  background: #f1f5f9;
  border: none;
  border-radius: 6px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1e293b;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-pdf-download:hover {
  background-color: #e2e8f0;
  color: #0f172a;
}

/* Table Footer */
.table-footer {
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
}

.results-info {
  font-size: 0.85rem;
  color: #64748b;
  font-weight: 500;
}

.pagination {
  display: flex;
  gap: 0.5rem;
}

.pager-btn {
  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  background: white;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  color: #1e293b;
}

.pager-btn.active {
  background-color: #22c55e;
  color: white;
  border-color: #22c55e;
}

/* Stats Cards */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.stat-card {
  background-color: white;
  padding: 1.25rem; /* Reduced from 1.5rem */
  border-radius: 16px; /* Reduced from 20px */
  display: flex;
  align-items: center;
  gap: 1.25rem; /* Reduced from 1.5rem */
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
}

.stat-icon {
  width: 42px; /* Reduced from 48px */
  height: 42px; /* Reduced */
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.stat-icon.green { background-color: #f0fdf4; color: #22c55e; }
.stat-icon.orange { background-color: #fffaf0; color: #f59e0b; }
.stat-icon.blue { background-color: #eff6ff; color: #3b82f6; }

.stat-info {
  display: flex;
  flex-direction: column;
}

.stat-label {
  font-size: 0.65rem; /* Reduced from 0.7rem */
  font-weight: 800;
  color: #94a3b8;
  letter-spacing: 0.05em;
}

.stat-value {
  font-size: 1.3rem; /* Reduced from 1.5rem */
  font-weight: 900;
}

@media (max-width: 1024px) {
  .page-main { padding: 2rem; }
  .navbar { padding: 0 2rem; }
  .stats-grid { grid-template-columns: 1fr; }
}

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

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(15, 23, 42, 0.7);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.2s ease-out;
}

.modal-card {
  background: white;
  width: 100%;
  max-width: 420px;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  animation: slideUp 0.3s ease-out;
}

.modal-header {
  text-align: center;
  margin-bottom: 2rem;
}

.modal-icon-circle {
  width: 60px;
  height: 60px;
  background-color: #f0f7ff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
}

.proto-badge {
  display: inline-block;
  background-color: #fee2e2;
  color: #ef4444;
  font-size: 0.65rem;
  font-weight: 800;
  padding: 0.2rem 0.6rem;
  border-radius: 20px;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.modal-header h3 {
  font-size: 1.25rem;
  color: #1e293b;
  margin-bottom: 0.5rem;
}

.modal-header p {
  font-size: 0.9rem;
  color: #64748b;
}

.modal-body {
  margin-bottom: 2rem;
}

.modal-body label {
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  color: #475569;
  margin-bottom: 0.5rem;
}

.input-with-icon {
  position: relative;
  display: flex;
  align-items: center;
}

.input-with-icon svg {
  position: absolute;
  left: 1rem;
  color: #94a3b8;
}

.input-with-icon input {
  width: 100%;
  padding: 0.8rem 1rem 0.8rem 3rem;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  font-size: 0.95rem;
  transition: all 0.2s;
}

.input-with-icon input:focus {
  outline: none;
  border-color: #4285F4;
  box-shadow: 0 0 0 3px rgba(66, 133, 244, 0.1);
}

.modal-body small {
  display: block;
  margin-top: 0.5rem;
  font-size: 0.75rem;
  color: #94a3b8;
}

.sync-progress {
  margin-top: 1.5rem;
  text-align: center;
}

.progress-bar-container {
  height: 6px;
  background-color: #f1f5f9;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 0.75rem;
}

.progress-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #4285F4, #34A853);
  width: 100%;
  animation: pulseProgress 2s infinite linear;
}

.sync-progress p {
  font-size: 0.85rem;
  color: #4285F4;
  font-weight: 500;
}

.modal-footer {
  display: flex;
  gap: 1rem;
}

.btn-cancel {
  flex: 1;
  padding: 0.8rem;
  border: 1px solid #e2e8f0;
  background: white;
  border-radius: 12px;
  font-size: 0.95rem;
  font-weight: 600;
  color: #64748b;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-cancel:hover {
  background-color: #f8fafc;
}

.btn-confirm {
  flex: 2;
  padding: 0.8rem;
  border: none;
  background-color: #4285F4;
  color: white;
  border-radius: 12px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.btn-confirm:hover {
  background-color: #3367d6;
  box-shadow: 0 4px 12px rgba(66, 133, 244, 0.3);
}

.btn-confirm:disabled, .btn-cancel:disabled {
  opacity: 0.6;
  cursor:not-allowed;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@keyframes pulseProgress {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

/* Visualization Modal Special Styles */
.form-modal-overlay {
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.form-modal-container {
  width: 100%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  background: white;
  border-radius: 20px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.form-modal-container::-webkit-scrollbar {
  width: 8px;
}

.form-modal-container::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

.form-modal-container::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 10px;
}

.form-modal-container::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}
</style>
