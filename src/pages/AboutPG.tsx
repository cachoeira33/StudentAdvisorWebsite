import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutPG = () => {
  const { t } = useTranslation();

  // Garantir que experienceItems seja array ou vazio, para prevenir crash
  const experienceItems = t('aboutPage.experienceItems', { returnObjects: true }) || [];
  const expertiseItems = t('aboutPage.expertiseItems', { returnObjects: true }) || [];

  return (
    <section id="about" className="py-24 bg-neutral-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        <img src="/profile.png" alt={t('aboutPage.profileAlt')} className="rounded-lg shadow-2xl" />

        <div>
          <h2 className="text-3xl md:text-4xl font-serif mb-6">{t('aboutPage.title')}</h2>
          <p className="mb-6 text-gray-400">{t('aboutPage.description')}</p>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-emerald-400 text-lg font-medium mb-2">{t('aboutPage.experienceTitle')}</h3>
              <ul className="text-gray-400 space-y-2">
                {Array.isArray(experienceItems) &&
                  experienceItems.map((item, i) => <li key={i}>{item}</li>)
                }
              </ul>
            </div>

            <div>
              <h3 className="text-emerald-400 text-lg font-medium mb-2">{t('aboutPage.expertiseTitle')}</h3>
              <ul className="text-gray-400 space-y-2">
                {Array.isArray(expertiseItems) &&
                  expertiseItems.map((item, i) => <li key={i}>{item}</li>)
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPG;
