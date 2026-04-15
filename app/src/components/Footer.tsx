import { Youtube, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const footerLinks = [
    { name: 'RING GUIDE', href: '#' },
    { name: 'COOKIES', href: '#' },
    { name: 'PRESS', href: '#' },
    { name: 'CLIENT CARE', href: '#' },
    { name: 'BOOK AN APPOINTMENT', href: '#' },
    { name: 'PRIVATE NOTES', href: '#' },
    { name: 'FAQs', href: '#' },
    { name: 'CONTACT', href: '#' },
    { name: 'PRIVACY', href: '#' },
    { name: 'ATELIER CAREERS', href: '#' },
    { name: 'SITE MAP', href: '#' },
    { name: 'GIFT SERVICES', href: '#' },
    { name: 'TERMS', href: '#' },
    { name: 'DO NOT SELL', href: '#' },
    { name: 'ACCOUNT ACCESS', href: '#' },
  ];

  const socialLinks = [
    { icon: Youtube, href: '#', label: 'Youtube' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <footer className="bg-[#080704] border-t border-[#6f5930]/30">
      {/* Logo Section */}
      <div className="py-16 text-center">
        <div className="font-display text-3xl text-[#f4e7cb] tracking-[0.3em]">
          AURELIA MAISON
        </div>
        <div className="text-[#c9a55c]/75 text-xs tracking-[0.22em] mt-2">
          FINE JEWELRY
        </div>
      </div>

      {/* Links Grid */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-4">
          {footerLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white/60 text-xs tracking-[0.17em] font-light hover:text-[#d6b46f] transition-colors duration-500 ease-luxury"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

      {/* Social Links & Language */}
      <div className="border-t border-[#6f5930]/30">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social Icons */}
          <div className="flex items-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-white/60 hover:text-[#d6b46f] transition-colors duration-500 ease-luxury"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" strokeWidth={1.5} />
              </a>
            ))}
          </div>

          {/* Language Selector */}
          <button className="text-white/60 text-xs tracking-[0.17em] font-light hover:text-[#d6b46f] transition-colors duration-500 ease-luxury">
            LANGUAGE
          </button>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[#6f5930]/30 py-6">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-white/40 text-[10px] tracking-[0.16em] font-light">
            © {new Date().getFullYear()} AURELIA MAISON. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

