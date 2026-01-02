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
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Dashboard',
    description: 'Dashboard administrativo para gerenciamento de e-commerce com gráficos interativos, controle de estoque e relatórios de vendas.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://demo.com',
    featured: true
  },
  {
    id: 2,
    title: 'Task Manager API',
    description: 'API RESTful completa para gerenciamento de tarefas com autenticação JWT, CRUD completo e documentação Swagger.',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
    githubUrl: 'https://github.com',
    featured: true
  },
  {
    id: 3,
    title: 'Weather App',
    description: 'Aplicação para consulta de clima em tempo real com geolocalização, previsão de 5 dias e interface intuitiva.',
    technologies: ['React', 'JavaScript', 'OpenWeather API', 'CSS'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://demo.com'
  },
  {
    id: 4,
    title: 'Blog Pessoal',
    description: 'Blog responsivo com sistema de posts, comentários e painel administrativo para gerenciamento de conteúdo.',
    technologies: ['React', 'Firebase', 'Styled Components'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://demo.com'
  },
  {
    id: 5,
    title: 'Calculadora Financeira',
    description: 'Calculadora para simulação de investimentos, juros compostos e planejamento financeiro pessoal.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'Chart.js'],
    githubUrl: 'https://github.com'
  },
  {
    id: 6,
    title: 'Portfolio Template',
    description: 'Template de portfólio moderno e responsivo com tema dark/light, animações suaves e fácil customização.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://demo.com'
  }
];

const Projects: React.FC = () => {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">Meu Trabalho</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            <span className="gradient-text">Projetos</span> em Destaque
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className="project-card rounded-2xl group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Folder className="w-16 h-16 text-primary/50" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
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
                    {project.demoUrl && (
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

                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <h3 className="text-2xl font-bold text-center mb-8">Outros Projetos</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {otherProjects.map((project, index) => (
            <div
              key={project.id}
              className="skill-card p-5 rounded-xl group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-3">
                <Folder className="w-8 h-8 text-primary" />
                <div className="flex gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={18} />
                  </a>
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="Demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <h4 className="font-bold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h4>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span key={tech} className="text-xs text-muted-foreground font-mono">
                    {tech}{project.technologies.indexOf(tech) < Math.min(project.technologies.length, 3) - 1 ? ' •' : ''}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <a
            href="https://github.com"
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
