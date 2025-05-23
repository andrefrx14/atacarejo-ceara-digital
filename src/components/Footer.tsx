
import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Sun, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Instagram, 
  Facebook, 
  Heart,
  ArrowUp
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Ofertas', href: '#ofertas' },
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'Nossas Lojas', href: '#localizacao' },
    { name: 'Contato', href: '#contato' }
  ];

  const stores = [
    {
      name: 'Limoeiro do Norte - CE',
      address: 'Rua Principal, 123 - Centro',
      phone: '(88) 3423-1234'
    },
    {
      name: 'Pau dos Ferros - RN',
      address: 'Av. Getúlio Vargas, 456 - Centro',
      phone: '(84) 3351-5678'
    },
    {
      name: 'São Miguel - RN',
      address: 'Rua São José, 789 - Centro',
      phone: '(84) 3352-9876'
    }
  ];

  return (
    <footer className="bg-nosso-blue-900 text-white relative">
      {/* Botão Voltar ao Topo */}
      <div className="absolute -top-6 right-8">
        <Button
          onClick={scrollToTop}
          size="lg"
          className="bg-nosso-yellow-400 text-nosso-blue-900 hover:bg-nosso-yellow-300 rounded-full w-12 h-12 p-0 shadow-lg"
        >
          <ArrowUp className="w-6 h-6" />
        </Button>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Sun className="w-10 h-10 text-nosso-yellow-400" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-nosso-yellow-300 rounded-full animate-pulse"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold">NOSSO</span>
                <span className="text-sm -mt-1 text-blue-300">ATACAREJO</span>
              </div>
            </div>
            
            <p className="text-blue-200 leading-relaxed">
              Há mais de 15 anos servindo você e sua família com os melhores 
              produtos e preços da região. Qualidade, economia e atendimento 
              especial em cada compra.
            </p>
            
            <div className="flex space-x-4">
              <Button 
                variant="outline" 
                size="icon"
                className="border-nosso-yellow-400 text-nosso-yellow-400 hover:bg-nosso-yellow-400 hover:text-nosso-blue-900"
              >
                <Instagram className="w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="icon"
                className="border-nosso-yellow-400 text-nosso-yellow-400 hover:bg-nosso-yellow-400 hover:text-nosso-blue-900"
              >
                <Facebook className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-nosso-yellow-300">
              Links Rápidos
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-blue-200 hover:text-nosso-yellow-300 transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
              <li>
                <button className="text-blue-200 hover:text-nosso-yellow-300 transition-colors duration-200">
                  Trabalhe Conosco
                </button>
              </li>
              <li>
                <button className="text-blue-200 hover:text-nosso-yellow-300 transition-colors duration-200">
                  Política de Privacidade
                </button>
              </li>
            </ul>
          </div>

          {/* Nossas Lojas */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-nosso-yellow-300">
              Nossas Lojas
            </h3>
            <div className="space-y-4">
              {stores.map((store, index) => (
                <div key={index} className="text-sm">
                  <div className="font-semibold text-white mb-1">
                    {store.name}
                  </div>
                  <div className="text-blue-200 mb-1">
                    {store.address}
                  </div>
                  <div className="text-nosso-yellow-300">
                    {store.phone}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Informações de Contato */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-nosso-yellow-300">
              Contato
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-nosso-yellow-400 flex-shrink-0" />
                <div className="text-sm">
                  <div className="text-blue-200">Central de Atendimento:</div>
                  <div className="text-white font-semibold">(88) 99999-1234</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-nosso-yellow-400 flex-shrink-0" />
                <div className="text-sm">
                  <div className="text-blue-200">E-mail:</div>
                  <div className="text-white">contato@nossoatacarejo.com.br</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-nosso-yellow-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <div className="text-blue-200">Funcionamento:</div>
                  <div className="text-white">
                    <div>Seg a Sáb: 7h às 21h</div>
                    <div>Dom: 7h às 18h</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Linha Divisória */}
        <div className="border-t border-blue-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-blue-200 text-sm">
              © {currentYear} Nosso Atacarejo. Todos os direitos reservados.
            </div>
            
            <div className="flex items-center space-x-2 text-blue-200 text-sm">
              <span>Feito com</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span>para você</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
