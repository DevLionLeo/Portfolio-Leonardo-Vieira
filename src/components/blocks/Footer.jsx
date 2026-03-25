import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Sobre Mim', href: '#aboutMe' },
    { name: 'Meus Projetos', href: '#projects' }
  ];

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/DevLionLeo', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/leonardo-vieira-fullstack/', label: 'LinkedIn' },
    
  ];

  return (
    <footer className="bg-black text-amber-50">
      <div className="container mx-auto px-4 py-8">
        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-amber-50 hover:text-red-600 transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-50 hover:text-red-600 transition-colors duration-300"
              aria-label={social.label}
            >
              <social.icon size={24} />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-amber-50">
          <p>© {currentYear} Leonardo Vieira. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;