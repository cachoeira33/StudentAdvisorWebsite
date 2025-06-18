import React from 'react';
import { useTranslation } from 'react-i18next';
import { GraduationCap, Building2, Heart, Brain, Shield, Hammer } from 'lucide-react';

const UniversitiesPage = () => {
  const { t } = useTranslation();

  const courses = [
    {
      name: t('universities.courses.computing'),
      icon: <GraduationCap size={32} />,
      description: t('universities.courses.computingDesc'),
      color: 'text-blue-400'
    },
    {
      name: t('universities.courses.accounting'),
      icon: <Building2 size={32} />,
      description: t('universities.courses.accountingDesc'),
      color: 'text-green-400'
    },
    {
      name: t('universities.courses.business'),
      icon: <Building2 size={32} />,
      description: t('universities.courses.businessDesc'),
      color: 'text-purple-400'
    },
    {
      name: t('universities.courses.health'),
      icon: <Heart size={32} />,
      description: t('universities.courses.healthDesc'),
      color: 'text-red-400'
    },
    {
      name: t('universities.courses.psychology'),
      icon: <Brain size={32} />,
      description: t('universities.courses.psychologyDesc'),
      color: 'text-pink-400'
    },
    {
      name: t('universities.courses.cyberSecurity'),
      icon: <Shield size={32} />,
      description: t('universities.courses.cyberSecurityDesc'),
      color: 'text-orange-400'
    },
    {
      name: t('universities.courses.construction'),
      icon: <Hammer size={32} />,
      description: t('universities.courses.constructionDesc'),
      color: 'text-yellow-400'
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-neutral-950">
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif text-white mb-6">
              {t('universities.title')}
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              {t('universities.description')}
            </p>
          </div>

          {/* Available Courses Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-serif text-emerald-400 mb-8 text-center">
              {t('universities.availableCourses')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <div
                  key={index}
                  className="bg-neutral-900 p-6 rounded-lg border border-neutral-800 hover:border-emerald-700 transition-colors group"
                >
                  <div className={`${course.color} mb-4 group-hover:scale-110 transition-transform`}>
                    {course.icon}
                  </div>
                  <h3 className="text-xl font-serif text-white mb-3">{course.name}</h3>
                  <p className="text-gray-400">{course.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Partner Universities */}
          <div className="mb-16">
            <h2 className="text-3xl font-serif text-emerald-400 mb-8 text-center">
              {t('universities.partnerUniversities')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <UniversityCard
                name="Bath Spa University"
                image="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
                description={t('universities.bathSpa.description')}
                programs={[
                  t('universities.courses.business'),
                  t('universities.courses.psychology'),
                  'Creative Arts'
                ]}
              />
              
              <UniversityCard
                name="Victoria College of Arts and Design"
                image="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
                description={t('universities.victoria.description')}
                programs={[
                  'Digital Design',
                  'Marketing',
                  'Fine Arts'
                ]}
              />
              
              <UniversityCard
                name="Canterbury Christ Church University"
                image="https://images.unsplash.com/photo-1592280771190-3e2e4d571952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
                description={t('universities.canterbury.description')}
                programs={[
                  'Education',
                  t('universities.courses.health'),
                  'Social Work'
                ]}
              />
            </div>
          </div>

          {/* Why Study Section */}
          <div className="bg-neutral-900 rounded-lg p-8">
            <h2 className="text-3xl font-serif text-emerald-400 mb-8 text-center">
              {t('universities.whyStudy.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-300">
              <div className="text-center">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-white font-medium mb-2">
                  {t('universities.whyStudy.quality.title')}
                </h3>
                <p className="text-gray-400">
                  {t('universities.whyStudy.quality.description')}
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-white font-medium mb-2">
                  {t('universities.whyStudy.career.title')}
                </h3>
                <p className="text-gray-400">
                  {t('universities.whyStudy.career.description')}
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-white font-medium mb-2">
                  {t('universities.whyStudy.support.title')}
                </h3>
                <p className="text-gray-400">
                  {t('universities.whyStudy.support.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const UniversityCard = ({ 
  name, 
  image, 
  description, 
  programs 
}: { 
  name: string; 
  image: string; 
  description: string; 
  programs: string[] 
}) => (
  <div className="bg-neutral-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300 border border-neutral-800">
    <img src={image} alt={name} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-serif text-white mb-2">{name}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <h4 className="text-emerald-400 font-medium mb-2">Key Programs:</h4>
      <ul className="text-gray-400">
        {programs.map((program, index) => (
          <li key={index} className="mb-1">• {program}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default UniversitiesPage;