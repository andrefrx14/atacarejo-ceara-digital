/**
 * Gets the user's current location using the browser's Geolocation API
 * @param {Function} successCallback - Callback function to handle successful location retrieval
 * @param {Function} errorCallback - Callback function to handle location errors
 * @returns {void}
 */
export function getUserLocation(successCallback, errorCallback) {
  // Verificar se navigator e geolocation existem
  if (typeof navigator !== 'undefined' && navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log(`Localização do usuário: ${latitude}, ${longitude}`);
        
        if (successCallback && typeof successCallback === 'function') {
          successCallback(position);
        }
        
        // Simular toast (se disponível)
        if (typeof showToast === 'function') {
          showToast(`Localização obtida: ${latitude.toFixed(4)}, ${longitude.toFixed(4)}`, 'success');
        }
      },
      (error) => {
        console.error('Erro ao obter localização:', error);
        
        if (errorCallback && typeof errorCallback === 'function') {
          errorCallback(error);
        }
        
        // Simular toast (se disponível)
        if (typeof showToast === 'function') {
          showToast('Não foi possível obter sua localização. Verifique as permissões do navegador.', 'error');
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000
      }
    );
  } else {
    const error = new Error('Geolocalização não é suportada por este navegador.');
    
    if (errorCallback && typeof errorCallback === 'function') {
      errorCallback(error);
    }
    
    if (typeof showToast === 'function') {
      showToast('Geolocalização não é suportada por este navegador.', 'error');
    }
  }
}

// Função auxiliar para verificar suporte
export function isGeolocationSupported() {
  return typeof navigator !== 'undefined' && 'geolocation' in navigator;
}

// Função para obter localização com Promise
export function getUserLocationPromise() {
  return new Promise((resolve, reject) => {
    getUserLocation(resolve, reject);
  });
}
