import { ref, computed, watch } from 'vue';
import { reportService } from '../services/reportService';
import { notify } from '../utils/notifications';

export function useCertificates() {
  const certificates = ref([]);
  const loading = ref(false);
  const searchQuery = ref('');
  const selectedContractor = ref('');
  const filterPlatform = ref('');
  const filterStatus = ref('');
  const filterDateStart = ref('');
  const filterDateEnd = ref('');
  const currentPage = ref(1);
  const itemsPerPage = ref(5);

  const mockCertificates = [
    { id: '1290', persona: 'Santiago Pérez', date: '2023-10-01T10:00:00Z', name: 'Instructores', cedula: '1098765432', initials: 'IN', platform: 'SOI', status: 'completed', platformData: {} },
    { id: '1289', persona: 'María García', date: '2023-10-02T11:00:00Z', name: 'Apoyo administrativo', cedula: '1032109876', initials: 'AA', platform: 'Asopagos', status: 'completed', platformData: {} },
    { id: '1288', persona: 'Carlos Ruiz', date: '2023-10-03T09:30:00Z', name: 'Directivos', cedula: '1045678901', initials: 'DI', platform: 'Compensar', status: 'failed', platformData: {} },
    { id: '1287', persona: 'Elena Martínez', date: '2023-10-04T14:20:00Z', name: 'Contratistas', cedula: '1056789012', initials: 'CO', platform: 'Aportes', status: 'completed', platformData: {} },
    { id: '1286', persona: 'Javier López', date: '2023-10-05T08:15:00Z', name: 'Tecnología', cedula: '1010987654', initials: 'TE', platform: 'SOI', status: 'completed', platformData: {} },
    { id: '1285', persona: 'Paula Torres', date: '2023-10-06T13:45:00Z', name: 'Recursos Humanos', cedula: '1021098765', initials: 'RH', platform: 'Asopagos', status: 'completed', platformData: {} },
    { id: '1284', persona: 'Andrés Morales', date: '2023-10-07T10:30:00Z', name: 'Contratistas', cedula: '1067890123', initials: 'CO', platform: 'Compensar', status: 'completed', platformData: {} },
    { id: '1283', persona: 'Laura Vaca', date: '2023-10-08T09:00:00Z', name: 'Instructores', cedula: '1078901234', initials: 'IN', platform: 'Aportes', status: 'failed', platformData: {} }
  ];

  const fetchCertificates = async () => {
    loading.value = true;
    try {
      const data = await reportService.getCertificates();
      const list = data.reports || data || [];
      
      if (list.length === 0) {
        console.warn('API returned empty list, using mock data.');
        setCertificates(mockCertificates);
      } else {
        setCertificates(list);
      }
    } catch (error) {
      console.error('Error fetching certificates, using mock data:', error);
      setCertificates(mockCertificates);
      notify('Usando datos locales (Desconectado del servidor).', 'warning');
    } finally {
      loading.value = false;
    }
  };

  const setCertificates = (list) => {
    certificates.value = list.map(item => ({
      id: item._id || item.id,
      persona: item.fullName || item.persona || 'Sin nombre',
      date: item.createdAt || item.date
        ? new Date(item.createdAt || item.date).toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' })
        : 'Sin fecha',
      name: (item.supervisor && item.supervisor.name) || item.supervisorName || item.name || 'S/N',
      cedula: item.documentNumber || item.cedula || '',
      initials: (item.fullName || item.persona)
        ? (item.fullName || item.persona).split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2)
        : '??',
      platform: item.platform
        ? item.platform.charAt(0).toUpperCase() + item.platform.slice(1).replace(/_/g, ' ')
        : 'N/A',
      status: (item.status === 'completed' || item.status === 'Aprobado') ? 'Aprobado' : (item.status === 'pending' || item.status === 'Pendiente') ? 'Pendiente' : 'No aprobado',
      platformData: item.platformData || {}
    }));
  };

  const parseItemDate = (dateStr) => {
    const parts = dateStr.split(' ');
    if (parts.length === 3) {
      const months = {
        Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
        Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
        'ene.': 0, 'feb.': 1, 'mar.': 2, 'abr.': 3, 'may.': 4, 'jun.': 5,
        'jul.': 6, 'ago.': 7, 'sept.': 8, 'oct.': 9, 'nov.': 10, 'dic.': 11
      };
      const day = parseInt(parts[0]);
      const monthStr = parts[1].replace(',', '').toLowerCase();
      const month = months[monthStr];
      const year = parseInt(parts[2]);
      return new Date(year, month, day);
    }
    return new Date(dateStr);
  };

  const filteredCertificates = computed(() => {
    let result = certificates.value;

    if (searchQuery.value) {
      const q = searchQuery.value.toLowerCase();
      result = result.filter(item => 
        item.persona.toLowerCase().includes(q) || 
        item.cedula.toLowerCase().includes(q) || 
        item.platform.toLowerCase().includes(q)
      );
    }

    if (selectedContractor.value) {
      result = result.filter(item => item.name === selectedContractor.value);
    }

    if (filterPlatform.value) {
      result = result.filter(item => item.platform.toLowerCase() === filterPlatform.value.toLowerCase());
    }

    if (filterStatus.value) {
      result = result.filter(item => item.status === filterStatus.value);
    }

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

  const totalPages = computed(() => Math.ceil(filteredCertificates.value.length / itemsPerPage.value));

  const paginatedCertificates = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value;
    return filteredCertificates.value.slice(start, start + itemsPerPage.value);
  });

  const totalApproved = computed(() => filteredCertificates.value.filter(item => item.status === 'Aprobado').length);
  const totalPending = computed(() => filteredCertificates.value.filter(item => item.status !== 'Aprobado').length);

  const contractorNames = computed(() => [...new Set(certificates.value.map(item => item.name))]);

  watch([searchQuery, selectedContractor, filterPlatform, filterStatus, filterDateStart, filterDateEnd], () => {
    currentPage.value = 1;
  });

  return {
    certificates,
    loading,
    searchQuery,
    selectedContractor,
    filterPlatform,
    filterStatus,
    filterDateStart,
    filterDateEnd,
    currentPage,
    itemsPerPage,
    fetchCertificates,
    filteredCertificates,
    paginatedCertificates,
    totalPages,
    totalApproved,
    totalPending,
    contractorNames
  };
}
