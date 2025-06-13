import React from 'react';
import Hero from '../components/Hero';
import StudentFinance from '../components/StudentFinance';
import Services from '../components/Services';
import About from '../components/About';
import Testimonials from '../components/Testimonials';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <StudentFinance />
      <About />
      <Testimonials />
    </>
  );
};

export default HomePage;