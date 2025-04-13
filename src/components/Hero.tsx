
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  buttonText?: string;
  buttonLink?: string;
  overlay?: boolean;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  backgroundImage,
  buttonText,
  buttonLink = '/',
  overlay = true,
}) => {
  return (
    <div 
      className="hero-section"
      style={{ 
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {overlay && <div className="hero-overlay"></div>}
      
      <div className="hero-content text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in">
          {title}
        </h1>
        
        {subtitle && (
          <p className="text-lg md:text-xl lg:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto animate-fade-in">
            {subtitle}
          </p>
        )}
        
        {buttonText && (
          <Link 
            to={buttonLink} 
            className="inline-flex items-center bg-school-accent hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-md transition-all duration-300 animate-fade-in"
          >
            {buttonText}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Hero;
