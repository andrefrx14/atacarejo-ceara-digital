
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Percent, Star, Clock } from 'lucide-react';

const OffersSection = () => {
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const offers = [
    {
      id: 1,
      title: "Arroz Branco 5kg",
      originalPrice: 25.90,
      discountPrice: 19.90,
      discount: 23,
      category: "Alimentos",
      image: "🍚",
      limited: true
    },
    {
      id: 2,
      title: "Óleo de Soja 900ml",
      originalPrice: 8.50,
      discountPrice: 6.90,
      discount: 19,
      category: "Alimentos",
      image: "🫒",
      limited: false
    },
    {
      id: 3,
      title: "Açúcar Cristal 1kg",
      originalPrice: 4.20,
      discountPrice: 3.50,
      discount: 17,
      category: "Alimentos",
      image: "🍯",
      limited: true
    },
    {
      id: 4,
      title: "Feijão Preto 1kg",
      originalPrice: 9.80,
      discountPrice: 7.90,
      discount: 19,
      category: "Alimentos",
      image: "🫘",
      limited: false
    },
    {
      id: 5,
      title: "Macarrão 500g",
      originalPrice: 4.90,
      discountPrice: 3.90,
      discount: 20,
      category: "Alimentos",
      image: "🍝",
      limited: true
    },
    {
      id: 6,
      title: "Sabão em Pó 1kg",
      originalPrice: 12.90,
      discountPrice: 9.90,
      discount: 23,
      category: "Limpeza",
      image: "🧼",
      limited: false
    }
  ];

  const states = [
    { value: "ce", label: "Ceará" },
    { value: "rn", label: "Rio Grande do Norte" }
  ];

  const cities = {
    ce: [{ value: "limoeiro", label: "Limoeiro do Norte" }],
    rn: [
      { value: "paudosferros", label: "Pau dos Ferros" },
      { value: "saomiguel", label: "São Miguel" }
    ]
  };

  return (
    <section id="ofertas" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-nosso-blue-900 mb-6">
            Ofertas Especiais
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Promoções imperdíveis para toda a família
          </p>
        </div>

        {/* Filtros */}
        <div className="bg-nosso-blue-50 rounded-2xl p-8 mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-nosso-yellow-400 rounded-full flex items-center justify-center mr-4">
              <Star className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-nosso-blue-900">
              Ofertas especiais para você
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <Select value={selectedState} onValueChange={setSelectedState}>
              <SelectTrigger className="bg-white">
                <SelectValue placeholder="Selecione seu estado" />
              </SelectTrigger>
              <SelectContent>
                {states.map((state) => (
                  <SelectItem key={state.value} value={state.value}>
                    {state.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedCity} onValueChange={setSelectedCity} disabled={!selectedState}>
              <SelectTrigger className="bg-white">
                <SelectValue placeholder="Selecione sua cidade" />
              </SelectTrigger>
              <SelectContent>
                {selectedState && cities[selectedState as keyof typeof cities]?.map((city) => (
                  <SelectItem key={city.value} value={city.value}>
                    {city.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="text-center mt-6">
            <Button className="bg-nosso-yellow-400 text-nosso-blue-900 hover:bg-nosso-yellow-300">
              Ver ofertas
            </Button>
          </div>
        </div>

        {/* Grid de Ofertas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <Card key={offer.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <CardContent className="p-6">
                {/* Header do Card */}
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary" className="bg-nosso-blue-100 text-nosso-blue-800">
                    {offer.category}
                  </Badge>
                  {offer.limited && (
                    <div className="flex items-center text-red-500 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      Limitado
                    </div>
                  )}
                </div>

                {/* Imagem/Emoji do Produto */}
                <div className="text-6xl text-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {offer.image}
                </div>

                {/* Informações do Produto */}
                <h3 className="text-xl font-semibold text-nosso-blue-900 mb-3 text-center">
                  {offer.title}
                </h3>

                {/* Preços */}
                <div className="text-center mb-4">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-2xl font-bold text-nosso-blue-900">
                      R$ {offer.discountPrice.toFixed(2)}
                    </span>
                    <Badge className="bg-red-500 text-white">
                      <Percent className="w-3 h-3 mr-1" />
                      -{offer.discount}%
                    </Badge>
                  </div>
                  <span className="text-gray-500 line-through">
                    De R$ {offer.originalPrice.toFixed(2)}
                  </span>
                  <div className="text-green-600 font-semibold text-sm">
                    Economia de R$ {(offer.originalPrice - offer.discountPrice).toFixed(2)}
                  </div>
                </div>

                {/* Botão */}
                <Button className="w-full bg-nosso-yellow-400 text-nosso-blue-900 hover:bg-nosso-yellow-300 font-semibold">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Aproveitar Oferta
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Não encontrou o que procura? Temos muito mais ofertas na loja!
          </p>
          <Button 
            size="lg" 
            className="bg-nosso-blue-700 text-white hover:bg-nosso-blue-800"
            onClick={() => document.querySelector('#localizacao')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Visite uma de nossas lojas
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OffersSection;
