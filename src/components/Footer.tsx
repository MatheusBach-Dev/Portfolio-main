import React from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 border-t border-border">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <a href="#home" className="text-3xl font-bold gradient-text">
            &lt;Dev /&gt;
          </a>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-secondary border border-border flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-primary hover:text-primary"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-secondary border border-border flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-primary hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:email@example.com"
              className="w-11 h-11 rounded-full bg-secondary border border-border flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-primary hover:text-primary"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <a href="#home" className="hover:text-primary transition-colors">Home</a>
            <a href="#about" className="hover:text-primary transition-colors">Sobre</a>
            <a href="#skills" className="hover:text-primary transition-colors">Habilidades</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projetos</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contato</a>
          </nav>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-2 text-sm text-muted-foreground">
            <span>© {currentYear} Desenvolvedor.</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              Feito com <Heart className="w-4 h-4 text-primary fill-primary" /> e muito código
            </span>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="absolute right-4 bottom-4 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center transition-all duration-300 hover:scale-110 glow-primary"
          aria-label="Voltar ao topo"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
