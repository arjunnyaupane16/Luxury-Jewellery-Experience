import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const UnmistakablePresenceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const slides = [
    {
      image: '/jewelry/hero-ring.jpg',
      alt: 'Sculpted gold ring close-up',
    },
    {
      image: '/jewelry/solitaire-ring.jpg',
      alt: 'Solitaire diamond ring',
    },
    {
      image: '/jewelry/necklace.jpg',
      alt: 'Diamond necklace composition',
    },
    {
      image: '/jewelry/earrings.jpg',
      alt: 'Diamond earrings detail',
    },
  ];

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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-[#080704] py-24"
    >
      {/* Text Content */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-12">
        <div className="overflow-hidden mb-8">
          <h2
            className={`font-display text-2xl sm:text-3xl md:text-4xl text-[#f4e7cb] tracking-[0.16em] font-light transition-all duration-luxury-1200 ease-luxury ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-full'
            }`}
          >
            UNMISTAKABLE IN PRESENCE
          </h2>
        </div>

        <div
          className={`transition-all duration-luxury-1200 delay-300 ease-luxury ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-white/72 text-sm sm:text-base leading-relaxed tracking-[0.08em] font-light">
            Bold center stones, precise shoulder taper, and balanced gold mass define the silhouette of the
            Maison. Every profile is tuned to deliver authority on hand while retaining an elegant, weightless
            expression under movement.
          </p>
        </div>
      </div>

      {/* Carousel */}
      <div
        className={`relative max-w-6xl mx-auto px-4 transition-all duration-luxury-1200 delay-500 ease-luxury ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="relative overflow-hidden aspect-[16/9] border border-[#6f5930]/20 jewel-shine">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-luxury-900 ease-luxury ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover image-hover"
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-[#090806]/65 border border-[#6f5930]/30 hover:border-[#c9a55c]/60 hover:bg-[#11100c]/80 transition-all duration-500 ease-luxury luxury-glow-hover"
        >
          <ChevronLeft className="w-6 h-6 text-[#f4e7cb]" strokeWidth={1} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-[#090806]/65 border border-[#6f5930]/30 hover:border-[#c9a55c]/60 hover:bg-[#11100c]/80 transition-all duration-500 ease-luxury luxury-glow-hover"
        >
          <ChevronRight className="w-6 h-6 text-[#f4e7cb]" strokeWidth={1} />
        </button>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-500 ease-luxury ${
                index === currentSlide
                  ? 'bg-[#c9a55c] w-8'
                  : 'bg-[#d2b67a]/35 hover:bg-[#d2b67a]/55 w-2'
              }`}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div className="text-center mt-4">
          <span className="text-xs tracking-[0.22em] text-[#d8ba7d]/70 font-light">
            SHOWING LOOK {currentSlide + 1} OF {slides.length}
          </span>
        </div>
      </div>
    </section>
  );
};

export default UnmistakablePresenceSection;

