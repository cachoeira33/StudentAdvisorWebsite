import React from 'react';
import Hero from '../components/Hero';
import StudentFinance from '../components/StudentFinance';
import About from '../components/About';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <StudentFinance />
      <About />
    </>
  );
};

export default HomePage;