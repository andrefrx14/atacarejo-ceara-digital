import { fireEvent, waitFor } from '@testing-library/dom';

describe('Contact Form Tests', () => {
  let mockForm, mockSubmitBtn;

  beforeEach(() => {
    // Setup DOM
    document.body.innerHTML = `
      <form id="contactForm">
        <input id="name" name="name" type="text" required />
        <input id="email" name="email" type="email" required />
        <input id="subject" name="subject" type="text" required />
        <textarea id="message" name="message" required></textarea>
        <button type="submit" id="submitBtn">Enviar</button>
      </form>
    `;

    mockForm = document.getElementById('contactForm');
    mockSubmitBtn = document.getElementById('submitBtn');

    // Mock showToast function
    global.showToast = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should validate required fields', () => {
    // Arrange
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    
    // Act
    fireEvent.submit(mockForm);
    
    // Assert
    expect(nameInput.validity.valid).toBe(false);
    expect(emailInput.validity.valid).toBe(false);
  });

  test('should validate email format', () => {
    // Arrange
    const emailInput = document.getElementById('email');
    
    // Act
    emailInput.value = 'invalid-email';
    
    // Assert
    expect(emailInput.validity.valid).toBe(false);
    expect(emailInput.validity.typeMismatch).toBe(true);
  });

  test('should accept valid form data', () => {
    // Arrange
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    
    // Act
    nameInput.value = 'João Silva';
    emailInput.value = 'joao@email.com';
    subjectInput.value = 'Teste';
    messageInput.value = 'Mensagem de teste';
    
    // Assert
    expect(mockForm.checkValidity()).toBe(true);
  });
});