import { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { useLang } from '../i18n/LanguageContext';

const LanguageSwitch = ({ className = '' }) => {
  const { lang, setLang, t } = useLang();
  return (
    <div
      role="group"
      aria-label={t.nav.langLabel}
      className={`flex items-center rounded-full bg-white/10 border border-white/20 backdrop-blur-md p-0.5 text-xs font-black tracking-wider ${className}`}
    >
      {['fr', 'en'].map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={`px-3 py-1.5 rounded-full uppercase transition-all duration-300 ${
            lang === code ? 'bg-white text-[#ff2a2a] shadow' : 'text-white/80 hover:text-white'
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  );
};

const Navbar = () => {
  const { t } = useLang();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll to make navbar more solid
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isOpen
          ? 'bg-[#ff2a2a] py-4'
          : isScrolled
            ? 'bg-black/40 backdrop-blur-md py-4'
            : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center gap-4">

        {/* Left Side: Logo/Name */}
        <div className="flex items-center">
          <a href="#home" className="text-white text-2xl font-black tracking-tight whitespace-nowrap">
            {personalInfo.brandName}<span className="text-red-500">.</span>
          </a>
        </div>

        {/* Center: Desktop Menu Links */}
        <div className="hidden lg:flex space-x-6 xl:space-x-8">
          {t.nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-white font-medium relative group transition-colors duration-300 whitespace-nowrap"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Right Side: Language + CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <LanguageSwitch />
          <a
            href={t.nav.hireMailto}
            className="px-6 py-2.5 rounded-full bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300 backdrop-blur-md whitespace-nowrap"
          >
            {t.nav.hireMe}
          </a>
        </div>

        {/* Mobile: Language + Hamburger */}
        <div className="lg:hidden flex items-center gap-2">
          <LanguageSwitch />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none p-2"
            aria-label="Menu"
            aria-expanded={isOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Slide-Down Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-[36rem] py-4 opacity-100 bg-[#ff2a2a] shadow-2xl' : 'max-h-0 opacity-0 bg-transparent'
        }`}
      >
        <div className="flex flex-col px-6 space-y-4">
          {t.nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-black font-bold text-lg border-b border-white/20 pb-2 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 pb-2">
            <a
              href={t.nav.hireMailto}
              onClick={() => setIsOpen(false)}
              className="inline-block px-6 py-3 rounded-full bg-white text-[#ff2a2a] font-black hover:bg-black hover:text-white transition-colors w-full text-center shadow-lg"
            >
              {t.nav.hireMe}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
