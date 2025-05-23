
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  MapPin, 
  Clock,
  Send,
  Instagram,
  Facebook
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Obrigado pelo contato. Retornaremos em breve!",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-nosso-yellow-500" />,
      title: "Telefones",
      details: [
        "Limoeiro do Norte: (88) 3423-1234",
        "Pau dos Ferros: (84) 3351-5678",
        "São Miguel: (84) 3352-9876"
      ]
    },
    {
      icon: <Mail className="w-6 h-6 text-nosso-yellow-500" />,
      title: "E-mail",
      details: [
        "contato@nossoatacarejo.com.br",
        "vendas@nossoatacarejo.com.br"
      ]
    },
    {
      icon: <Clock className="w-6 h-6 text-nosso-yellow-500" />,
      title: "Horário de Funcionamento",
      details: [
        "Segunda a Sábado: 7h às 21h",
        "Domingo: 7h às 18h"
      ]
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-nosso-yellow-500" />,
      title: "WhatsApp",
      details: [
        "(88) 99999-1234",
        "Atendimento rápido e personalizado"
      ]
    }
  ];

  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-nosso-blue-900 mb-6">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos aqui para te atender! Entre em contato conosco ou visite uma de nossas lojas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informações de Contato */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-nosso-blue-900 mb-6">
                Fale Conosco
              </h3>
              <p className="text-gray-600 mb-8">
                Nossa equipe está sempre pronta para ajudar você. Entre em contato 
                através de qualquer um dos canais abaixo.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-nosso-blue-100 rounded-full flex items-center justify-center mr-4">
                        {info.icon}
                      </div>
                      <h4 className="text-lg font-semibold text-nosso-blue-900">
                        {info.title}
                      </h4>
                    </div>
                    <div className="space-y-2">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Redes Sociais */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-nosso-blue-900 mb-4">
                  Nos acompanhe nas redes sociais
                </h4>
                <div className="flex space-x-4">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-nosso-blue-500 text-nosso-blue-700 hover:bg-nosso-blue-50"
                  >
                    <Instagram className="w-5 h-5 mr-2" />
                    Instagram
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-nosso-blue-500 text-nosso-blue-700 hover:bg-nosso-blue-50"
                  >
                    <Facebook className="w-5 h-5 mr-2" />
                    Facebook
                  </Button>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Fique por dentro das nossas promoções e novidades!
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Formulário de Contato */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-nosso-blue-900 mb-6">
                Envie uma Mensagem
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-nosso-blue-900 font-medium">
                      Nome Completo *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-1 border-gray-300 focus:border-nosso-blue-500"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="text-nosso-blue-900 font-medium">
                      Telefone
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-1 border-gray-300 focus:border-nosso-blue-500"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-nosso-blue-900 font-medium">
                    E-mail *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="mt-1 border-gray-300 focus:border-nosso-blue-500"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <Label htmlFor="subject" className="text-nosso-blue-900 font-medium">
                    Assunto *
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="mt-1 border-gray-300 focus:border-nosso-blue-500"
                    placeholder="Sobre o que você gostaria de falar?"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-nosso-blue-900 font-medium">
                    Mensagem *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="mt-1 border-gray-300 focus:border-nosso-blue-500 resize-none"
                    placeholder="Escreva sua mensagem aqui..."
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-nosso-yellow-400 text-nosso-blue-900 hover:bg-nosso-yellow-300 font-semibold"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Enviar Mensagem
                </Button>
              </form>

              <div className="mt-6 p-4 bg-nosso-blue-50 rounded-lg">
                <p className="text-sm text-nosso-blue-800">
                  <strong>Dica:</strong> Para um atendimento mais rápido, entre em contato 
                  via WhatsApp ou ligue diretamente para a loja de sua preferência.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Seção de Trabalhe Conosco */}
        <div className="mt-16">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-nosso-blue-700 to-nosso-blue-800 text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-3xl font-bold mb-4">
                Trabalhe Conosco
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Faça parte da nossa equipe! Estamos sempre em busca de pessoas 
                dedicadas e comprometidas para crescer junto conosco.
              </p>
              <Button 
                size="lg" 
                className="bg-nosso-yellow-400 text-nosso-blue-900 hover:bg-nosso-yellow-300 font-semibold"
              >
                Ver Vagas Disponíveis
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
