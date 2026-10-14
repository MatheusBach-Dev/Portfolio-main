import React from 'react';
import { Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  project?: string;
}

const testimonials: Testimonial[] = [];

const Testimonials: React.FC = () => {
  const { t } = useLanguage();

  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            {t.testimonials.sectionLabel}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            {t.testimonials.title} <span className="gradient-text">{t.testimonials.titleHighlight}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div
          className={`grid gap-6 max-w-5xl mx-auto ${
            testimonials.length === 1
              ? 'md:grid-cols-1 max-w-2xl'
              : testimonials.length === 2
              ? 'md:grid-cols-2'
              : 'md:grid-cols-3'
          }`}
        >
          {testimonials.map((item) => (
            <figure
              key={item.id}
              className="skill-card rounded-2xl p-6 flex flex-col justify-between"
            >
              <Quote className="w-5 h-5 text-muted-foreground/40 mb-4 shrink-0" />

              <blockquote className="text-sm text-muted-foreground leading-relaxed flex-1">
                {item.quote}
              </blockquote>

              <figcaption className="mt-6 pt-5 border-t border-border">
                <div className="text-sm font-semibold text-foreground">{item.author}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{item.role}</div>
                {item.project && (
                  <div className="text-xs font-mono text-muted-foreground/70 mt-2">{item.project}</div>
                )}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
