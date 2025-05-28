import React from 'react';
import { Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-serif text-white mb-4">Gabriel Cachoeira</h3>
            <p className="mb-4">
              Helping students achieve their academic dreams while capturing life's extraordinary moments.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<Instagram size={20} />} />
              <SocialLink href="#" icon={<Linkedin size={20} />} />
              <SocialLink href="mailto:contact@example.com" icon={<Mail size={20} />} />
              <SocialLink href="tel:+1234567890" icon={<Phone size={20} />} />
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <FooterLink href="#home">Home</FooterLink>
              <FooterLink href="#about">About</FooterLink>
              <FooterLink href="#services">Services</FooterLink>
              <FooterLink href="#portfolio">Portfolio</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>London, UK</li>
              <li>contact@example.com</li>
              <li>+44 123 456 7890</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Gabriel Cachoeira. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a
    href={href}
    className="text-gray-400 hover:text-emerald-500 transition-colors"
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
  </a>
);

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <a href={href} className="hover:text-emerald-500 transition-colors">
      {children}
    </a>
  </li>
);

export default Footer;