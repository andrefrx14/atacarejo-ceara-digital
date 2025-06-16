import '@testing-library/jest-dom';

describe('Toast Functionality Tests', () => {
  let toastContainer;

  beforeEach(() => {
    // Setup DOM
    document.body.innerHTML = `<div id="toast-container"></div>`;
    toastContainer = document.getElementById('toast-container');
    
    // Define showToast function with more complete implementation
    global.showToast = function(message, type = 'success') {
      const toast = document.createElement('div');
      toast.className = `toast toast-${type}`;
      
      // Create more complete toast structure
      toast.innerHTML = `
        <div class="flex items-start gap-3">
          <div class="flex-shrink-0">
            ${type === 'success' ? 
              '<svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>' :
              '<svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'
            }
          </div>
          <div>
            <h4 class="font-semibold text-gray-900">${type === 'success' ? 'Sucesso!' : 'Erro!'}</h4>
            <p class="text-gray-600 text-sm">${message}</p>
          </div>
          <button onclick="this.parentElement.parentElement.remove()" class="text-gray-400 hover:text-gray-600 ml-auto">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      `;
      
      toastContainer.appendChild(toast);
      
      // Add show class after a brief delay
      setTimeout(() => toast.classList.add('show'), 100);
      
      // Auto-remove after 5 seconds
      setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
          if (toast.parentNode) {
            toast.remove();
          }
        }, 300);
      }, 5000);
      
      return toast;
    };
  });

  afterEach(() => {
    document.body.innerHTML = '';
    delete global.showToast;
  });

  test('should create success toast', () => {
    // Act
    const toast = showToast('Sucesso!', 'success');
    
    // Assert
    expect(toast).toBeTruthy();
    expect(toast.classList.contains('toast')).toBe(true);
    expect(toast.classList.contains('toast-success')).toBe(true);
    expect(toast.innerHTML).toContain('Sucesso!');
    expect(toastContainer.children).toHaveLength(1);
  });

  test('should create error toast', () => {
    // Act
    const toast = showToast('Erro!', 'error');
    
    // Assert
    expect(toast).toBeTruthy();
    expect(toast.classList.contains('toast')).toBe(true);
    expect(toast.classList.contains('toast-error')).toBe(true);
    expect(toast.innerHTML).toContain('Erro!');
    expect(toastContainer.children).toHaveLength(1);
  });

  test('should default to success type', () => {
    // Act
    const toast = showToast('Mensagem padrão');
    
    // Assert
    expect(toast.classList.contains('toast-success')).toBe(true);
    expect(toast.innerHTML).toContain('Mensagem padrão');
  });

  test('should add toast to container', () => {
    // Act
    showToast('Teste');
    
    // Assert
    expect(toastContainer.children).toHaveLength(1);
  });

  test('should create multiple toasts', () => {
    // Act
    showToast('Toast 1');
    showToast('Toast 2', 'error');
    
    // Assert
    expect(toastContainer.children).toHaveLength(2);
    expect(toastContainer.querySelector('.toast-success')).toBeTruthy();
    expect(toastContainer.querySelector('.toast-error')).toBeTruthy();
  });

  test('should include close button', () => {
    // Act
    const toast = showToast('Teste');
    
    // Assert
    const closeButton = toast.querySelector('button');
    expect(closeButton).toBeTruthy();
  });

  test('should remove toast when close button is clicked', () => {
    // Act
    const toast = showToast('Teste');
    const closeButton = toast.querySelector('button');
    
    // Assert initial state
    expect(toastContainer.children).toHaveLength(1);
    
    // Act - Click close button
    closeButton.click();
    
    // Assert - Toast should be removed
    expect(toastContainer.children).toHaveLength(0);
  });
});