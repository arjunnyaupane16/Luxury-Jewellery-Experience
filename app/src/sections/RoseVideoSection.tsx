import { useEffect, useRef, useState } from 'react';

const RoseVideoSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (videoRef.current) {
            videoRef.current.play();
          }
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center bg-[#080704] overflow-hidden"
    >
      {/* Hero Video - Full Screen */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-all duration-luxury-1800 ease-luxury ${
          isVisible
            ? 'opacity-100 scale-100'
            : 'opacity-0 scale-90'
        }`}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/jewelry-hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#080704] via-transparent to-black pointer-events-none" />

      {/* Content Overlay */}
      <div className="relative z-10 text-center px-6">
        {/* Title */}
        <div className="overflow-hidden mb-6">
          <h2
            className={`font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#f4e7cb] tracking-[0.16em] font-light transition-all duration-luxury-1300 delay-500 ease-luxury ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-full'
            }`}
          >
            THE ETERNAL DIAMOND
          </h2>
        </div>

        {/* Subtitle */}
        <div
          className={`transition-all duration-luxury-1200 delay-700 ease-luxury ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-[#d6b46f]/85 text-sm sm:text-base tracking-[0.32em] font-light">
            A SYMBOL OF LEGACY, LIGHT, AND DEVOTION
          </p>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080704] to-transparent pointer-events-none" />
    </section>
  );
};

export default RoseVideoSection;

