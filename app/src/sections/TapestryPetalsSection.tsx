import { useEffect, useRef, useState } from 'react';

const TapestryPetalsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-[#080704] py-24"
    >
      {/* Full Width Image */}
      <div
        className={`relative w-full h-[60vh] lg:h-[70vh] overflow-hidden transition-all duration-luxury-1400 ease-luxury ${
          isVisible
            ? 'opacity-100 scale-100'
            : 'opacity-0 scale-105'
        }`}
      >
        <img
          src="/jewelry/necklace.jpg"
          alt="Diamond necklace arranged on black fabric"
          className="w-full h-full object-cover image-hover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080704] via-transparent to-black/35" />
      </div>

      {/* Text Content */}
      <div className="max-w-4xl mx-auto px-6 py-24 text-center">
        <div className="overflow-hidden mb-8">
          <h2
            className={`font-display text-2xl sm:text-3xl md:text-4xl text-[#f4e7cb] tracking-[0.16em] font-light transition-all duration-luxury-1200 delay-300 ease-luxury ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-full'
            }`}
          >
            A TAPESTRY OF DIAMOND LIGHT
          </h2>
        </div>

        <div
          className={`transition-all duration-luxury-1200 delay-500 ease-luxury ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-white/72 text-sm sm:text-base leading-relaxed tracking-[0.08em] font-light">
            Graduated stones flow across collar and neckline compositions like a silk drape in motion.
            The contour is designed to follow natural posture while amplifying brilliance with each turn.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TapestryPetalsSection;

