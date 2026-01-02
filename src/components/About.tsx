import React from 'react';
import { Code2, GraduationCap, Rocket, Target } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: Code2,
      title: 'Paixão por Código',
      description: 'Apaixonado por transformar ideias em código funcional e elegante'
    },
    {
      icon: GraduationCap,
      title: 'Aprendizado Contínuo',
      description: 'Sempre estudando novas tecnologias e aprimorando habilidades'
    },
    {
      icon: Rocket,
      title: 'Foco em Resultados',
      description: 'Comprometido em entregar soluções que fazem a diferença'
    },
    {
      icon: Target,
      title: 'Objetivos Claros',
      description: 'Determinado a crescer e contribuir no mercado de tecnologia'
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">Sobre Mim</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            Minha <span className="gradient-text">Trajetória</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Olá! Sou um <span className="text-primary font-semibold">Desenvolvedor Júnior</span> apaixonado 
              por tecnologia e programação. Minha jornada começou com a curiosidade de entender como 
              as coisas funcionam por trás das telas.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Atualmente, estou focado em desenvolvimento web, estudando constantemente novas 
              tecnologias e frameworks. Através de cursos, projetos pessoais e muito prática, 
              venho construindo uma base sólida em <span className="text-primary font-semibold">React, 
              JavaScript, TypeScript</span> e tecnologias de back-end.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Meu objetivo é crescer como profissional, contribuir para projetos inovadores 
              e fazer parte de equipes que valorizam o aprendizado e a colaboração. Estou 
              sempre aberto a novos desafios e oportunidades!
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-6">
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text">5+</div>
                <div className="text-sm text-muted-foreground mt-1">Projetos Concluídos</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text">10+</div>
                <div className="text-sm text-muted-foreground mt-1">Tecnologias</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text">∞</div>
                <div className="text-sm text-muted-foreground mt-1">Vontade de Aprender</div>
              </div>
            </div>
          </div>

          {/* Highlight Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="skill-card p-6 rounded-xl card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
