import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-black py-4 px-6 border-b border-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-white">
          StudentAdvisor
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <Link to="/about" className="text-gray-300 hover:text-white">
            {t('nav.about')}
          </Link>
          <Link to="/services" className="text-gray-300 hover:text-white">
            {t('nav.services')}
          </Link>
          <Link to="/universities" className="text-gray-300 hover:text-white">
            {t('nav.universities')}
          </Link>
          <Link to="/student-finance" className="text-gray-300 hover:text-white">
            {t('nav.finance')}
          </Link>
          <Link to="/contact" className="text-gray-300 hover:text-white">
            {t('nav.contact')}
          </Link>
          <Link to="/testimonials" className="text-gray-300 hover:text-white">
            {t('nav.testimonials')}
          </Link>
          <Link to="/faq" className="text-gray-300 hover:text-white">
            {t('nav.faq')}
          </Link>
        </div>

        {/* Language Selector */}
        <select 
          value={i18n.language}
          onChange={(e) => changeLanguage(e.target.value)}
          className="bg-gray-800 text-white text-sm px-3 py-1 rounded"
        >
          <option value="en">EN</option>
          <option value="pt">PT</option>
          <option value="es">ES</option>
          <option value="it">IT</option>
        </select>
      </div>
    </nav>
  );
};

export default Navbar;