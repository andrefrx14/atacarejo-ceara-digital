
import React, { useState } from 'react';
import { Menu, X, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Ofertas', href: '#ofertas' },
    { name: 'Nossas lojas', href: '#localizacao' },
    { name: 'Nossa história', href: '#sobre' },
    { name: 'Trabalhe conosco', href: '#contato' },
    { name: 'Fale conosco', href: '#contato' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Sun className="w-8 h-8 text-nosso-yellow-400" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-nosso-yellow-300 rounded-full animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-nosso-blue-800">NOSSO</span>
              <span className="text-xs text-nosso-blue-600 -mt-1">ATACAREJO</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex bg-white rounded-full shadow-lg px-6 py-2">
            <div className="flex space-x-6">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-nosso-blue-700 hover:text-nosso-blue-900 font-medium transition-colors duration-200 px-3 py-1 rounded-full hover:bg-nosso-blue-50"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-nosso-blue-700 hover:text-nosso-blue-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 bg-white rounded-lg shadow-lg p-4 animate-fade-in">
            <div className="flex flex-col space-y-3">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-nosso-blue-700 hover:text-nosso-blue-900 font-medium transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-nosso-blue-50 text-left"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
