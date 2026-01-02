import React, { useState } from 'react';
import { Send, Mail, User, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';

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

    // Simulating form submission - Replace with EmailJS or backend integration
    try {
      // Example EmailJS integration:
      // await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_PUBLIC_KEY');
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setStatus({ 
        type: 'success', 
        message: 'Mensagem enviada com sucesso! Entrarei em contato em breve.' 
      });
      setFormData({ name: '', email: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => setStatus({ type: 'idle' }), 5000);
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: 'Erro ao enviar mensagem. Por favor, tente novamente.' 
      });
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-muted/30">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">Fale Comigo</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            Entre em <span className="gradient-text">Contato</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-6 max-w-md mx-auto">
            Tem uma ideia, projeto ou oportunidade? Adoraria ouvir você!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="skill-card p-8 rounded-2xl space-y-6">
            {/* Name Input */}
            <div className="relative">
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Nome
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Seu nome completo"
                  className="w-full pl-12 pr-4 py-3 rounded-lg bg-background border border-border input-focus outline-none"
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="relative">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                E-mail
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="seu@email.com"
                  className="w-full pl-12 pr-4 py-3 rounded-lg bg-background border border-border input-focus outline-none"
                />
              </div>
            </div>

            {/* Message Input */}
            <div className="relative">
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Mensagem
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-muted-foreground" />
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Escreva sua mensagem aqui..."
                  className="w-full pl-12 pr-4 py-3 rounded-lg bg-background border border-border input-focus outline-none resize-none"
                />
              </div>
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

          {/* Alternative Contact */}
          <p className="text-center text-muted-foreground mt-8">
            Ou envie um e-mail diretamente para{' '}
            <a href="mailto:email@example.com" className="text-primary hover:underline">
              email@example.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
