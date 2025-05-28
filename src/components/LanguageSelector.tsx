import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const languages = [
  { code: 'en-GB', name: 'English (UK)' },
  { code: 'pt-BR', name: 'Português (BR)' },
  { code: 'es-ES', name: 'Español' },
  { code: 'it-IT', name: 'Italiano' },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLang = languages.find(lang => lang.code === i18n.language) || languages[0];

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-gray-300 hover:text-white focus:outline-none"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <Globe size={20} />
        <span className="hidden md:inline">{currentLang.name}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-neutral-800 ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1" role="menu">
            {languages.map(language => (
              <button
                key={language.code}
                onClick={() => {
                  i18n.changeLanguage(language.code);
                  setIsOpen(false);
                }}
                className={`block px-4 py-2 text-sm w-full text-left ${
                  i18n.language === language.code
                    ? 'bg-neutral-700 text-white'
                    : 'text-gray-300 hover:bg-neutral-700'
                }`}
                role="menuitem"
              >
                {language.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
