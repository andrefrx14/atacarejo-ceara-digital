
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Navigation, 
  Car,
  Bus
} from 'lucide-react';

const LocationSection = () => {
  const [selectedStore, setSelectedStore] = useState(0);

  const stores = [
    {
      id: 1,
      name: "Nosso Atacarejo - Limoeiro do Norte",
      address: "Rua Principal, 123 - Centro",
      city: "Limoeiro do Norte",
      state: "CE",
      cep: "62930-000",
      phone: "(88) 3423-1234",
      hours: "Seg a Sáb: 7h às 21h | Dom: 7h às 18h",
      coordinates: { lat: -5.1417, lng: -37.9964 },
      features: ["Estacionamento Gratuito", "Delivery", "Cartão de Crédito", "PIX"],
      isMain: true
    },
    {
      id: 2,
      name: "Nosso Atacarejo - Pau dos Ferros",
      address: "Av. Getúlio Vargas, 456 - Centro",
      city: "Pau dos Ferros",
      state: "RN",
      cep: "59900-000",
      phone: "(84) 3351-5678",
      hours: "Seg a Sáb: 7h às 21h | Dom: 7h às 18h",
      coordinates: { lat: -6.1094, lng: -38.2022 },
      features: ["Estacionamento Gratuito", "Delivery", "Cartão de Crédito", "PIX"],
      isMain: false
    },
    {
      id: 3,
      name: "Nosso Atacarejo - São Miguel",
      address: "Rua São José, 789 - Centro",
      city: "São Miguel",
      state: "RN",
      cep: "59920-000",
      phone: "(84) 3352-9876",
      hours: "Seg a Sáb: 7h às 21h | Dom: 7h às 18h",
      coordinates: { lat: -6.2064, lng: -38.4944 },
      features: ["Estacionamento Gratuito", "Delivery", "Cartão de Crédito", "PIX"],
      isMain: false
    }
  ];

  const openGoogleMaps = (store: any) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${store.coordinates.lat},${store.coordinates.lng}`;
    window.open(url, '_blank');
  };

  return (
    <section id="localizacao" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-nosso-blue-900 mb-6">
            Nossas Lojas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encontre a loja mais próxima de você e venha nos visitar
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Lista de Lojas */}
          <div className="lg:col-span-1 space-y-6">
            {stores.map((store, index) => (
              <Card 
                key={store.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  selectedStore === index 
                    ? 'border-nosso-blue-500 shadow-lg bg-nosso-blue-50' 
                    : 'border-gray-200 hover:border-nosso-blue-300'
                }`}
                onClick={() => setSelectedStore(index)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-semibold text-nosso-blue-900 line-clamp-2">
                      {store.name}
                    </h3>
                    {store.isMain && (
                      <Badge className="bg-nosso-yellow-400 text-nosso-blue-900">
                        Matriz
                      </Badge>
                    )}
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-nosso-blue-600 mt-0.5 flex-shrink-0" />
                      <div className="text-sm text-gray-600">
                        <div>{store.address}</div>
                        <div>{store.city} - {store.state}</div>
                        <div>CEP: {store.cep}</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-nosso-blue-600 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{store.phone}</span>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-nosso-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{store.hours}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {store.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex space-x-2 mt-4">
                    <Button 
                      size="sm" 
                      className="flex-1 bg-nosso-yellow-400 text-nosso-blue-900 hover:bg-nosso-yellow-300"
                      onClick={(e) => {
                        e.stopPropagation();
                        openGoogleMaps(store);
                      }}
                    >
                      <Navigation className="w-4 h-4 mr-1" />
                      Rota
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="border-nosso-blue-500 text-nosso-blue-700 hover:bg-nosso-blue-50"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(`tel:${store.phone}`, '_self');
                      }}
                    >
                      <Phone className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mapa Placeholder e Informações */}
          <div className="lg:col-span-2">
            <Card className="h-full">
              <CardContent className="p-6">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-nosso-blue-900 mb-2">
                    {stores[selectedStore].name}
                  </h3>
                  <p className="text-gray-600">
                    Visualize nossa localização e como chegar até nós
                  </p>
                </div>

                {/* Mapa Placeholder */}
                <div className="bg-gradient-to-br from-nosso-blue-100 to-nosso-blue-200 rounded-lg h-80 flex items-center justify-center mb-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-nosso-blue-500/20 to-nosso-yellow-400/20"></div>
                  <div className="text-center z-10">
                    <MapPin className="w-16 h-16 text-nosso-blue-600 mx-auto mb-4" />
                    <h4 className="text-xl font-semibold text-nosso-blue-900 mb-2">
                      {stores[selectedStore].city} - {stores[selectedStore].state}
                    </h4>
                    <p className="text-nosso-blue-700 mb-4">
                      {stores[selectedStore].address}
                    </p>
                    <Button 
                      className="bg-nosso-yellow-400 text-nosso-blue-900 hover:bg-nosso-yellow-300"
                      onClick={() => openGoogleMaps(stores[selectedStore])}
                    >
                      <Navigation className="w-4 h-4 mr-2" />
                      Ver no Google Maps
                    </Button>
                  </div>
                  
                  {/* Elementos decorativos */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-nosso-yellow-300/50 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-6 left-6 w-6 h-6 bg-nosso-blue-400/50 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>

                {/* Informações de Transporte */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center mb-3">
                      <Car className="w-6 h-6 text-nosso-blue-600 mr-2" />
                      <h4 className="font-semibold text-nosso-blue-900">De Carro</h4>
                    </div>
                    <p className="text-sm text-gray-600">
                      Estacionamento gratuito disponível. Fácil acesso pela via principal.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center mb-3">
                      <Bus className="w-6 h-6 text-nosso-blue-600 mr-2" />
                      <h4 className="font-semibold text-nosso-blue-900">Transporte Público</h4>
                    </div>
                    <p className="text-sm text-gray-600">
                      Diversas linhas de ônibus passam próximo à nossa loja.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-nosso-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-nosso-blue-900 mb-4">
              Ainda não nos visitou?
            </h3>
            <p className="text-gray-600 mb-6">
              Venha conhecer nossas lojas e descobrir por que somos a escolha preferida da região!
            </p>
            <Button 
              size="lg" 
              className="bg-nosso-yellow-400 text-nosso-blue-900 hover:bg-nosso-yellow-300 font-semibold"
              onClick={() => document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Fale Conosco
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
