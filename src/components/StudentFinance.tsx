import React from 'react';
import { PoundSterling, Home, Clock, FileText, Baby, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const StudentFinance = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      name: "Daniela",
      country: "Portugal",
      course: "Computing",
      story: "Got her tuition and rent covered. Now she studies Computing in London."
    },
    {
      name: "Mateo", 
      country: "Spain",
      course: "Business Management",
      story: "Started Business Management with no upfront costs and receives £950/month."
    },
    {
      name: "Giulia",
      country: "Italy", 
      course: "Psychology",
      story: "A single mother, receives extra support for childcare while studying Psychology."
    }
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
            {t('studentFinance.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-emerald-400 mb-8">
            {t('studentFinance.hero.subtitle')}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <BenefitCard
            icon={<PoundSterling size={32} />}
            title={t('studentFinance.benefits.tuition.title')}
            description={t('studentFinance.benefits.tuition.description')}
          />
          <BenefitCard
            icon={<Home size={32} />}
            title={t('studentFinance.benefits.maintenance.title')}
            description={t('studentFinance.benefits.maintenance.description')}
          />
          <BenefitCard
            icon={<Clock size={32} />}
            title={t('studentFinance.benefits.repayment.title')}
            description={t('studentFinance.benefits.repayment.description')}
          />
          <BenefitCard
            icon={<FileText size={32} />}
            title={t('studentFinance.benefits.noUpfront.title')}
            description={t('studentFinance.benefits.noUpfront.description')}
          />
        </div>

        {/* Extra Support */}
        <div className="bg-neutral-900 rounded-lg p-8 mb-16">
          <div className="flex items-center gap-4 mb-4">
            <Baby size={32} className="text-emerald-400" />
            <h3 className="text-2xl font-serif text-white">
              {t('studentFinance.extraSupport.title')}
            </h3>
          </div>
          <p className="text-gray-400 text-lg">
            {t('studentFinance.extraSupport.description')}
          </p>
        </div>

        {/* Eligibility */}
        <div className="bg-neutral-900 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-serif text-white mb-8 text-center">
            {t('studentFinance.eligibility.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              t('studentFinance.eligibility.euCitizens'),
              t('studentFinance.eligibility.settledStatus'),
              t('studentFinance.eligibility.ukResident'),
              t('studentFinance.eligibility.newStudent')
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle size={24} className="text-emerald-400 flex-shrink-0" />
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Real Student Stories */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif text-white mb-8 text-center">
            {t('studentFinance.stories.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-neutral-900 p-6 rounded-lg">
                <h3 className="text-emerald-400 font-semibold mb-2">
                  {testimonial.name} from {testimonial.country}
                </h3>
                <p className="text-sm text-gray-400 mb-3">{testimonial.course}</p>
                <p className="text-gray-300">{testimonial.story}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why This Matters */}
        <div className="bg-emerald-900/20 border border-emerald-700 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-serif text-white mb-6 text-center">
            {t('studentFinance.whyMatters.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl mb-4">🎓</div>
              <p className="text-gray-300">{t('studentFinance.whyMatters.education')}</p>
            </div>
            <div>
              <div className="text-4xl mb-4">💼</div>
              <p className="text-gray-300">{t('studentFinance.whyMatters.workStudy')}</p>
            </div>
            <div>
              <div className="text-4xl mb-4">💬</div>
              <p className="text-gray-300">{t('studentFinance.whyMatters.guidance')}</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-serif text-white mb-4">
            {t('studentFinance.cta.title')}
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            {t('studentFinance.cta.subtitle')}
          </p>
          <button 
            onClick={() => window.open('https://calendly.com/gabriielcachoeira/30min', '_blank')}
            className="px-8 py-4 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-all text-lg font-medium"
          >
            {t('studentFinance.cta.button')}
          </button>
        </div>
      </div>
    </section>
  );
};

const BenefitCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-neutral-900 p-6 rounded-lg border border-neutral-800 hover:border-emerald-700 transition-colors">
    <div className="text-emerald-400 mb-4">{icon}</div>
    <h3 className="text-xl font-serif text-white mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

export default StudentFinance;