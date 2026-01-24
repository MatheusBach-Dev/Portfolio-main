import React from 'react';
import { 
  Code, Database, Server, Wrench,
  FileCode, FileJson, Braces, Layout,
  Flame, Leaf, CircleDot, Layers,
  GitBranch, Github, Figma, Terminal
} from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ElementType;
}

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Front-end',
    icon: Layout,
    skills: [
      { name: 'React', icon: Code },
      { name: 'TypeScript', icon: FileCode },
      { name: 'JavaScript', icon: FileJson },
      { name: 'HTML/CSS', icon: Braces },
    ]
  },
  {
    title: 'Back-end',
    icon: Server,
    skills: [
      { name: 'Node.js', icon: Leaf },
      { name: 'Java', icon: CircleDot },
      { name: 'Spring Boot', icon: Flame },
      { name: 'REST APIs', icon: Layers },
    ]
  },
  {
    title: 'Banco de Dados',
    icon: Database,
    skills: [
      { name: 'MySQL', icon: Database },
      { name: 'PostgreSQL', icon: Database },
      { name: 'Firebase', icon: Flame },
      { name: 'MongoDB', icon: Leaf },
    ]
  },
  {
    title: 'Ferramentas',
    icon: Wrench,
    skills: [
      { name: 'Git', icon: GitBranch },
      { name: 'GitHub', icon: Github },
      { name: 'Figma', icon: Figma },
      { name: 'Terminal', icon: Terminal },
    ]
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-muted/30">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">Minhas Skills</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            <span className="gradient-text">Habilidades</span> & Tecnologias
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="skill-card p-6 rounded-2xl"
              style={{ animationDelay: `${categoryIndex * 0.15}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              {/* Skills */}
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill) => (
                  <div 
                    key={skill.name} 
                    className="group flex items-center gap-3 p-3 rounded-xl bg-muted/50 hover:bg-primary/10 border border-transparent hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <skill.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-medium text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
