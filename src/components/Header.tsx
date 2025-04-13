
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Teachers', path: '/teachers' },
    { name: 'Classes', path: '/classes' },
    { name: 'Timetable', path: '/timetable' },
    { name: 'Blog', path: '/blog' },
    { name: 'Info', path: '/info' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when path changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container-custom mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <div className={`text-2xl font-serif font-bold ${scrolled ? 'text-school-primary' : 'text-white'}`}>
            Oakridge Academy
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-1">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`nav-link ${location.pathname === link.path ? 'nav-link-active' : ''} ${
                scrolled ? 'text-gray-700 hover:text-school-primary' : 'text-white hover:text-school-accent'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className={`h-6 w-6 ${scrolled ? 'text-school-primary' : 'text-white'}`} />
          ) : (
            <Menu className={`h-6 w-6 ${scrolled ? 'text-school-primary' : 'text-white'}`} />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden absolute w-full bg-white shadow-md ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="container-custom mx-auto py-4">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`nav-link ${location.pathname === link.path ? 'nav-link-active' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
