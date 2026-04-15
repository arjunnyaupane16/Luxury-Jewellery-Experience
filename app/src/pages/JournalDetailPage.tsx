import { useEffect, useState } from 'react';
import type { JournalEntry } from '../data/journalEntries';

type JournalDetailPageProps = {
  entry: JournalEntry;
};

const JournalDetailPage = ({ entry }: JournalDetailPageProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      <section className="relative min-h-[90vh] bg-[#080704] pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className={`order-2 lg:order-1 transition-all duration-luxury-1200 ease-luxury ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p className="text-[#d8ba7d]/75 text-xs tracking-[0.3em] mb-5 animate-gold-float">JOURNAL ENTRY</p>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#f4e7cb] tracking-[0.14em] font-light leading-tight animate-cinematic-in">
                {entry.title}
              </h1>
              <p className="mt-8 text-white/72 text-base sm:text-lg leading-relaxed tracking-[0.06em] font-light max-w-xl">
                {entry.shortDescription}
              </p>
              <a
                href="/"
                className="inline-block mt-10 text-xs tracking-[0.24em] text-[#d8ba7d] hover:text-[#f4e7cb] transition-colors duration-500"
              >
                RETURN TO MAISON
              </a>
            </div>

            <div className={`order-1 lg:order-2 relative overflow-hidden border border-[#6f5930]/25 jewel-shine luxury-glow-hover transition-all duration-luxury-1400 ease-luxury ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <img
                src={entry.heroImage}
                alt={entry.title}
                className="w-full h-[460px] object-cover image-hover"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-[#0b0906] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            {entry.detail.map((paragraph) => (
              <p
                key={paragraph}
                className={`text-white/70 text-base sm:text-lg leading-relaxed tracking-[0.06em] font-light transition-all duration-luxury-1200 ease-luxury ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-[#080704] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-2xl sm:text-3xl text-[#f4e7cb] tracking-[0.16em] font-light mb-10 text-center">
            CURATED VISUALS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {entry.gallery.map((image, index) => (
              <div
                key={`${entry.slug}-${index}`}
                className={`relative aspect-[4/3] overflow-hidden border border-[#6f5930]/20 jewel-shine luxury-glow-hover transition-all duration-luxury-1200 ease-luxury ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${200 + index * 120}ms` }}
              >
                <img
                  src={image}
                  alt={`${entry.title} visual ${index + 1}`}
                  className="w-full h-full object-cover image-hover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default JournalDetailPage;
