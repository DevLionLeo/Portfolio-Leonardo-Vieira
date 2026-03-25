import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import useDownload from '../../hooks/useDownload';
import curriculumFile from '../../../public/Currículo Leonardo Vieira.pdf';

const BrowserHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { downloadFromUrl } = useDownload();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleDownloadCurriculum = () => {
    downloadFromUrl(curriculumFile, 'Currículo Leonardo Vieira.pdf');
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Sobre Mim', href: '#aboutMe' },
    { name: 'Projetos', href: '#Projects' }
  ];

  return (
    <header className="bg-black shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          
          {/* Logo */}
          <div className="shrink-0">
            <a href="/" className="text-2xl font-bold text-amber-50 hover:text-red-600 transition-colors duration-300">
              Leonardo Vieira
            </a>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-amber-50 hover:text-red-600 font-medium transition-colors duration-300">
                {link.name}
              </a>
            ))}
            <a
              onClick={handleDownloadCurriculum}
              href="#"
              className="bg-red-900 hover:bg-red-950 text-white font-semibold px-5 py-2 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
              Meu Currículo
            </a>
          </div>

          {/* Menu Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-red-600 focus:outline-none transition-colors duration-300"
              aria-label="Toggle menu">
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Menu Mobile Dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-col space-y-3 pb-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMobileMenu}
                className="text-amber-50 hover:text-red-600 font-medium py-2 transition-colors duration-300">
                {link.name}
              </a>
            ))}
            <a
              href="#"
              onClick={handleDownloadCurriculum}
              className="bg-gray-700 hover:bg-red-600 text-white font-semibold px-5 py-2 rounded-lg text-center transition-all duration-300">
              My Curriculum
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default BrowserHeader;