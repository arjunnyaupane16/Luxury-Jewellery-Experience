import { useEffect, useMemo, useState } from 'react';
import {
  Menu,
  Search,
  X,
  Home,
  Gem,
  Sparkles,
  Crown,
  Heart,
  ChevronRight,
} from 'lucide-react';
import { journalEntries } from '../data/journalEntries';

type NavItem = {
  label: string;
  icon: typeof Home;
  sectionIndex: number;
  image: string;
  tags: string[];
};

type ExploreItem = {
  label: string;
  sectionIndex: number;
  image: string;
  tags: string[];
};

type SearchItem = {
  kind: string;
  label: string;
  sectionIndex: number;
  image: string;
  keywords: string[];
  href?: string;
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen || isSearchOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen, isSearchOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        setIsSearchOpen(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const mainLinks: NavItem[] = [
    { label: 'HOME', icon: Home, sectionIndex: 0, image: '/jewelry/hero-ring.jpg', tags: ['hero', 'home', 'intro'] },
    { label: 'OUR STORY', icon: Heart, sectionIndex: 1, image: '/jewelry/solitaire-ring.jpg', tags: ['story', 'maison', 'about'] },
    { label: 'RINGS', icon: Gem, sectionIndex: 3, image: '/jewelry/statement-ring.jpg', tags: ['rings', 'solitaire', 'gold'] },
    { label: 'NECKLACES', icon: Sparkles, sectionIndex: 5, image: '/jewelry/necklace.jpg', tags: ['necklace', 'collar', 'diamond'] },
    { label: 'DIAMOND EDITION', icon: Crown, sectionIndex: 7, image: '/jewelry/earrings.jpg', tags: ['diamond', 'edition', 'high jewelry'] },
    { label: 'ATELIER', icon: Gem, sectionIndex: 11, image: '/jewelry/gemstones.jpg', tags: ['atelier', 'craft', 'bespoke'] },
  ];

  const exploreLinks: ExploreItem[] = [
    { label: 'GALLERY', sectionIndex: 9, image: '/jewelry/hero-ring.jpg', tags: ['gallery', 'carousel', 'looks'] },
    { label: 'MOMENTS', sectionIndex: 10, image: '/jewelry/bracelet.jpg', tags: ['moments', 'video', 'cinematic'] },
    { label: 'CONTACT', sectionIndex: 11, image: '/jewelry/solitaire-ring.jpg', tags: ['contact', 'journey', 'appointment'] },
  ];

  const searchableItems = useMemo<SearchItem[]>(() => {
    const navItems: SearchItem[] = mainLinks.map((item) => ({
      kind: 'NAVIGATE',
      label: item.label,
      sectionIndex: item.sectionIndex,
      image: item.image,
      keywords: [item.label.toLowerCase(), ...item.tags.map((tag) => tag.toLowerCase())],
    }));

    const collectionItems: SearchItem[] = [
      {
        kind: 'COLLECTION',
        label: 'ETERNAL DIAMOND COUTURE',
        sectionIndex: 0,
        image: '/jewelry/hero-ring.jpg',
        keywords: ['eternal', 'diamond', 'couture', 'hero'],
      },
      {
        kind: 'COLLECTION',
        label: 'ROMANCE OF LIGHT AND GOLD',
        sectionIndex: 2,
        image: '/jewelry/bracelet.jpg',
        keywords: ['romance', 'gold', 'bracelet', 'light'],
      },
    ];

    const articleItems: SearchItem[] = journalEntries.map((entry) => ({
      kind: 'ARTICLE',
      label: entry.title,
      sectionIndex: 11,
      image: entry.heroImage,
      href: `/#/journal/${entry.slug}`,
      keywords: [entry.title.toLowerCase(), entry.slug.replace(/-/g, ' '), 'article', 'journal'],
    }));

    return [...navItems, ...collectionItems, ...articleItems];
  }, [mainLinks]);

  const filteredItems = useMemo(() => {
    const text = query.trim().toLowerCase();

    if (!text) {
      return searchableItems.slice(0, 6);
    }

    return searchableItems.filter((item) => item.keywords.some((keyword) => keyword.includes(text))).slice(0, 8);
  }, [query, searchableItems]);

  const goToSection = (sectionIndex: number) => {
    const sections = document.querySelectorAll('main > section');
    const target = sections[sectionIndex] as HTMLElement | undefined;
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    const hash = window.location.hash || '#/';
    if (!hash.startsWith('#/')) {
      window.location.href = '/#/';
      return;
    }
    if (hash.startsWith('#/journal/')) {
      window.location.href = '/#/';
    }
  };

  const closeOverlays = () => {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
  };

  const handleNavigate = (sectionIndex: number) => {
    closeOverlays();
    goToSection(sectionIndex);
  };

  const sidebarPreviewImages = [
    '/jewelry/hero-ring.jpg',
    '/jewelry/solitaire-ring.jpg',
    '/jewelry/necklace.jpg',
    '/jewelry/earrings.jpg',
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-luxury ${
          isScrolled ? 'bg-[#0a0907]/92 backdrop-blur-md border-b border-[#6f5930]/30' : 'bg-transparent'
        }`}
      >
        <div className="h-20 px-6 md:px-12 flex items-center justify-between">
          <button
            onClick={() => setIsMenuOpen(true)}
            className={`flex items-center gap-3 group relative transition-opacity duration-300 ${
              isMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5 text-white transition-all duration-300 group-hover:scale-110" strokeWidth={1.5} />
            <span className="text-white hidden sm:block text-xs tracking-[0.2em]">MENU</span>
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300" />
          </button>

          <button
            onClick={() => handleNavigate(0)}
            className="absolute left-1/2 transform -translate-x-1/2 block font-display text-2xl md:text-3xl font-light tracking-[0.4em] select-none text-[#f4e7cb]"
            aria-label="Go to top"
          >
            AM
          </button>

          <button
            onClick={() => setIsSearchOpen(true)}
            className="flex items-center gap-3 group relative luxury-interactive"
          >
            <Search className="w-4 h-4 text-white transition-all duration-300 group-hover:scale-110" strokeWidth={1.5} />
            <span className="text-white hidden md:block text-xs tracking-[0.2em]">FIND HER HEART</span>
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300" />
          </button>
        </div>

        <div
          className={`border-t border-white/10 transition-all duration-500 overflow-hidden ${
            isScrolled ? 'max-h-14 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-6 md:px-12 py-3 flex items-center justify-between">
            <span className="text-white/60 text-xs tracking-[0.2em]">OUR STORY</span>
            <nav className="hidden lg:flex items-center gap-8">
              {[
                { label: 'THE BEGINNING', sectionIndex: 2 },
                { label: 'THE JOURNEY', sectionIndex: 6 },
                { label: 'THE PROMISE', sectionIndex: 10 },
                { label: 'FOREVER', sectionIndex: 11 },
              ].map((item, index) => (
                <button
                  key={item.label}
                  onClick={() => handleNavigate(item.sectionIndex)}
                  className="text-xs text-white/50 hover:text-white transition-all duration-300 relative group tracking-[0.15em]"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#8B1538] group-hover:w-full transition-all duration-300" />
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-40 transition-opacity duration-500 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      <aside
        className={`fixed top-0 left-0 h-full w-full sm:w-[420px] bg-[#080704]/98 z-50 transition-transform duration-700 ease-luxury ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#8B1538] to-transparent opacity-50" />

        <div className="h-full flex flex-col p-8 md:p-12 overflow-y-auto">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="self-end mb-10 group relative"
            aria-label="Close menu"
          >
            <div className="relative w-10 h-10 flex items-center justify-center">
              <X className="w-6 h-6 text-white/60 group-hover:text-white transition-all duration-300 group-hover:rotate-90" strokeWidth={1.5} />
            </div>
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300" />
          </button>

          <div className="mb-8">
            <p className="text-[#8B1538] text-xs tracking-[0.3em]">NAVIGATE</p>
          </div>

          <nav className="flex-1">
            <ul className="space-y-2">
              {mainLinks.map((link, index) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavigate(link.sectionIndex)}
                    className="w-full text-left group flex items-center gap-5 py-4 px-2 -mx-2 rounded-lg hover:bg-white/5 transition-all duration-300"
                    style={{ transitionDelay: `${index * 40}ms` }}
                  >
                    <div className="relative w-10 h-10 flex items-center justify-center">
                      <link.icon className="w-5 h-5 text-white/30 group-hover:text-[#8B1538] transition-all duration-300 group-hover:scale-110" strokeWidth={1.5} />
                    </div>
                    <div className="relative overflow-hidden">
                      <span className="font-display text-xl md:text-2xl font-light tracking-[0.12em] text-white/80 group-hover:text-white transition-colors duration-300 block transform group-hover:translate-x-2">
                        {link.label}
                      </span>
                      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#8B1538] group-hover:w-full transition-all duration-500 ease-out" />
                    </div>
                    <ChevronRight className="w-4 h-4 text-white/20 ml-auto opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300" strokeWidth={1.5} />
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="my-8 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <div>
            <p className="text-white/30 text-xs tracking-[0.2em] mb-4">EXPLORE</p>
            <ul className="space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavigate(link.sectionIndex)}
                    className="text-white/50 hover:text-white transition-all duration-300 inline-block transform hover:translate-x-1 text-xs tracking-[0.18em]"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <p className="text-[#8B1538]/90 text-xs tracking-[0.24em] mb-4">VISUAL ARCHIVE</p>
            <div className="grid grid-cols-2 gap-3">
              {sidebarPreviewImages.map((image, index) => (
                <div key={image} className="relative aspect-[4/3] overflow-hidden border border-[#6f5930]/20 jewel-shine luxury-glow-hover">
                  <img
                    src={image}
                    alt={`Jewelry preview ${index + 1}`}
                    className="w-full h-full object-cover image-hover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-auto pt-10">
            <div className="flex items-center gap-3">
              <div className="font-display text-2xl font-light tracking-[0.3em] select-none text-[#f4e7cb]">AM</div>
              <span className="w-[1px] h-4 bg-white/20" />
              <p className="text-xs text-white/30 tracking-wider">A Luxury Jewelry Story</p>
            </div>
          </div>
        </div>
      </aside>

      <div
        className={`fixed inset-0 z-[120] bg-black/82 backdrop-blur-md transition-all duration-500 ${
          isSearchOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="relative max-w-5xl mx-auto px-6 md:px-12 pt-28 pb-14 h-full overflow-y-auto">
          <button
            onClick={() => setIsSearchOpen(false)}
            className="absolute top-10 right-6 md:right-12 text-white/60 hover:text-white transition-colors"
            aria-label="Close search"
          >
            <X className="w-7 h-7" strokeWidth={1.5} />
          </button>

          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl tracking-[0.3em] text-white font-light uppercase">
              FIND HER HEART
            </h2>
            <div className="w-24 h-[1px] bg-[#8B1538]/40 mx-auto mt-8" />
          </div>

          <div className="relative group max-w-4xl mx-auto">
            <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 text-white/20 group-focus-within:text-[#8B1538] transition-colors duration-500" />
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search rings, diamonds, necklaces, atelier stories..."
              className="w-full bg-transparent border-b border-white/15 py-6 pl-14 pr-4 text-2xl md:text-3xl font-light tracking-wide text-white focus:outline-none focus:border-[#8B1538] transition-all duration-700 placeholder:text-white/25"
              autoFocus={isSearchOpen}
            />
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {['Rings', 'Diamonds', 'Necklaces', 'Atelier', 'Bespoke', 'Gallery'].map((quick) => (
              <button
                key={quick}
                onClick={() => setQuery(quick)}
                className="text-xs tracking-[0.32em] text-white/40 hover:text-[#d6b46f] transition-all duration-300 uppercase py-2 px-4 border border-white/10 hover:border-[#8B1538]/45"
              >
                {quick}
              </button>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredItems.map((item) => (
              <button
                key={`${item.kind}-${item.label}`}
                onClick={() => {
                  closeOverlays();
                  if (item.href) {
                    window.location.href = item.href;
                  } else {
                    goToSection(item.sectionIndex);
                  }
                }}
                className="group text-left bg-[#0f0d09]/75 border border-[#6f5930]/25 hover:border-[#8B1538]/60 transition-all duration-500 p-4 jewel-shine luxury-glow-hover"
              >
                <div className="flex gap-4 items-start">
                  <div className="w-24 h-20 overflow-hidden border border-[#6f5930]/25 shrink-0">
                    <img src={item.image} alt={item.label} className="w-full h-full object-cover image-hover" />
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.24em] text-[#d8ba7d]/70 mb-2">{item.kind}</p>
                    <h3 className="font-display text-lg text-[#f4e7cb] tracking-[0.1em]">{item.label}</h3>
                    <p className="text-xs text-white/45 tracking-[0.09em] mt-2">Open section</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {!filteredItems.length && (
            <p className="mt-16 text-center text-white/35 text-sm tracking-[0.16em]">
              No results found. Try: RINGS, DIAMONDS, NECKLACES, ATELIER.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
