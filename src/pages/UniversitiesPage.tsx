import React from 'react';

const UniversitiesPage = () => {
  return (
    <div className="py-32 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-serif text-white mb-12 text-center">Partner Universities</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <UniversityCard
            name="Bath Spa University"
            image="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
            description="Located in Bath, it offers programs focused on arts, business, and social sciences. Perfect for those seeking a welcoming environment and a vibrant campus."
            programs={['Business Management', 'Creative Arts', 'Social Sciences']}
          />
          
          <UniversityCard
            name="Victoria College of Arts and Design"
            image="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
            description="Based in London, offering courses in design, digital marketing, and art, ideal for those looking to make an impact in the creative industries."
            programs={['Digital Design', 'Marketing', 'Fine Arts']}
          />
          
          <UniversityCard
            name="Canterbury Christ Church University"
            image="https://images.unsplash.com/photo-1592280771190-3e2e4d571952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
            description="Offers a wide range of academic programs, with a focus on health, education, and social sciences."
            programs={['Education', 'Health Sciences', 'Social Work']}
          />
        </div>

        <div className="mt-16 bg-neutral-900 rounded-lg p-8">
          <h2 className="text-2xl font-serif text-emerald-400 mb-6">Why Study at Our Partner Universities?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-300">
            <div>
              <h3 className="text-white font-medium mb-2">Quality Education</h3>
              <p className="text-gray-400">All our partner universities are recognized for their academic excellence and high teaching standards.</p>
            </div>
            <div>
              <h3 className="text-white font-medium mb-2">Career Prospects</h3>
              <p className="text-gray-400">Strong industry connections and career support services to help you succeed after graduation.</p>
            </div>
            <div>
              <h3 className="text-white font-medium mb-2">Student Support</h3>
              <p className="text-gray-400">Comprehensive support services for international students, including language support and cultural integration programs.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const UniversityCard = ({ name, image, description, programs }: { name: string; image: string; description: string; programs: string[] }) => (
  <div className="bg-neutral-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
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