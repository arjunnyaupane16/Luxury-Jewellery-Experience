import { useEffect, useRef, useState } from 'react';

const ArtInMotionSection = () => {
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
      className="relative min-h-screen flex items-center justify-center bg-[#080704] py-24"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Title */}
        <div className="overflow-hidden mb-12">
          <h2
            className={`font-display text-3xl sm:text-4xl md:text-5xl text-[#f4e7cb] tracking-[0.22em] font-light transition-all duration-luxury-1200 ease-luxury ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-full'
            }`}
          >
            JEWELS IN MOTION
          </h2>
        </div>

        {/* Description */}
        <div
          className={`transition-all duration-luxury-1200 delay-300 ease-luxury ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-white/72 text-sm sm:text-base leading-relaxed tracking-[0.08em] font-light max-w-3xl mx-auto">
            Aurelia Maison reveals a curated universe of rings, diamonds, and sculpted gold accessories.
            Each creation is hand-finished in our private atelier, where gem artists and metal masters
            shape every surface for light, balance, and enduring elegance. Every jewel is composed to feel
            cinematic on the skin, intimate in detail, and timeless in silhouette.
          </p>
        </div>

        {/* Decorative Line */}
        <div
          className={`mt-16 flex justify-center transition-all duration-luxury-1200 delay-500 ease-luxury ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="w-[1px] h-24 bg-gradient-to-b from-[#c9a55c]/50 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default ArtInMotionSection;

