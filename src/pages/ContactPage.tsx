import React from 'react';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  return (
    <div className="pt-20 min-h-screen bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-serif text-white mb-12 text-center">Contact Us</h1>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;