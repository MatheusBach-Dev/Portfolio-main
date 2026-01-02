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
  level: number;
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
      { name: 'React', icon: Code, level: 80 },
      { name: 'TypeScript', icon: FileCode, level: 70 },
      { name: 'JavaScript', icon: FileJson, level: 85 },
      { name: 'HTML/CSS', icon: Braces, level: 90 },
    ]
  },
  {
    title: 'Back-end',
    icon: Server,
    skills: [
      { name: 'Node.js', icon: Leaf, level: 65 },
      { name: 'Java', icon: CircleDot, level: 60 },
      { name: 'Spring Boot', icon: Flame, level: 50 },
      { name: 'REST APIs', icon: Layers, level: 70 },
    ]
  },
  {
    title: 'Banco de Dados',
    icon: Database,
    skills: [
      { name: 'MySQL', icon: Database, level: 70 },
      { name: 'PostgreSQL', icon: Database, level: 65 },
      { name: 'Firebase', icon: Flame, level: 60 },
      { name: 'MongoDB', icon: Leaf, level: 55 },
    ]
  },
  {
    title: 'Ferramentas',
    icon: Wrench,
    skills: [
      { name: 'Git', icon: GitBranch, level: 85 },
      { name: 'GitHub', icon: Github, level: 90 },
      { name: 'Figma', icon: Figma, level: 70 },
      { name: 'Terminal', icon: Terminal, level: 75 },
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
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <skill.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        <span className="font-medium text-sm">{skill.name}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 4 + skillIndex) * 0.1}s`
                        }}
                      />
                    </div>
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
