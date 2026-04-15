import { useEffect, useRef, useState } from 'react';

const DepthRadianceSection = () => {
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
      {/* Image Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-4 lg:px-8 mb-16">
        {/* Left Image */}
        <div
          className={`relative overflow-hidden transition-all duration-luxury-1200 ease-luxury jewel-shine luxury-glow-hover border border-[#6f5930]/15 ${
            isVisible
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 -translate-x-20'
          }`}
        >
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src="/jewelry/earrings.jpg"
              alt="Diamond earrings under studio light"
              className="w-full h-full object-cover image-hover"
            />
          </div>
        </div>

        {/* Right Image */}
        <div
          className={`relative overflow-hidden transition-all duration-luxury-1200 delay-200 ease-luxury jewel-shine luxury-glow-hover border border-[#6f5930]/15 ${
            isVisible
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 translate-x-20'
          }`}
        >
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src="/jewelry/gemstones.jpg"
              alt="Gemstones arranged for quality inspection"
              className="w-full h-full object-cover image-hover"
            />
          </div>
        </div>
      </div>

      {/* Text Content */}
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="overflow-hidden mb-8">
          <h2
            className={`font-display text-2xl sm:text-3xl md:text-4xl text-[#f4e7cb] tracking-[0.16em] font-light transition-all duration-luxury-1200 delay-300 ease-luxury ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-full'
            }`}
          >
            DEPTH, FIRE, AND RADIANCE
          </h2>
        </div>

        <div
          className={`transition-all duration-luxury-1200 delay-500 ease-luxury ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-white/72 text-sm sm:text-base leading-relaxed tracking-[0.08em] font-light mb-6">
            In softer light, our stones reveal velvety depth; in direct illumination, they open into sharp
            flashes of white fire and spectral color. This controlled contrast guides every curation decision.
          </p>
          <p className="text-white/72 text-sm sm:text-base leading-relaxed tracking-[0.08em] font-light">
            Each final jewel is matched across tone, clarity, and facet behavior so the composition feels
            seamless from center stone to finishing accents.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DepthRadianceSection;

