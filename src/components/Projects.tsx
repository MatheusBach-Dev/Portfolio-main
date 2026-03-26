import React from 'react';
import { ExternalLink, Github, Folder } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  image?: string;
  status: 'completed' | 'in-progress';
}

const projects: Project[] = [
  {
    id: 1,
    title: 'MonetaAI',
    description: 'A MonetaAI é uma plataforma inteligente de controle financeiro pessoal que ajuda você a gerenciar suas despesas.',
    image: '/public/moneta.png',
    technologies: ['React', 'Vite', 'Node.js', 'Firebase'],
    githubUrl: 'https://github.com/Matheus-f-dev/MonetaAi',
    demoUrl: 'https://www.monetaai.site/',
    status: 'completed'
  },
  {
    id: 2,
    title: 'LeveMente',
    description: 'Landing Page criada para a captação de clientes de terapia.',
    image: '/public/natasha.png',
    technologies: ['React', 'Vite', 'Firebase', 'Tailwind'],
    githubUrl: 'https://github.com/MatheusBach-Dev/natasha-flows',
    demoUrl: 'https://www.natashapreis.com.br/',
    status: 'completed'
  },
  {
    id: 3,
    title: 'Neoflow',
    description: 'Landing Page para a captação de empresas interessadas em automatizar seus fluxos com a IA da neoflow.',
    image: '/public/neoflow.PNG',
    technologies: ['React', 'Vite', 'Tailwind'],
    githubUrl: 'https://github.com/MatheusBach-Dev/Neoflow-AI',
    demoUrl: '',
    status: 'completed'
  },
 {
    id: 4,
    title: 'Musique',
    description: 'Plataforma Web para Conexão entre Músicos. Com o objetivo de aprender as linguagens Java e Angular.',
    image: '/public/musique.png',
    technologies: ['Angular', 'Java', 'Spring Boot', 'PostgreSQL'],
    githubUrl: 'https://github.com/MatheusBach-Dev/projeto-musica',
    demoUrl: '',
    status: 'in-progress'
  },
  {
    id: 5,
    title: 'Prada Comercio Industrial',
    description: 'Landing Page criada para Prada Comercio & Representação, para catalogar seus produtos.',
    image: '/public/prada.PNG',
    technologies: ['Angular'],
    githubUrl: 'https://github.com/MatheusBach-Dev/prada-project',
    demoUrl: '',
    status: 'in-progress'
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">Meus Projetos</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            <span className="gradient-text">Trabalhos</span> Recentes
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`skill-card rounded-2xl overflow-hidden group border-2 border-transparent transition-all duration-300 ${
                project.status === 'in-progress' 
                  ? 'hover:border-yellow-400' 
                  : 'hover:border-primary'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-t-1xl" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Folder className="w-16 h-16 text-primary/50" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                
                {/* Status Badge */}
                {project.status === 'in-progress' && (
                  <span className="absolute top-4 right-4 px-3 py-1 text-xs font-semibold rounded-full bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 uppercase tracking-wide">
                    Em Andamento
                  </span>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center transition-all hover:bg-primary hover:text-primary-foreground"
                      aria-label="GitHub"
                    >
                      <Github size={18} />
                    </a>
                    {project.demoUrl && project.status === 'completed' && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center transition-all hover:bg-primary hover:text-primary-foreground"
                        aria-label="Demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/MatheusBach-Dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary border border-border font-semibold transition-all duration-300 hover:scale-105 hover:border-primary hover:text-primary"
          >
            <Github size={20} />
            Ver mais no GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
