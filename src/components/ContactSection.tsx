
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
      icon: <Phone className="w-5 h-5" />,
      title: "Telefones",
      subtitle: "Ligue para qualquer uma das lojas",
      items: [
        { label: "Limoeiro do Norte", value: "(88) 3423-1234", highlight: true },
        { label: "Pau dos Ferros", value: "(84) 3351-5678" },
        { label: "São Miguel", value: "(84) 3352-9876" }
      ],
      color: "text-nosso-blue-600"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "E-mails",
      subtitle: "Envie sua mensagem diretamente",
      items: [
        { label: "Atendimento Geral", value: "contato@nossoatacarejo.com.br", highlight: true },
        { label: "Vendas & Parcerias", value: "vendas@nossoatacarejo.com.br" }
      ],
      color: "text-nosso-yellow-600"
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      title: "WhatsApp",
      subtitle: "Atendimento rápido e personalizado",
      items: [
        { label: "Atendimento 24h", value: "(88) 99999-1234", highlight: true },
        { label: "Suporte Técnico", value: "(88) 99999-5678" }
      ],
      color: "text-green-600"
    }
  ];

  const businessHours = [
    { day: "Segunda a Sexta", hours: "7h às 21h" },
    { day: "Sábados", hours: "7h às 21h" },
    { day: "Domingos", hours: "7h às 18h" }
  ];

  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-gray-50 via-white to-nosso-blue-50/30">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-nosso-yellow-100 text-nosso-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MessageCircle className="w-4 h-4" />
            Entre em Contato
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-nosso-blue-900 mb-6 leading-tight">
            Estamos Aqui Para
            <span className="block text-nosso-yellow-500">Te Atender</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Nossa equipe está sempre pronta para ajudar. Escolha a forma de contato 
            que for mais conveniente para você.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-16">
          {/* Contact Methods */}
          <div className="xl:col-span-1 space-y-6">
            <div className="text-center xl:text-left mb-8">
              <h3 className="text-2xl font-bold text-nosso-blue-900 mb-3">
                Formas de Contato
              </h3>
              <p className="text-gray-600">
                Escolha o canal que preferir para falar conosco
              </p>
            </div>

            {contactMethods.map((method, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 flex items-center justify-center ${method.color} group-hover:scale-110 transition-transform duration-300`}>
                      {method.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg font-semibold text-nosso-blue-900 mb-1">
                        {method.title}
                      </h4>
                      <p className="text-sm text-gray-500 mb-3">
                        {method.subtitle}
                      </p>
                      <div className="space-y-2">
                        {method.items.map((item, idx) => (
                          <div key={idx} className={`${item.highlight ? 'bg-nosso-blue-50 p-2 rounded-lg' : ''}`}>
                            <p className="text-xs text-gray-500 uppercase tracking-wide">
                              {item.label}
                            </p>
                            <p className={`font-medium ${item.highlight ? 'text-nosso-blue-700' : 'text-gray-700'}`}>
                              {item.value}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Business Hours */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-nosso-blue-700 to-nosso-blue-800 text-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-nosso-yellow-300" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Horário de Funcionamento</h4>
                    <p className="text-blue-200 text-sm">Todas as nossas lojas</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-white/10 last:border-0">
                      <span className="text-blue-100">{schedule.day}</span>
                      <span className="text-white font-medium">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="xl:col-span-2">
            <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-nosso-blue-900 mb-3">
                    Envie uma Mensagem
                  </h3>
                  <p className="text-gray-600">
                    Preencha o formulário abaixo e retornaremos em breve
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-nosso-blue-900 font-medium flex items-center gap-2">
                        <User className="w-4 h-4" />
                        Nome Completo *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="h-12 border-gray-300 focus:border-nosso-blue-500 focus:ring-nosso-blue-500 transition-colors"
                        placeholder="Digite seu nome completo"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-nosso-blue-900 font-medium flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        Telefone
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="h-12 border-gray-300 focus:border-nosso-blue-500 focus:ring-nosso-blue-500 transition-colors"
                        placeholder="(00) 00000-0000"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-nosso-blue-900 font-medium flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      E-mail *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="h-12 border-gray-300 focus:border-nosso-blue-500 focus:ring-nosso-blue-500 transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-nosso-blue-900 font-medium flex items-center gap-2">
                      <Building2 className="w-4 h-4" />
                      Assunto *
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="h-12 border-gray-300 focus:border-nosso-blue-500 focus:ring-nosso-blue-500 transition-colors"
                      placeholder="Sobre o que você gostaria de falar?"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-nosso-blue-900 font-medium flex items-center gap-2">
                      <MessageCircle className="w-4 h-4" />
                      Mensagem *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="border-gray-300 focus:border-nosso-blue-500 focus:ring-nosso-blue-500 resize-none transition-colors"
                      placeholder="Escreva sua mensagem aqui..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={isSubmitting}
                    className="w-full h-14 bg-gradient-to-r from-nosso-yellow-400 to-nosso-yellow-500 text-nosso-blue-900 hover:from-nosso-yellow-300 hover:to-nosso-yellow-400 font-semibold text-lg transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-nosso-blue-900 border-t-transparent rounded-full animate-spin"></div>
                        Enviando...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="w-5 h-5" />
                        Enviar Mensagem
                      </div>
                    )}
                  </Button>
                </form>

                <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-green-800 mb-1">
                        Resposta Garantida
                      </p>
                      <p className="text-sm text-green-700">
                        Retornamos todos os contatos em até 24 horas. Para atendimento 
                        imediato, utilize nosso WhatsApp.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Social Media & Career Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Social Media */}
          <Card className="border-0 shadow-lg bg-white">
            <CardContent className="p-8 text-center">
              <h4 className="text-2xl font-bold text-nosso-blue-900 mb-4">
                Nos Acompanhe
              </h4>
              <p className="text-gray-600 mb-6">
                Fique por dentro das nossas promoções e novidades
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-nosso-blue-500 text-nosso-blue-700 hover:bg-nosso-blue-50 hover:border-nosso-blue-600 transition-all duration-300"
                >
                  <Instagram className="w-5 h-5 mr-2" />
                  @nossoatacarejo
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-nosso-blue-500 text-nosso-blue-700 hover:bg-nosso-blue-50 hover:border-nosso-blue-600 transition-all duration-300"
                >
                  <Facebook className="w-5 h-5 mr-2" />
                  Nosso Atacarejo
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Career Section */}
          <Card className="border-0 shadow-lg bg-gradient-to-br from-nosso-blue-700 via-nosso-blue-800 to-nosso-blue-900 text-white overflow-hidden relative">
            <CardContent className="p-8 relative z-10">
              <h4 className="text-2xl font-bold mb-4">
                Trabalhe Conosco
              </h4>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Faça parte da nossa equipe! Oportunidades de crescimento 
                em um ambiente colaborativo e dinâmico.
              </p>
              <Button 
                size="lg" 
                className="bg-nosso-yellow-400 text-nosso-blue-900 hover:bg-nosso-yellow-300 font-semibold transition-all duration-300 hover:scale-105"
              >
                Ver Vagas Disponíveis
              </Button>
            </CardContent>
            <div className="absolute top-0 right-0 w-32 h-32 bg-nosso-yellow-400/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-nosso-yellow-400/10 rounded-full translate-y-12 -translate-x-12"></div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
