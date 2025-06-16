describe('Navigation Tests', () => {
  beforeEach(() => {
    // Setup DOM
    document.body.innerHTML = `
      <button id="menuBtn">Menu</button>
      <nav id="mobileMenu" class="hidden">
        <a href="#ofertas">Ofertas</a>
        <a href="#localizacao">Lojas</a>
      </nav>
    `;

    // Setup event listeners
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when clicking on links
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  });

  test('should toggle mobile menu visibility', () => {
    // Arrange
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    // Act
    menuBtn.click();
    
    // Assert - Menu should be visible
    expect(mobileMenu.classList.contains('hidden')).toBe(false);
    
    // Act - Click again
    menuBtn.click();
    
    // Assert - Menu should be hidden
    expect(mobileMenu.classList.contains('hidden')).toBe(true);
  });

  test('should close mobile menu when clicking on links', () => {
    // Arrange
    const mobileMenu = document.getElementById('mobileMenu');
    const menuLink = mobileMenu.querySelector('a');
    
    // Make menu visible first
    mobileMenu.classList.remove('hidden');
    
    // Act
    menuLink.click();
    
    // Assert
    expect(mobileMenu.classList.contains('hidden')).toBe(true);
  });
});