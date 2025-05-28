import React from 'react';
import { GraduationCap, Building2, PiggyBank, MapPin } from 'lucide-react';

const ServicesPage = () => {
  return (
    <div className="py-32 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-serif text-white mb-12 text-center">Our Services</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <ServiceCard
            icon={<GraduationCap size={32} />}
            title="Personalized Consultancy"
            description="Receive guidance on which university and course are best suited to your goals and profile. We take into account your academic background, career aspirations, and personal preferences to recommend the perfect educational path."
          />
          <ServiceCard
            icon={<Building2 size={32} />}
            title="Complete Application Support"
            description="From selecting the right institution to completing your enrollment and finalizing the details. We guide you through every step of the application process, ensuring all documentation is properly prepared and submitted."
          />
          <ServiceCard
            icon={<PiggyBank size={32} />}
            title="Student Finance Support"
            description="Assistance in applying for student loans and maintenance loans, with a thorough explanation of available options. We help you understand the financial aspects of studying in the UK and maximize your funding opportunities."
          />
          <ServiceCard
            icon={<MapPin size={32} />}
            title="Accommodation and Logistics Support"
            description="Help finding accommodation and providing information on living expenses in the UK. We assist you in finding suitable housing options and understanding the cost of living in different UK cities."
          />
        </div>

        <div className="bg-neutral-900 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-serif text-emerald-400 mb-6">Why Choose Our Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-300">
            <div>
              <h3 className="text-white font-medium mb-2">Expertise and Experience</h3>
              <p className="text-gray-400">With years of experience in UK higher education, we understand the complexities of the application process and can help you navigate them successfully.</p>
            </div>
            <div>
              <h3 className="text-white font-medium mb-2">Personalized Approach</h3>
              <p className="text-gray-400">Every student's journey is unique. We provide tailored guidance that considers your individual circumstances and goals.</p>
            </div>
            <div>
              <h3 className="text-white font-medium mb-2">Comprehensive Support</h3>
              <p className="text-gray-400">From initial consultation to arrival in the UK, we're with you every step of the way, ensuring a smooth transition to your new academic life.</p>
            </div>
            <div>
              <h3 className="text-white font-medium mb-2">Ongoing Assistance</h3>
              <p className="text-gray-400">Our support doesn't end with your acceptance. We continue to provide guidance throughout your academic journey in the UK.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-neutral-900 p-8 rounded-lg hover:bg-neutral-800 transition-colors">
    <div className="text-emerald-400 mb-4">{icon}</div>
    <h3 className="text-xl font-serif text-white mb-4">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

export default ServicesPage;