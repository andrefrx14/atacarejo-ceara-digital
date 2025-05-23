
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  CreditCard, 
  Clock, 
  Shield, 
  Truck, 
  Gift, 
  Users, 
  Star, 
  HeadphonesIcon 
} from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <CreditCard className="w-8 h-8 text-nosso-yellow-500" />,
      title: "Facilidade de Pagamento",
      description: "Aceitamos dinheiro, cartão de débito, crédito e PIX. Parcelamos suas compras.",
      color: "bg-blue-50"
    },
    {
      icon: <Clock className="w-8 h-8 text-nosso-yellow-500" />,
      title: "Horário Estendido",
      description: "Aberto de segunda a sábado das 7h às 21h, e domingos das 7h às 18h.",
      color: "bg-green-50"
    },
    {
      icon: <Shield className="w-8 h-8 text-nosso-yellow-500" />,
      title: "Produtos de Qualidade",
      description: "Selecionamos os melhores fornecedores para garantir a qualidade de nossos produtos.",
      color: "bg-purple-50"
    },
    {
      icon: <Truck className="w-8 h-8 text-nosso-yellow-500" />,
      title: "Entrega Rápida",
      description: "Delivery disponível na região com entrega rápida e segura.",
      color: "bg-orange-50"
    },
    {
      icon: <Gift className="w-8 h-8 text-nosso-yellow-500" />,
      title: "Promoções Exclusivas",
      description: "Ofertas especiais para nossos clientes fiéis e promoções semanais.",
      color: "bg-red-50"
    },
    {
      icon: <Users className="w-8 h-8 text-nosso-yellow-500" />,
      title: "Atendimento Familiar",
      description: "Equipe treinada para oferecer um atendimento personalizado e acolhedor.",
      color: "bg-yellow-50"
    },
    {
      icon: <Star className="w-8 h-8 text-nosso-yellow-500" />,
      title: "Programa de Fidelidade",
      description: "Acumule pontos a cada compra e troque por descontos e produtos.",
      color: "bg-indigo-50"
    },
    {
      icon: <HeadphonesIcon className="w-8 h-8 text-nosso-yellow-500" />,
      title: "Suporte Completo",
      description: "Atendimento ao cliente dedicado para tirar dúvidas e resolver problemas.",
      color: "bg-pink-50"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-nosso-blue-900 mb-6">
            Por que escolher o Nosso Atacarejo?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos muito mais que produtos de qualidade. Conheça todos os benefícios 
            de ser nosso cliente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0"
            >
              <CardContent className="p-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${benefit.color}`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-nosso-blue-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Seção de Destaque */}
        <div className="bg-gradient-to-r from-nosso-blue-700 to-nosso-blue-800 rounded-3xl p-8 md:p-12 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Mais de 10.000 famílias já confiam em nós!
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              Junte-se à nossa família de clientes satisfeitos e descubra por que 
              somos a escolha preferida para as compras do dia a dia.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-nosso-yellow-300 mb-2">15+</div>
                <div className="text-blue-200">Anos de experiência</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-nosso-yellow-300 mb-2">10k+</div>
                <div className="text-blue-200">Clientes atendidos</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-nosso-yellow-300 mb-2">3</div>
                <div className="text-blue-200">Lojas para te servir</div>
              </div>
            </div>
          </div>
        </div>

        {/* Depoimentos */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-nosso-blue-900 text-center mb-12">
            O que nossos clientes dizem
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-nosso-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "Sempre encontro tudo que preciso com os melhores preços. 
                  O atendimento é excepcional!"
                </p>
                <div className="font-semibold text-nosso-blue-900">Maria Silva</div>
                <div className="text-sm text-gray-500">Cliente há 8 anos</div>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-nosso-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "A variedade de produtos é incrível e a qualidade é sempre garantida. 
                  Recomendo para toda família!"
                </p>
                <div className="font-semibold text-nosso-blue-900">João Santos</div>
                <div className="text-sm text-gray-500">Cliente há 5 anos</div>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-nosso-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "O delivery é super rápido e os preços são imbatíveis. 
                  Não compro em outro lugar!"
                </p>
                <div className="font-semibold text-nosso-blue-900">Ana Costa</div>
                <div className="text-sm text-gray-500">Cliente há 3 anos</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
