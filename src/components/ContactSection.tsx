
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
  Facebook,
  CheckCircle,
  User,
  Building2
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Retornaremos seu contato em até 24 horas.",
    });
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  const contactMethods = [
    {
      icon: <Phone className="w-4 h-4" />,
      title: "Telefone",
      value: "(88) 3423-1234",
      color: "text-nosso-blue-600"
    },
    {
      icon: <Mail className="w-4 h-4" />,
      title: "E-mail",
      value: "contato@nossoatacarejo.com.br",
      color: "text-nosso-yellow-600"
    },
    {
      icon: <MessageCircle className="w-4 h-4" />,
      title: "WhatsApp",
      value: "(88) 99999-1234",
      color: "text-green-600"
    },
    {
      icon: <MapPin className="w-4 h-4" />,
      title: "Endereço",
      value: "Limoeiro do Norte - CE",
      color: "text-nosso-blue-600"
    }
  ];

  return (
    <section id="contato" className="py-16 bg-gradient-to-br from-gray-50 to-nosso-blue-50/20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-nosso-yellow-100 text-nosso-blue-800 px-3 py-1.5 rounded-full text-sm font-medium mb-3">
            <MessageCircle className="w-4 h-4" />
            Entre em Contato
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-nosso-blue-900 mb-2">
            Estamos Aqui Para
            <span className="block text-nosso-yellow-500">Te Atender</span>
          </h2>
          <p className="text-gray-600 max-w-lg mx-auto">
            Nossa equipe está sempre pronta para ajudar. Entre em contato conosco.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {/* Contact Info - Compact */}
          <div className="lg:col-span-2 space-y-3">
            {contactMethods.map((method, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-100 hover:border-nosso-blue-200 transition-colors">
                <div className={`w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center ${method.color}`}>
                  {method.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                    {method.title}
                  </p>
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {method.value}
                  </p>
                </div>
              </div>
            ))}

            {/* Business Hours - Compact */}
            <div className="p-4 bg-nosso-blue-700 rounded-lg text-white">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-nosso-yellow-300" />
                <h4 className="text-sm font-semibold">Funcionamento</h4>
              </div>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between">
                  <span className="text-blue-200">Seg - Sex</span>
                  <span>7h às 21h</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-200">Sábados</span>
                  <span>7h às 21h</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-200">Domingos</span>
                  <span>7h às 18h</span>
                </div>
              </div>
            </div>

            {/* Social Media - Compact */}
            <div className="p-4 bg-white rounded-lg border border-gray-100">
              <h4 className="text-sm font-semibold text-nosso-blue-900 mb-3">Nos Acompanhe</h4>
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="flex-1 border-nosso-blue-200 text-nosso-blue-700 hover:bg-nosso-blue-50 text-xs"
                >
                  <Instagram className="w-3 h-3 mr-1" />
                  Instagram
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="flex-1 border-nosso-blue-200 text-nosso-blue-700 hover:bg-nosso-blue-50 text-xs"
                >
                  <Facebook className="w-3 h-3 mr-1" />
                  Facebook
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form - Modern and Compact */}
          <div className="lg:col-span-3">
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-nosso-blue-900 mb-1">
                    Envie uma Mensagem
                  </h3>
                  <p className="text-sm text-gray-600">
                    Preencha o formulário e retornaremos em breve
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <Label htmlFor="name" className="text-xs font-medium text-nosso-blue-900 mb-1 block">
                        Nome Completo *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="h-9 text-sm border-gray-200 focus:border-nosso-blue-400 focus:ring-nosso-blue-400"
                        placeholder="Seu nome"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone" className="text-xs font-medium text-nosso-blue-900 mb-1 block">
                        Telefone
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="h-9 text-sm border-gray-200 focus:border-nosso-blue-400 focus:ring-nosso-blue-400"
                        placeholder="(00) 00000-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-xs font-medium text-nosso-blue-900 mb-1 block">
                      E-mail *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="h-9 text-sm border-gray-200 focus:border-nosso-blue-400 focus:ring-nosso-blue-400"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-xs font-medium text-nosso-blue-900 mb-1 block">
                      Assunto *
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="h-9 text-sm border-gray-200 focus:border-nosso-blue-400 focus:ring-nosso-blue-400"
                      placeholder="Sobre o que você gostaria de falar?"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-xs font-medium text-nosso-blue-900 mb-1 block">
                      Mensagem *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="text-sm border-gray-200 focus:border-nosso-blue-400 focus:ring-nosso-blue-400 resize-none"
                      placeholder="Escreva sua mensagem aqui..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={isSubmitting}
                    className="w-full h-10 bg-gradient-to-r from-nosso-yellow-400 to-nosso-yellow-500 text-nosso-blue-900 hover:from-nosso-yellow-300 hover:to-nosso-yellow-400 font-semibold transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-nosso-blue-900 border-t-transparent rounded-full animate-spin"></div>
                        Enviando...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Enviar Mensagem
                      </div>
                    )}
                  </Button>
                </form>

                <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-medium text-green-800 mb-0.5">
                        Resposta Garantida
                      </p>
                      <p className="text-xs text-green-700">
                        Retornamos todos os contatos em até 24 horas.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Career Section - Compact */}
        <div className="mt-8 max-w-2xl mx-auto">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-nosso-blue-700 to-nosso-blue-800 text-white overflow-hidden relative">
            <CardContent className="p-4 text-center relative z-10">
              <h4 className="text-lg font-bold mb-2">Trabalhe Conosco</h4>
              <p className="text-blue-100 text-sm mb-3 leading-relaxed">
                Faça parte da nossa equipe! Oportunidades de crescimento em um ambiente colaborativo.
              </p>
              <Button 
                size="sm" 
                className="bg-nosso-yellow-400 text-nosso-blue-900 hover:bg-nosso-yellow-300 font-semibold transition-all duration-300"
              >
                Ver Vagas Disponíveis
              </Button>
            </CardContent>
            <div className="absolute top-0 right-0 w-20 h-20 bg-nosso-yellow-400/10 rounded-full -translate-y-10 translate-x-10"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-nosso-yellow-400/10 rounded-full translate-y-8 -translate-x-8"></div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
