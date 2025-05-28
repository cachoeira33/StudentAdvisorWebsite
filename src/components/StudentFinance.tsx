import React from 'react';
import { PoundSterling, GraduationCap, Calendar, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const StudentFinance = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
            {t('sfe.title')}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t('sfe.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FinanceCard
            icon={<PoundSterling size={32} />}
            title={t('sfe.tuitionLoan')}
            description={t('sfe.tuitionDesc')}
          />
          <FinanceCard
            icon={<GraduationCap size={32} />}
            title={t('sfe.maintenanceLoan')}
            description={t('sfe.maintenanceDesc')}
          />
          <FinanceCard
            icon={<Calendar size={32} />}
            title={t('sfe.repayment')}
            description={t('sfe.repaymentDesc')}
          />
          <FinanceCard
            icon={<Shield size={32} />}
            title={t('sfe.additional')}
            description={t('sfe.additionalDesc')}
          />
        </div>
      </div>
    </section>
  );
};

const FinanceCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="p-6 bg-neutral-900 rounded-lg border border-neutral-800 hover:border-neutral-700 transition-colors">
    <div className="text-gray-100 mb-4">{icon}</div>
    <h3 className="text-xl font-serif text-white mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

export default StudentFinance;