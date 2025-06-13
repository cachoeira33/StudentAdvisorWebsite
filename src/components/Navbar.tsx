import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const handleBookMeeting = () => {
    window.open('https://calendly.com/gabriielcachoeira/30min', '_blank');
  };

  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-serif text-white">
              Gabriel Cachoeira
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <NavLink to="/">{t('nav.home')}</NavLink>
            <NavLink to="/about">{t('nav.about')}</NavLink>
            <NavLink to="/services">{t('nav.services')}</NavLink>
            <NavLink to="/universities">{t('nav.universities')}</NavLink>
            <NavLink to="/foundation">{t('nav.foundation')}</NavLink>
            <NavLink to="/student-finance">{t('nav.funding')}</NavLink>
            <NavLink to="/contact">{t('nav.contact')}</NavLink>
            <NavLink to="/faq">{t('nav.faq')}</NavLink>
            <LanguageSelector />
            <button 
              onClick={handleBookMeeting}
              className="px-4 py-2 text-sm font-medium text-white bg-emerald-600 rounded-md hover:bg-emerald-700 transition-colors"
            >
              {t('nav.bookMeeting')}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <LanguageSelector />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-neutral-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink to="/" onClick={() => setIsOpen(false)}>{t('nav.home')}</MobileNavLink>
            <MobileNavLink to="/about" onClick={() => setIsOpen(false)}>{t('nav.about')}</MobileNavLink>
            <MobileNavLink to="/services" onClick={() => setIsOpen(false)}>{t('nav.services')}</MobileNavLink>
            <MobileNavLink to="/universities" onClick={() => setIsOpen(false)}>{t('nav.universities')}</MobileNavLink>
            <MobileNavLink to="/foundation" onClick={() => setIsOpen(false)}>{t('nav.foundation')}</MobileNavLink>
            <MobileNavLink to="/student-finance" onClick={() => setIsOpen(false)}>{t('nav.funding')}</MobileNavLink>
            <MobileNavLink to="/contact" onClick={() => setIsOpen(false)}>{t('nav.contact')}</MobileNavLink>
            <MobileNavLink to="/faq" onClick={() => setIsOpen(false)}>{t('nav.faq')}</MobileNavLink>

            <button 
              onClick={handleBookMeeting}
              className="w-full mt-4 px-4 py-2 text-sm font-medium text-white bg-emerald-600 rounded-md hover:bg-emerald-700 transition-colors"
            >
              {t('nav.bookMeeting')}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link
    to={to}
    className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, children, onClick }: { to: string; children: React.ReactNode; onClick: () => void }) => (
  <Link
    to={to}
    onClick={onClick}
    className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
  >
    {children}
  </Link>
);

export default Navbar;