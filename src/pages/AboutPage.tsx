import React from 'react';
import { useTranslation } from 'react-i18next';
import Testimonials from '../components/Testimonials';

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-20 min-h-screen bg-neutral-950">
      <section className="py-16 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                  alt={t('aboutPage.profileAlt')}
                  className="rounded-lg shadow-2xl w-full max-w-md mx-auto profile-image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h1 className="text-4xl md:text-5xl font-serif text-white mb-6">
                {t('aboutPage.title')}
              </h1>
              <h2 className="text-xl text-emerald-400 mb-6">
                {t('aboutPage.subtitle')}
              </h2>
              <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                {t('aboutPage.description')}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-emerald-500 text-lg font-medium mb-4">
                    {t('aboutPage.experienceTitle')}
                  </h3>
                  <ul className="text-gray-400 space-y-2">
                    {Array.isArray(t('aboutPage.experienceItems', { returnObjects: true })) ? 
                      t('aboutPage.experienceItems', { returnObjects: true }).map((item, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                          {item}
                        </li>
                      )) : 
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                        {t('aboutPage.experienceItems')}
                      </li>
                    }
                  </ul>
                </div>
                <div>
                  <h3 className="text-emerald-500 text-lg font-medium mb-4">
                    {t('aboutPage.expertiseTitle')}
                  </h3>
                  <ul className="text-gray-400 space-y-2">
                    {Array.isArray(t('aboutPage.expertiseItems', { returnObjects: true })) ? 
                      t('aboutPage.expertiseItems', { returnObjects: true }).map((item, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                          {item}
                        </li>
                      )) : 
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                        {t('aboutPage.expertiseItems')}
                      </li>
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Testimonials maxDisplay={2} />
    </div>
  );
};

export default AboutPage;