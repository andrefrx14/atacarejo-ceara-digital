
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Shield, Truck, Users } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8 text-nosso-yellow-500" />,
      title: "Compromisso",
      description: "Dedicação total com nossos clientes e comunidade"
    },
    {
      icon: <Shield className="w-8 h-8 text-nosso-yellow-500" />,
      title: "Qualidade",
      description: "Produtos selecionados com os melhores padrões"
    },
    {
      icon: <Truck className="w-8 h-8 text-nosso-yellow-500" />,
      title: "Agilidade",
      description: "Atendimento rápido e eficiente sempre"
    },
    {
      icon: <Users className="w-8 h-8 text-nosso-yellow-500" />,
      title: "Família",
      description: "Tratamos cada cliente como parte da nossa família"
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-nosso-blue-900 mb-6">
            Nossa História
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Uma trajetória de dedicação e compromisso com a comunidade
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-nosso-blue-900">
              Mais de 15 anos servindo você
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              O Nosso Atacarejo nasceu do sonho de oferecer produtos de qualidade 
              com preços justos para todas as famílias. Começamos como um pequeno 
              mercado local e hoje somos referência em atacado e varejo na região.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Nossa missão é proporcionar uma experiência de compra excepcional, 
              combinando variedade, qualidade e economia. Acreditamos que cada 
              cliente merece o melhor atendimento e os melhores produtos.
            </p>
            <div className="bg-nosso-blue-50 p-6 rounded-lg border-l-4 border-nosso-blue-500">
              <p className="text-nosso-blue-800 font-semibold italic">
                "Nossa meta é ser mais que um mercado - queremos ser parte da vida 
                e do dia a dia de cada família que confia em nós."
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-nosso-blue-100 rounded-full mb-4">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-nosso-blue-900 mb-2">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-nosso-blue-900 text-center mb-8">
            Nossa Jornada
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-nosso-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                2008
              </div>
              <h4 className="font-semibold text-nosso-blue-900 mb-2">Início</h4>
              <p className="text-gray-600 text-sm">
                Abertura da primeira loja em Limoeiro do Norte - CE
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-nosso-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                2015
              </div>
              <h4 className="font-semibold text-nosso-blue-900 mb-2">Expansão</h4>
              <p className="text-gray-600 text-sm">
                Inauguração da filial em Pau dos Ferros - RN
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-nosso-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                2020
              </div>
              <h4 className="font-semibold text-nosso-blue-900 mb-2">Crescimento</h4>
              <p className="text-gray-600 text-sm">
                Nova loja em São Miguel - RN
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
