import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import LightRays from './LightRays';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      <div className="hidden lg:block">
        <LightRays
          rayColor1="#FFFCF8"
          rayColor2="#aaaaaa"
          speed={2.5}
          intensity={2.4}
          spread={2}
          origin="top-right"
          tilt={0}
          saturation={0}
          blend={0.75}
          falloff={1.6}
          opacity={0.6}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* Coluna esquerda — texto */}
          <div className="flex flex-col items-start">

            {/* Badge discreto */}
            <div
              className="flex items-center gap-2 mb-10 animate-fade-in"
              style={{ animationDelay: '0.1s' }}
            >
             
            </div>

            {/* Título */}
            <h1
              className="mb-6 animate-fade-in"
              style={{ animationDelay: '0.3s' }}
            >
              <span className="block text-2xl sm:text-3xl font-sans font-medium text-muted-foreground mb-1">
                Olá, me chamo
              </span>
              <span
                className="block text-5xl sm:text-6xl text-foreground leading-tight"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800 }}
              >
                Matheus Bach
              </span>
            </h1>

            {/* Subtítulo */}
            <p
              className="text-base sm:text-lg text-muted-foreground mb-10 max-w-md leading-relaxed animate-fade-in"
              style={{ animationDelay: '0.5s' }}
            >
              Desenvolvedor Júnior focado em criar{' '}
              <span className="text-foreground font-medium">soluções reais</span>{' '}
              com tecnologia e aprendizado constante.
            </p>

            {/* Botões */}
            <div
              className="flex flex-col sm:flex-row items-start gap-3 animate-fade-in"
              style={{ animationDelay: '0.7s' }}
            >
              <a
                href="#projects"
                className="group px-6 py-3 rounded-lg bg-foreground text-background font-semibold text-sm transition-all duration-200 hover:opacity-80 flex items-center gap-2"
              >
                Ver Projetos
                <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-lg border border-border font-semibold text-sm transition-all duration-200 hover:border-foreground/50"
              >
                Entrar em Contato
              </a>
            </div>

            {/* Links sociais */}
            <div
              className="flex items-center gap-4 mt-10 animate-fade-in"
              style={{ animationDelay: '0.9s' }}
            >
              <a href="https://github.com/MatheusBach-Dev" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/in/matheus-bach-preis-ferreira-747542319/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="mailto:matheusbachsta@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Coluna direita — foto */}
          <div
            className="hidden lg:flex justify-end animate-fade-in order-last"
            style={{ animationDelay: '0.4s' }}
          >
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96">
              {/* Borda sutil */}
              <div className="absolute inset-0 rounded-2xl border border-border/40" />

              {/* Foto com mix-blend para integrar ao fundo escuro */}
              <img
                src="/matheusbach-picture.jpeg"
                alt="Matheus Bach"
                className="w-full h-full object-cover object-top rounded-2xl"
                style={{
                  filter: 'grayscale(30%) contrast(1.05)',
                }}
              />

              {/* Gradiente de fade na base para integrar com o fundo */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <ArrowDown size={18} />
      </div>
    </section>
  );
};

export default Hero;
