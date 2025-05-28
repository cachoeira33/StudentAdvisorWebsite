import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleConsultation = () => {
    // You can replace this with your actual booking logic
    window.open('https://calendly.com/your-link', '_blank');
  };

  const handleLearnMore = () => {
    navigate('/about');
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Gradient */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-tight">
            {t('hero.title')}
            <span className="block text-emerald-400 mt-2">{t('hero.subtitle')}</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            {t('hero.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={handleConsultation}
              className="px-8 py-4 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 text-lg"
            >
              {t('hero.cta.consultation')}
              <ArrowRight size={20} />
            </button>
            <button 
              onClick={handleLearnMore}
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-md hover:bg-white/10 transition-all text-lg"
            >
              {t('hero.cta.learnMore')}
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-scroll"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;