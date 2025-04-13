
import React from 'react';

interface PageBannerProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const PageBanner: React.FC<PageBannerProps> = ({
  title,
  subtitle,
  backgroundImage = 'https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
}) => {
  return (
    <div 
      className="relative py-20 md:py-28 bg-school-dark text-white"
      style={{ 
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-school-primary opacity-80"></div>
      
      <div className="container-custom relative z-10 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 animate-fade-in">
          {title}
        </h1>
        
        {subtitle && (
          <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto animate-fade-in">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageBanner;
