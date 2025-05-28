import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <div className="py-32 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-serif text-white mb-12 text-center">Foundation Year Courses</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-serif text-emerald-400 mb-6">Who Can Benefit from Foundation Year Courses?</h2>
            <div className="space-y-6 text-gray-300">
              <p>
                Foundation Year courses are an excellent opportunity for those who wish to study in the UK but do not have the academic qualifications necessary to enter directly into an undergraduate degree.
              </p>
              <div className="space-y-4">
                <div className="bg-neutral-900 p-6 rounded-lg">
                  <h3 className="text-white font-medium mb-2">Students with Limited Academic Experience</h3>
                  <p className="text-gray-400">If you don't have the qualifications needed to directly enter an undergraduate course, a Foundation Year offers you the chance to update your knowledge and skills for a smooth transition to higher education.</p>
                </div>
                <div className="bg-neutral-900 p-6 rounded-lg">
                  <h3 className="text-white font-medium mb-2">Professionals Returning to Academics</h3>
                  <p className="text-gray-400">If you've been out of formal education for a while and wish to re-enter the academic environment, the Foundation Year provides preparatory support.</p>
                </div>
                <div className="bg-neutral-900 p-6 rounded-lg">
                  <h3 className="text-white font-medium mb-2">International Students and Immigrants</h3>
                  <p className="text-gray-400">For those who have recently moved to the UK and need a year of adaptation before starting their undergraduate degree.</p>
                </div>
                <div className="bg-neutral-900 p-6 rounded-lg">
                  <h3 className="text-white font-medium mb-2">Students with Non-traditional Qualifications</h3>
                  <p className="text-gray-400">If you have diplomas or qualifications that aren't directly recognized in the UK, the Foundation Year could be the bridge to your desired degree.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-serif text-emerald-400 mb-6">What is a Foundation Year?</h2>
            <div className="bg-neutral-900 p-8 rounded-lg text-gray-300">
              <p className="mb-6">
                The Foundation Year is a preparatory year designed to equip students with the academic skills necessary to enter a full undergraduate course.
              </p>
              <p className="mb-6">
                During this year, students receive training in subjects like mathematics, academic English, and other essential knowledge relevant to their chosen degree.
              </p>
              <p>
                By the end of the year, you will be ready to begin your full degree course with a solid foundation for success.
              </p>
            </div>
            <div className="mt-8">
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
                alt="Students studying"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;