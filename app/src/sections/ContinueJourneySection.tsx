import { useEffect, useRef, useState } from 'react';
import { journalEntries } from '../data/journalEntries';

const ContinueJourneySection = () => {
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
      className="relative bg-[#0b0906] py-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="overflow-hidden mb-4">
            <h2
              className={`font-display text-2xl sm:text-3xl text-[#f4e7cb] tracking-[0.16em] font-light transition-all duration-luxury-1200 ease-luxury ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-full'
              }`}
            >
              CONTINUE YOUR JOURNEY
            </h2>
          </div>
          <p
            className={`text-[#d8ba7d]/65 text-sm tracking-[0.12em] font-light transition-all duration-luxury-1200 delay-200 ease-luxury ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            Explore more from the Aurelia Maison universe
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {journalEntries.map((article, index) => (
            <div
              key={article.title}
              className={`group cursor-pointer transition-all duration-luxury-1200 ease-luxury ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${340 + index * 120}ms` }}
            >
              <a href={`/#/journal/${article.slug}`} className="block">
                {/* Image */}
                <div className="relative overflow-hidden aspect-[4/3] mb-6 border border-[#6f5930]/20 jewel-shine luxury-glow-hover">
                  <img
                    src={article.heroImage}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-luxury-950 ease-luxury group-hover:scale-[1.04]"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-colors duration-700 ease-luxury" />
                </div>

                {/* Content */}
                <h3 className="font-display text-lg text-[#f4e7cb] tracking-[0.16em] font-light mb-3 group-hover:text-[#d6b46f] transition-colors duration-500 ease-luxury">
                  {article.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed tracking-[0.05em] font-light">
                  {article.shortDescription}
                </p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContinueJourneySection;

