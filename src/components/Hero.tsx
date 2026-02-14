import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import LightRays from './LightRays';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Light Rays Effect */}
      <LightRays
        raysOrigin="top-center"
        raysColor="#a855f7"
        raysSpeed={1.4}
        lightSpread={0.9}
        rayLength={3}
        followMouse={true}
        mouseInfluence={0.2}
        noiseAmount={0}
        distortion={0}
        pulsating={false}
        fadeDistance={2}
        saturation={0.8}
      />

      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-pattern" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />


      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-8 animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-muted-foreground font-mono">Disponível para oportunidades</span>
          </div>

          {/* Name */}
          <h1
            className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            Olá, eu sou <br />
            <span className="gradient-text glow-text">
              Matheus Bach
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in"
            style={{ animationDelay: '0.6s' }}
          >
            Desenvolvedor Júnior focado em criar{' '}
            <span className="text-primary font-semibold">soluções reais</span>{' '}
            com tecnologia e aprendizado constante.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in"
            style={{ animationDelay: '1s' }}
          >
            <a
              href="#projects"
              className="group px-8 py-4 rounded-lg bg-gradient-primary text-primary-foreground font-semibold text-lg transition-all duration-300 hover:scale-105 glow-primary btn-glow flex items-center gap-2"
            >
              Ver Projetos
              <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-lg bg-secondary border border-border font-semibold text-lg transition-all duration-300 hover:scale-105 hover:border-primary hover:text-primary"
            >
              Entrar em Contato
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-1">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
