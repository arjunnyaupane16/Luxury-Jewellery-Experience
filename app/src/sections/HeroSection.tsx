import { useEffect, useRef, useState } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center bg-[#080704] overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-45"
      >
        <source src="/videos/jewelry-hero.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-[#080704]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        {/* Main Title */}
        <div className="overflow-hidden">
          <h1
            className={`font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-[#f5eee1] tracking-[0.16em] font-light transition-all duration-luxury-1300 ease-luxury ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-full'
            }`}
            style={{ transitionDelay: '360ms' }}
          >
            ETERNAL DIAMOND
          </h1>
        </div>

        <div className="overflow-hidden mt-2">
          <h1
            className={`font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-[#f5eee1] tracking-[0.16em] font-light transition-all duration-luxury-1300 ease-luxury ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-full'
            }`}
            style={{ transitionDelay: '560ms' }}
          >
            COUTURE
          </h1>
        </div>

        {/* Subtitle */}
        <div
          className={`mt-8 transition-all duration-luxury-1200 ease-luxury ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '920ms' }}
        >
          <p className="text-xs sm:text-sm tracking-[0.32em] text-[#d6b46f]/80 font-light">
            AURELIA MAISON HIGH JEWELRY
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-12 left-1/2 transform -translate-x-1/2 transition-all duration-luxury-1200 ease-luxury ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDelay: '1260ms' }}
      >
        <div className="flex flex-col items-center gap-4">
          <span className="text-[10px] tracking-[0.3em] text-[#e0c084]/70 font-light">
            SCROLL TO DISCOVER
          </span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-[#d6b46f]/70 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

