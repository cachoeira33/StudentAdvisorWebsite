import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutPG = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/profile.png" 
              alt={t('aboutPage.profileAlt')}
              className="rounded-lg shadow-2xl"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
              {t('aboutPage.title')}
            </h2>
            <p className="text-gray-400 mb-6">
              {t('aboutPage.description')}
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-emerald-500 text-lg font-medium mb-2">
                  {t('aboutPage.experienceTitle')}
                </h3>
                <ul className="text-gray-400 space-y-2">
                  {Array.isArray(t('aboutPage.experienceItems', { returnObjects: true })) ? 
                    t('aboutPage.experienceItems', { returnObjects: true }).map((item, index) => (
                      <li key={index}>{item}</li>
                    )) : 
                    <li>{t('aboutPage.experienceItems')}</li>
                  }
                </ul>
              </div>
              <div>
                <h3 className="text-emerald-500 text-lg font-medium mb-2">
                  {t('aboutPage.expertiseTitle')}
                </h3>
                <ul className="text-gray-400 space-y-2">
                  {Array.isArray(t('aboutPage.expertiseItems', { returnObjects: true })) ? 
                    t('aboutPage.expertiseItems', { returnObjects: true }).map((item, index) => (
                      <li key={index}>{item}</li>
                    )) : 
                    <li>{t('aboutPage.expertiseItems')}</li>
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPG;