import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Fechar o menu mobile ao mudar de rota
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Efeito para detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Função para mudar o idioma
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  // Links de navegação
  const navLinks = [
    { path: '/about', key: 'nav.about' },
    { path: '/services', key: 'nav.services' },
    { path: '/universities', key: 'nav.universities' },
    { path: '/student-finance', key: 'nav.finance' },
    { path: '/contact', key: 'nav.contact' },
  ];

  // Idiomas suportados
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'pt', name: 'Português' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
    { code: 'de', name: 'Deutsch' },
    { code: 'it', name: 'Italiano' },
    { code: 'zh', name: '中文' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black shadow-lg' : 'bg-black/90 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-white hover:text-gray-300 transition-colors">
            StudentAdvisor
          </Link>

          {/* Navegação Desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                to={link.path}
                className={`text-gray-300 hover:text-white transition-colors ${
                  location.pathname === link.path ? 'font-medium text-white' : ''
                }`}
              >
                {t(link.key)}
              </Link>
            ))}

            {/* Seletor de Idiomas */}
            <select
              onChange={(e) => changeLanguage(e.target.value)}
              value={i18n.language}
              className="bg-gray-800 text-white text-sm px-3 py-1 rounded ml-4 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>
          </nav>

          {/* Botão Mobile */}
          <button
            className="md:hidden text-white p-1 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu Mobile */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                to={link.path}
                className={`block px-3 py-2 rounded-md transition-colors ${
                  location.pathname === link.path
                    ? 'bg-gray-800 text-white'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
              >
                {t(link.key)}
              </Link>
            ))}

            <div className="pt-3 border-t border-gray-800">
              <select
                onChange={(e) => changeLanguage(e.target.value)}
                value={i18n.language}
                className="w-full bg-gray-800 text-white text-sm px-3 py-2 rounded border border-gray-700 focus:outline-none"
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