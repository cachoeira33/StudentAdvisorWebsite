import React from 'react';
import { useTranslation } from 'react-i18next';
import ContactForm from '../components/ContactForm';
import Testimonials from '../components/Testimonials';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactPage = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-20 min-h-screen bg-neutral-950">
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif text-white mb-6">
              {t('contactPage.title')}
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              {t('contactPage.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-serif text-white mb-8">{t('contactDetails.title')}</h2>
              <div className="space-y-6">
                <ContactInfo
                  icon={<Mail size={24} />}
                  title="Email"
                  info={t('contactDetails.emailAdvisor')}
                  link={`mailto:${t('contactDetails.emailAdvisor')}`}
                />
                <ContactInfo
                  icon={<Phone size={24} />}
                  title="Phone"
                  info={t('contactDetails.phoneNumber')}
                  link={`tel:${t('contactDetails.phoneNumber')}`}
                />
                <ContactInfo
                  icon={<MapPin size={24} />}
                  title="Location"
                  info="London, UK"
                />
                <ContactInfo
                  icon={<Clock size={24} />}
                  title="Office Hours"
                  info="Monday - Friday: 9:00 AM - 6:00 PM GMT"
                />
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      <Testimonials maxDisplay={2} />
    </div>
  );
};

const ContactInfo = ({ 
  icon, 
  title, 
  info, 
  link 
}: { 
  icon: React.ReactNode; 
  title: string; 
  info: string; 
  link?: string; 
}) => (
  <div className="flex items-start space-x-4">
    <div className="text-emerald-400 mt-1">{icon}</div>
    <div>
      <h3 className="text-white font-medium mb-1">{title}</h3>
      {link ? (
        <a 
          href={link} 
          className="text-gray-400 hover:text-emerald-400 transition-colors"
        >
          {info}
        </a>
      ) : (
        <p className="text-gray-400">{info}</p>
      )}
    </div>
  </div>
);

export default ContactPage;