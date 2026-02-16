import { Code2, GraduationCap, Rocket, Target } from 'lucide-react';
import React from 'react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: Code2,
      title: 'Alta Performance em Projetos',
      description: 'Experiência validada com 1º lugar entre 83 projetos apresentados.'
    },
    {
      icon: GraduationCap,
      title: 'Aprendizado Contínuo',
      description: 'Sempre estudando novas tecnologias e aprimorando habilidades.'
    },
    {
      icon: Rocket,
      title: 'Foco em Resultados',
      description: 'Comprometido em entregar soluções que fazem a diferença.'
    },
    {
      icon: Target,
      title: 'Objetivos Claros',
      description: 'Determinado a crescer e contribuir no mercado de tecnologia.'
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">Sobre Mim</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            Minha <span className="gradient-text">Trajetória</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Olá! Meu nome é <span className="text-primary font-semibold">Matheus Bach Preis Ferreira </span>e sou um <span className="text-primary font-semibold">Desenvolvedor Júnior</span> apaixonado por tecnologia e por transformar ideias em soluções reais. Minha jornada começou em uma escola tradicional, mas foi no Colégio Cotemig que descobri minha verdadeira paixão pela programação e decidi construir minha carreira na área.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              No meu terceiro ano do ensino médio, desenvolvi o Projeto <span className='text-primary font-semibold'>Moneta AI</span> na disciplina Projeto Software. Entre 83 projetos apresentados, nosso pitch foi eleito o Top 1, conquistando o <span className='text-primary font-semibold'>primeiro lugar</span> e uma premiação de R$ 3.000. Essa experiência reforçou minha capacidade de unir visão de produto, estratégia e desenvolvimento técnico para gerar resultados concretos.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Busco evoluir constantemente, enfrentar desafios maiores e contribuir para projetos de alto impacto em empresas que valorizam inovação e crescimento.
            </p>
            
            <div className="flex flex-wrap gap-8 pt-6">
              <div className="group text-center p-3 rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-2 cursor-pointer">
                <div className="text-3xl font-bold gradient-text">7+</div>
                <div className="text-sm text-muted-foreground mt-1">Projetos Concluídos</div>
              </div>
              <div className="group text-center p-3 rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-2 cursor-pointer">
                <div className="text-3xl font-bold gradient-text">10+</div>
                <div className="text-sm text-muted-foreground mt-1">Tecnologias</div>
              </div>
              <div className="group text-center p-3 rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-2 cursor-pointer">
                <div className="text-3xl font-bold gradient-text">2+</div>
                <div className="text-sm text-muted-foreground mt-1">Anos de estudo</div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 lg:mt-0">
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
