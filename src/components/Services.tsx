import React from 'react';
import { GraduationCap, Camera, Globe2, Calendar } from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="py-24 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive support for your academic journey and creative endeavors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            icon={<GraduationCap size={32} />}
            title="Academic Advising"
            description="Expert guidance on UK university applications, course selection, and admission requirements"
          />
          <ServiceCard
            icon={<Camera size={32} />}
            title="Photography"
            description="Professional photography services for events, portraits, and extreme adventures"
          />
          <ServiceCard
            icon={<Globe2 size={32} />}
            title="Immigration Support"
            description="Assistance with visa applications and immigration procedures for international students"
          />
          <ServiceCard
            icon={<Calendar size={32} />}
            title="Consultation"
            description="One-on-one sessions to discuss your academic goals and create a personalized plan"
          />
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="p-6 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors">
    <div className="text-emerald-500 mb-4">{icon}</div>
    <h3 className="text-xl font-serif text-white mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

export default Services;