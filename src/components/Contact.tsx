import React, { useState } from 'react';
import { Send, Mail, MapPin, Linkedin, CheckCircle, AlertCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<FormStatus>({ type: 'idle' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading' });

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setStatus({ 
        type: 'success', 
        message: 'Mensagem enviada com sucesso! Entrarei em contato em breve.' 
      });
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => setStatus({ type: 'idle' }), 5000);
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: 'Erro ao enviar mensagem. Por favor, tente novamente.' 
      });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'E-mail',
      value: 'seu.email@exemplo.com',
      href: 'mailto:seu.email@exemplo.com'
    },
    {
      icon: MapPin,
      label: 'Localização',
      value: 'São Paulo, Brasil',
      href: null
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/seu-usuario',
      href: 'https://linkedin.com/in/seu-usuario'
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">Contato</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            Vamos <span className="gradient-text">Conversar</span>?
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Vamos trabalhar juntos?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Estou disponível para projetos freelance, oportunidades de emprego ou apenas para trocar uma ideia sobre tecnologia. Não hesite em entrar em contato!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <div
                  key={info.label}
                  className="skill-card p-4 rounded-xl flex items-center gap-4 group hover:border-primary/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground block">{info.label}</span>
                    {info.href ? (
                      <a 
                        href={info.href}
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="font-medium hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="font-medium">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Seu nome completo"
                  className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border input-focus outline-none placeholder:text-muted-foreground/50"
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="seu.email@exemplo.com"
                  className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border input-focus outline-none placeholder:text-muted-foreground/50"
                />
              </div>

              {/* Message Input */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Escreva sua mensagem aqui..."
                  className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border input-focus outline-none resize-none placeholder:text-muted-foreground/50"
                />
              </div>

              {/* Status Messages */}
              {status.type === 'success' && (
                <div className="flex items-center gap-2 p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-500">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm">{status.message}</span>
                </div>
              )}

              {status.type === 'error' && (
                <div className="flex items-center gap-2 p-4 rounded-lg bg-destructive/10 border border-destructive/30 text-destructive">
                  <AlertCircle className="w-5 h-5" />
                  <span className="text-sm">{status.message}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status.type === 'loading'}
                className="w-full py-4 rounded-lg bg-gradient-primary text-primary-foreground font-semibold text-lg transition-all duration-300 hover:scale-[1.02] glow-primary btn-glow flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {status.type === 'loading' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Enviar Mensagem
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
