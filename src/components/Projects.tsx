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
    title: 'E-Commerce Dashboard',
    description: 'Dashboard administrativo para gerenciamento de e-commerce com gráficos interativos, controle de estoque e relatórios de vendas.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://demo.com',
    status: 'completed'
  },
  {
    id: 2,
    title: 'Task Manager API',
    description: 'API RESTful completa para gerenciamento de tarefas com autenticação JWT, CRUD completo e documentação Swagger.',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
    githubUrl: 'https://github.com',
    status: 'completed'
  },
  {
    id: 3,
    title: 'Weather App',
    description: 'Aplicação para consulta de clima em tempo real com geolocalização, previsão de 5 dias e interface intuitiva.',
    technologies: ['React', 'JavaScript', 'OpenWeather API', 'CSS'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://demo.com',
    status: 'in-progress'
  }
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
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Folder className="w-16 h-16 text-primary/50" />
                </div>
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
