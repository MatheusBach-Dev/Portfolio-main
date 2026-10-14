import { GraduationCap, Rocket, Target, Trophy } from 'lucide-react';
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const highlightIcons = [GraduationCap, Rocket, Target];

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">{t.about.sectionLabel}</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            {t.about.title} <span className="gradient-text">{t.about.titleHighlight}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-lg border border-border bg-card">
              <Trophy className="w-4 h-4 text-yellow-500 shrink-0" />
              <span className="text-sm font-medium">{t.about.award}</span>
              <span className="text-sm text-muted-foreground">{t.about.awardProject}</span>
            </div>

            <p
              className="text-lg text-muted-foreground leading-relaxed"
              dangerouslySetInnerHTML={{ __html: t.about.bio1 }}
            />
            <p
              className="text-lg text-muted-foreground leading-relaxed"
              dangerouslySetInnerHTML={{ __html: t.about.bio2 }}
            />

            <div className="grid grid-cols-3 gap-3 pt-6">
              <div className="group text-center p-3 rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-2 cursor-pointer">
                <div className="text-3xl font-bold gradient-text2">8+</div>
                <div className="text-sm text-muted-foreground mt-1">{t.about.stats.projects}</div>
              </div>
              <div className="group text-center p-3 rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-2 cursor-pointer">
                <div className="text-3xl font-bold gradient-text2">10+</div>
                <div className="text-sm text-muted-foreground mt-1">{t.about.stats.technologies}</div>
              </div>
              <div className="group text-center p-3 rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-2 cursor-pointer">
                <div className="text-3xl font-bold gradient-text2">3+</div>
                <div className="text-sm text-muted-foreground mt-1">{t.about.stats.years}</div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 lg:mt-0">
            {t.about.highlights.map((item, index) => {
              const Icon = highlightIcons[index];
              return (
                <div
                  key={item.title}
                  className="skill-card p-6 rounded-xl card-hover"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
