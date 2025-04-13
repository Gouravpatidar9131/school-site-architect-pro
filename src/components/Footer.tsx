
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-school-dark text-white">
      <div className="container-custom mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Oakridge Academy</h3>
            <p className="text-gray-300 mb-4">Providing excellence in education since 1995. Our mission is to empower students with knowledge, skills, and values to thrive in a global society.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-school-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-school-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-school-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-school-accent transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-school-accent transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-school-accent transition-colors">About Us</Link></li>
              <li><Link to="/teachers" className="text-gray-300 hover:text-school-accent transition-colors">Our Teachers</Link></li>
              <li><Link to="/classes" className="text-gray-300 hover:text-school-accent transition-colors">Classes</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-school-accent transition-colors">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-school-accent transition-colors">Student Portal</a></li>
              <li><a href="#" className="text-gray-300 hover:text-school-accent transition-colors">Parent Resources</a></li>
              <li><a href="#" className="text-gray-300 hover:text-school-accent transition-colors">School Calendar</a></li>
              <li><a href="#" className="text-gray-300 hover:text-school-accent transition-colors">Library</a></li>
              <li><a href="#" className="text-gray-300 hover:text-school-accent transition-colors">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-school-accent" />
                <span className="text-gray-300">123 Education Street, Academic City, AC 12345</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-school-accent" />
                <span className="text-gray-300">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-school-accent" />
                <span className="text-gray-300">info@oakridgeacademy.edu</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© {currentYear} Oakridge Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
