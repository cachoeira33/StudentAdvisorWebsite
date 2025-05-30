import React from 'react';
import { GraduationCap, Building2, PiggyBank, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

const ServicesPage = () => {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage('pt-BR');
  }, [i18n]);

  console.log('our_services:', t('our_services'))
  console.log('personalized_consultancy.title:', t('personalized_consultancy.title'))

  return (
    <div className="py-32 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-serif text-white mb-12 text-center">
          {t('our_services')}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <ServiceCard
            icon={<GraduationCap size={32} />}
            title={t('personalized_consultancy.title')}
            description={t('personalized_consultancy.description')}
          />
          <ServiceCard
            icon={<Building2 size={32} />}
            title={t('application_support.title')}
            description={t('application_support.description')}
          />
          <ServiceCard
            icon={<PiggyBank size={32} />}
            title={t('finance_support.title')}
            description={t('finance_support.description')}
          />
          <ServiceCard
            icon={<MapPin size={32} />}
            title={t('accommodation_support.title')}
            description={t('accommodation_support.description')}
          />
        </div>

        <div className="bg-neutral-900 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-serif text-emerald-400 mb-6">
            {t('why_choose_us')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-300">
            <div>
              <h3 className="text-white font-medium mb-2">
                {t('expertise.title')}
              </h3>
              <p className="text-gray-400">{t('expertise.description')}</p>
            </div>
            <div>
              <h3 className="text-white font-medium mb-2">
                {t('personalized_approach.title')}
              </h3>
              <p className="text-gray-400">{t('personalized_approach.description')}</p>
            </div>
            <div>
              <h3 className="text-white font-medium mb-2">
                {t('comprehensive_support.title')}
              </h3>
              <p className="text-gray-400">{t('comprehensive_support.description')}</p>
            </div>
            <div>
              <h3 className="text-white font-medium mb-2">
                {t('ongoing_assistance.title')}
              </h3>
              <p className="text-gray-400">{t('ongoing_assistance.description')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="bg-neutral-900 p-8 rounded-lg hover:bg-neutral-800 transition-colors">
    <div className="text-emerald-400 mb-4">{icon}</div>
    <h3 className="text-xl font-serif text-white mb-4">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

export default ServicesPage;
