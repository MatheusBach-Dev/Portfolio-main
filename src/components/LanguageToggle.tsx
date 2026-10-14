import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Lang } from '@/i18n/translations';

const LANGS: Lang[] = ['pt', 'en'];

const LanguageToggle: React.FC = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center rounded-full border border-border bg-secondary p-0.5 gap-0.5">
      {LANGS.map((l) => {
        const active = lang === l;
        return (
          <button
            key={l}
            onClick={() => setLang(l)}
            aria-label={l === 'pt' ? 'Mudar para Português' : 'Switch to English'}
            aria-pressed={active}
            className={`px-2.5 py-0.5 rounded-full text-xs font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
              active
                ? 'bg-foreground text-background'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {l.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageToggle;
