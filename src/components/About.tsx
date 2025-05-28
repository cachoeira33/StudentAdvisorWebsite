import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://drive.google.com/file/d/1Q0OPdjc4lD1JblYvKM5AL5tHBiiGL-Sw/view?usp=drive_link"
              alt="Gabriel Cachoeira"
              className="rounded-lg shadow-2xl"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">About Me</h2>
            <p className="text-gray-400 mb-6">
              With years of experience in academic advising and a passion for photography, I help students navigate their educational journey while capturing life's most extraordinary moments. My unique blend of expertise in UK education systems and creative storytelling allows me to provide comprehensive guidance and support to your whole journey. 
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-emerald-500 text-lg font-medium mb-2">Experience</h3>
                <ul className="text-gray-400 space-y-2">
                  <li>3+ Years in Academic Advising</li>
                  <li>100+ Students Placed</li>
                  <li>Professional Photographer</li>
                </ul>
              </div>
              <div>
                <h3 className="text-emerald-500 text-lg font-medium mb-2">Expertise</h3>
                <ul className="text-gray-400 space-y-2">
                  <li>UK Education System</li>
                  <li>Law Support</li>
                  <li>Adventure Photography</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;