
import React, { useEffect, useRef } from 'react';
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
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      const heroHeight = heroRef.current.offsetHeight;
      
      // Parallax effect for background
      if (scrollY <= heroHeight) {
        const translateY = scrollY * 0.5;
        heroRef.current.style.backgroundPositionY = `calc(50% + ${translateY}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={heroRef}
      className="hero-section relative overflow-hidden"
      style={{ 
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-position 0.3s ease-out',
      }}
    >
      {overlay && <div className="hero-overlay animate-[fade-in_1s_ease-out]"></div>}
      
      <div className="hero-content text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-[fade-in_0.8s_ease-out,slide-up_0.8s_ease-out]" 
            style={{ animationFillMode: 'both' }}>
          {title}
        </h1>
        
        {subtitle && (
          <p className="text-lg md:text-xl lg:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto animate-[fade-in_1s_ease-out,slide-up_1s_ease-out]"
             style={{ animationFillMode: 'both', animationDelay: '0.2s' }}>
            {subtitle}
          </p>
        )}
        
        {buttonText && (
          <Link 
            to={buttonLink} 
            className="inline-flex items-center bg-school-accent hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-md transition-all duration-300 animate-[fade-in_1.2s_ease-out,slide-up_1.2s_ease-out] hover:scale-105"
            style={{ animationFillMode: 'both', animationDelay: '0.4s' }}
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
