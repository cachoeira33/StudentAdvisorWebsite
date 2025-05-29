import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { path: '/about', key: 'nav.about' },
    { path: '/services', key: 'nav.services' },
    { path: '/universities', key: 'nav.universities' },
    { path: '/student-finance', key: 'nav.finance' },
    { path: '/contact', key: 'nav.contact' }
  ];

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'pt', name: 'Português' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
    { code: 'de', name: 'Deutsch' }
  ];

  return (
    <header className="bg-black border-b border-gray-800 fixed w-full z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-white hover:text-gray-300 transition-colors">
            StudentAdvisor
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                to={link.path}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {t(link.key)}
              </Link>
            ))}

            {/* Language Selector */}
            <select
              onChange={(e) => changeLanguage(e.target.value)}
              value={i18n.language}
              className="bg-gray-800 text-white text-sm px-3 py-1 rounded ml-4 border border-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-1 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                to={link.path}
                className="block px-3 py-2 text-gray-300 hover:bg-gray-800 hover:text-white rounded transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t(link.key)}
              </Link>
            ))}

            <div className="pt-3 border-t border-gray-800">
              <select
                onChange={(e) => changeLanguage(e.target.value)}
                value={i18n.language}
                className="w-full bg-gray-800 text-white text-sm px-3 py-2 rounded border border-gray-600 focus:outline-none"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;