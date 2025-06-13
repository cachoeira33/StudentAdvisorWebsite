import React from 'react';
import { GraduationCap, Building2, PiggyBank, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Testimonials from '../components/Testimonials';

const ServicesPage = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-20 min-h-screen bg-neutral-950">
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif text-white mb-6">
              {t('services.title')}
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              {t('servicesPage.description')}
            </p>
          </div>

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
            <h2 className="text-3xl font-serif text-emerald-400 mb-8 text-center">
              {t('why_choose_us')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-300">
              <div className="bg-neutral-800 p-6 rounded-lg">
                <h3 className="text-white font-medium mb-3 text-lg">
                  {t('expertise.title')}
                </h3>
                <p className="text-gray-400">{t('expertise.description')}</p>
              </div>
              <div className="bg-neutral-800 p-6 rounded-lg">
                <h3 className="text-white font-medium mb-3 text-lg">
                  {t('personalized_approach.title')}
                </h3>
                <p className="text-gray-400">{t('personalized_approach.description')}</p>
              </div>
              <div className="bg-neutral-800 p-6 rounded-lg">
                <h3 className="text-white font-medium mb-3 text-lg">
                  {t('comprehensive_support.title')}
                </h3>
                <p className="text-gray-400">{t('comprehensive_support.description')}</p>
              </div>
              <div className="bg-neutral-800 p-6 rounded-lg">
                <h3 className="text-white font-medium mb-3 text-lg">
                  {t('ongoing_assistance.title')}
                </h3>
                <p className="text-gray-400">{t('ongoing_assistance.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Testimonials />
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
  <div className="bg-neutral-900 p-8 rounded-lg hover:bg-neutral-800 transition-colors group">
    <div className="text-emerald-400 mb-6 group-hover:scale-110 transition-transform">{icon}</div>
    <h3 className="text-xl font-serif text-white mb-4">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </div>
);

export default ServicesPage;