import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutPG = () => {
  const { t } = useTranslation();

  return (
    <div className="py-32 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-serif text-white mb-12 text-center">
          {t('title')}
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-serif text-emerald-400 mb-6">
              {t('benefitSection.title')}
            </h2>
            <div className="space-y-6 text-gray-300">
              <p>{t('benefitSection.intro')}</p>
              <div className="space-y-4">
                <div className="bg-neutral-900 p-6 rounded-lg">
                  <h3 className="text-white font-medium mb-2">
                    {t('benefitSection.studentsLimited.title')}
                  </h3>
                  <p className="text-gray-400">
                    {t('benefitSection.studentsLimited.content')}
                  </p>
                </div>
                <div className="bg-neutral-900 p-6 rounded-lg">
                  <h3 className="text-white font-medium mb-2">
                    {t('benefitSection.professionals.title')}
                  </h3>
                  <p className="text-gray-400">
                    {t('benefitSection.professionals.content')}
                  </p>
                </div>
                <div className="bg-neutral-900 p-6 rounded-lg">
                  <h3 className="text-white font-medium mb-2">
                    {t('benefitSection.international.title')}
                  </h3>
                  <p className="text-gray-400">
                    {t('benefitSection.international.content')}
                  </p>
                </div>
                <div className="bg-neutral-900 p-6 rounded-lg">
                  <h3 className="text-white font-medium mb-2">
                    {t('benefitSection.nonTraditional.title')}
                  </h3>
                  <p className="text-gray-400">
                    {t('benefitSection.nonTraditional.content')}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-serif text-emerald-400 mb-6">
              {t('whatIsSection.title')}
            </h2>
            <div className="bg-neutral-900 p-8 rounded-lg text-gray-300">
              <p className="mb-6">
                {t('whatIsSection.paragraph1')}
              </p>
              <p className="mb-6">
                {t('whatIsSection.paragraph2')}
              </p>
              <p>
                {t('whatIsSection.paragraph3')}
              </p>
            </div>
            <div className="mt-8">
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
                alt={t('imageAlt')}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutPG;
// This code defines a React component for the About page of a website, using Tailwind CSS for styling and i18next for internationalization. 
// The page includes sections on the benefits of the platform, what it is, and an image, all styled with a dark theme and responsive design. The content is dynamically translated based on the user's language preference.
// The component is structured to be responsive, with a two-column layout on larger screens and a single column on smaller devices.
// The component uses Tailwind CSS classes for styling, ensuring a modern and clean design. The use of `useTranslation` from `react-i18next` allows for easy localization of the text content, making it adaptable to different languages. The image included in the "What is" section adds a visual element to enhance user engagement.
// The code is structured to be modular, allowing for easy updates and maintenance in the future. Each section is clearly defined, making it straightforward to add or modify content as needed. The use of Tailwind CSS ensures that the design remains consistent and visually appealing across different devices and screen sizes.
// The component is structured to be reusable and maintainable, with clear separation of concerns for each section.
// The code is structured to be modular, allowing for easy updates and maintenance in the future. Each section is clearly defined, making it straightforward to add or modify content as needed. The use of Tailwind CSS ensures that the design remains consistent and visually appealing across different devices and screen sizes.
// The component is ready to be integrated into a larger application, providing a solid foundation for the About page with a focus on user experience and accessibility.
// The component is designed to be responsive, with a two-column layout on larger screens and a single column on smaller devices.
