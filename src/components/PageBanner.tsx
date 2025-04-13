
import React, { useEffect, useRef } from 'react';

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
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!bannerRef.current) return;
      const scrollY = window.scrollY;
      const bannerHeight = bannerRef.current.offsetHeight;
      
      // Parallax effect for background
      if (scrollY <= bannerHeight) {
        const translateY = scrollY * 0.4;
        bannerRef.current.style.backgroundPositionY = `calc(50% + ${translateY}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={bannerRef}
      className="relative py-20 md:py-28 bg-school-dark text-white overflow-hidden"
      style={{ 
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-position 0.3s ease-out',
      }}
    >
      <div className="absolute inset-0 bg-school-primary opacity-80 animate-[fade-in_0.8s_ease-out]"></div>
      
      <div className="container-custom relative z-10 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 animate-[fade-in_1s_ease-out,slide-up_1s_ease-out]"
            style={{ animationFillMode: 'both' }}>
          {title}
        </h1>
        
        {subtitle && (
          <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto animate-[fade-in_1.2s_ease-out,slide-up_1.2s_ease-out]"
             style={{ animationFillMode: 'both', animationDelay: '0.2s' }}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageBanner;
