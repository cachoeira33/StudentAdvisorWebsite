import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const questionsKeys = [
  'faq.q1', 'faq.q2', 'faq.q3', 'faq.q4', 'faq.q5', 'faq.q6', 'faq.q7', 'faq.q8',
  'faq.q9', 'faq.q10', 'faq.q11', 'faq.q12', 'faq.q13', 'faq.q14', 'faq.q15', 'faq.q16',
  'faq.q17', 'faq.q18', 'faq.q19', 'faq.q20', 'faq.q21', 'faq.q22', 'faq.q23', 'faq.q24',
];

const FAQ = () => {
  const { t } = useTranslation();
  const [search, setSearch] = useState('');
  const [expanded, setExpanded] = useState<string | null>(null);

  const filteredQuestions = questionsKeys.filter((key) =>
    t(`${key}.question`).toLowerCase().includes(search.toLowerCase()) ||
    t(`${key}.answer`).toLowerCase().includes(search.toLowerCase())
  );

  const toggle = (key: string) => {
    setExpanded(prev => (prev === key ? null : key));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">{t('faq.title')}</h1>
      <input
        type="text"
        placeholder={t('faq.search')}
        className="w-full p-3 mb-6 bg-neutral-900 border border-neutral-700 rounded-md text-white"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="space-y-4">
        {filteredQuestions.length === 0 && (
          <p className="text-center text-gray-400">No results found.</p>
        )}
        {filteredQuestions.map((key) => (
          <div key={key} className="border border-neutral-700 rounded-md overflow-hidden transition-all duration-300">
            <button
              className="w-full text-left p-4 bg-neutral-800 flex justify-between items-center hover:bg-neutral-700 transition-colors"
              onClick={() => toggle(key)}
            >
              <span>{t(`${key}.question`)}</span>
              {expanded === key ? <ChevronUp /> : <ChevronDown />}
            </button>
            {expanded === key && (
              <div className="p-4 bg-neutral-900 border-t border-neutral-700">
                {t(`${key}.answer`)}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
