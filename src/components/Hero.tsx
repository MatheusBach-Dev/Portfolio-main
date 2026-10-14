import React from 'react';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import LightRays from './LightRays';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
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

          <div className="flex flex-col items-start">
            <h1 className="mb-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <span className="block text-2xl sm:text-3xl font-sans font-medium text-muted-foreground mb-1">
                {t.hero.greeting}
              </span>
              <span
                className="block text-5xl sm:text-6xl text-foreground leading-tight"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800 }}
              >
                Matheus Bach
              </span>
            </h1>

            <p
              className="text-base sm:text-lg text-muted-foreground mb-10 max-w-md leading-relaxed animate-fade-in"
              style={{ animationDelay: '0.5s' }}
            >
              {t.hero.subtitle}
            </p>

            <div
              className="flex flex-col sm:flex-row items-start gap-3 animate-fade-in"
              style={{ animationDelay: '0.7s' }}
            >
              <a
                href="#projects"
                className="group px-6 py-3 rounded-lg bg-foreground text-background font-semibold text-sm transition-all duration-200 hover:opacity-80 flex items-center gap-2"
              >
                {t.hero.cta}
                <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
              </a>
              <a
                href="/Matheus-Bach-Curriculo.pdf"
                download
                className="group px-6 py-3 rounded-lg border border-border font-semibold text-sm transition-all duration-200 hover:border-foreground/50 flex items-center gap-2"
              >
                {t.hero.resume}
                <Download size={16} className="group-hover:translate-y-0.5 transition-transform" />
              </a>
            </div>

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

          <div
            className="hidden lg:flex justify-end animate-fade-in order-last"
            style={{ animationDelay: '0.4s' }}
          >
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-2xl border border-border/40" />
              <img
                src="/matheusbach-picture.jpeg"
                alt="Matheus Bach"
                className="w-full h-full object-cover object-top rounded-2xl"
                style={{ filter: 'grayscale(30%) contrast(1.05)' }}
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <ArrowDown size={18} />
      </div>
    </section>
  );
};

export default Hero;
