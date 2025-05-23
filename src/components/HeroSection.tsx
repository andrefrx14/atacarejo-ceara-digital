
import React from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Star, Users, MapPin } from 'lucide-react';

const HeroSection = () => {
  const scrollToOffers = () => {
    const element = document.querySelector('#ofertas');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-blue-yellow"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-nosso-yellow-300/30 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-white/20 rounded-full blur-lg animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-nosso-yellow-400/40 rounded-full blur-md animate-float" style={{ animationDelay: '2s' }}></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Bem-vindo ao
            <span className="block text-nosso-yellow-300">Nosso Atacarejo</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Os melhores preços em atacado e varejo para toda a família. 
            Qualidade, economia e atendimento especial em cada compra.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-nosso-yellow-400 text-nosso-blue-900 hover:bg-nosso-yellow-300 font-semibold px-8 py-3 text-lg"
              onClick={scrollToOffers}
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Ver Ofertas
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-nosso-blue-900 font-semibold px-8 py-3 text-lg"
              onClick={() => document.querySelector('#localizacao')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <MapPin className="w-5 h-5 mr-2" />
              Nossas Lojas
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-3">
                <Users className="w-8 h-8 text-nosso-yellow-300" />
              </div>
              <div className="text-2xl font-bold">10k+</div>
              <div className="text-blue-200">Clientes Satisfeitos</div>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-3">
                <Star className="w-8 h-8 text-nosso-yellow-300" />
              </div>
              <div className="text-2xl font-bold">15+</div>
              <div className="text-blue-200">Anos de Experiência</div>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-3">
                <MapPin className="w-8 h-8 text-nosso-yellow-300" />
              </div>
              <div className="text-2xl font-bold">3</div>
              <div className="text-blue-200">Lojas no Ceará e RN</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
