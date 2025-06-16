// Mock the navigator.geolocation object
const mockGeolocation = {
  getCurrentPosition: jest.fn()
};

global.navigator.geolocation = mockGeolocation;

// Import the geolocation function
import { getUserLocation } from '../utils/geolocation.js';

describe('Geolocation Tests', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
    
    // Mock showToast function
    global.showToast = jest.fn();
  });

  // Unit Tests
  describe('Unit Tests', () => {
    test('should call getCurrentPosition when geolocation is available', () => {
      // Act
      getUserLocation();

      // Assert
      expect(mockGeolocation.getCurrentPosition).toHaveBeenCalled();
    });

    test('should handle geolocation success correctly', () => {
      // Arrange
      const mockPosition = {
        coords: {
          latitude: -5.149942656276707,
          longitude: -38.09915717844658
        }
      };

      const successCallback = jest.fn();
      const errorCallback = jest.fn();

      // Act
      getUserLocation(successCallback, errorCallback);
      
      // Simulate successful geolocation
      const successCallbackFromMock = mockGeolocation.getCurrentPosition.mock.calls[0][0];
      successCallbackFromMock(mockPosition);

      // Assert
      expect(successCallback).toHaveBeenCalledWith(mockPosition);
      expect(errorCallback).not.toHaveBeenCalled();
    });

    test('should handle geolocation error correctly', () => {
      // Arrange
      const mockError = new Error('Geolocation error');
      const successCallback = jest.fn();
      const errorCallback = jest.fn();

      // Act
      getUserLocation(successCallback, errorCallback);
      
      // Simulate geolocation error
      const errorCallbackFromMock = mockGeolocation.getCurrentPosition.mock.calls[0][1];
      errorCallbackFromMock(mockError);

      // Assert
      expect(errorCallback).toHaveBeenCalledWith(mockError);
      expect(successCallback).not.toHaveBeenCalled();
    });

    test('should handle unsupported geolocation', () => {
      // Arrange
      const originalGeolocation = global.navigator.geolocation;
      global.navigator.geolocation = undefined;
      
      const successCallback = jest.fn();
      const errorCallback = jest.fn();

      // Act
      getUserLocation(successCallback, errorCallback);

      // Assert
      expect(errorCallback).toHaveBeenCalledWith(
        expect.objectContaining({
          message: 'Geolocalização não é suportada por este navegador.'
        })
      );

      // Restore
      global.navigator.geolocation = originalGeolocation;
    });
  });

  // Integration Tests
  describe('Integration Tests', () => {
    test('should integrate with toast system on success', () => {
      // Arrange
      const mockPosition = {
        coords: {
          latitude: -5.149942656276707,
          longitude: -38.09915717844658
        }
      };

      // Act
      getUserLocation();
      
      // Simulate successful geolocation
      const successCallbackFromMock = mockGeolocation.getCurrentPosition.mock.calls[0][0];
      successCallbackFromMock(mockPosition);

      // Assert
      expect(global.showToast).toHaveBeenCalledWith(
        expect.stringContaining('Localização obtida'),
        'success'
      );
    });

    test('should integrate with toast system on error', () => {
      // Arrange
      const mockError = new Error('Permission denied');

      // Act
      getUserLocation();
      
      // Simulate geolocation error
      const errorCallbackFromMock = mockGeolocation.getCurrentPosition.mock.calls[0][1];
      errorCallbackFromMock(mockError);

      // Assert
      expect(global.showToast).toHaveBeenCalledWith(
        'Não foi possível obter sua localização. Verifique as permissões do navegador.',
        'error'
      );
    });
  });
});
