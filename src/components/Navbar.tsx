// Navigation bar with mobile responsive menu
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.services'), path: '/#services' },
    { name: t('nav.horoscope'), path: '/#horoscope' },
    { name: t('nav.zodiac'), path: '/#zodiac' },
    { name: t('nav.contact'), path: '/#contact' },
    
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path) || location.hash === path;
  };

  const handleLinkClick = (path: string) => {
    setIsOpen(false);
    if (path.startsWith('/#')) {
      const element = document.querySelector(path.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="fixed top-10 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <Sparkles className="w-6 h-6 text-astrology-orange group-hover:text-astrology-teal transition-colors" />
            <span className="text-xl font-bold text-primary">{t('footer.brand')}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => handleLinkClick(link.path)}
                className={`text-sm font-medium transition-colors hover:text-astrology-orange ${
                  isActive(link.path) ? 'text-astrology-orange' : 'text-foreground'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <LanguageSwitcher />
            <Button
              asChild
              size="sm"
              className="bg-astrology-teal hover:bg-astrology-deep-teal text-white"
            >
              <a href="mailto:hello@cosmicinsights.com">{t('hero.cta')}</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-astrology-orange transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className={`text-sm font-medium transition-colors hover:text-astrology-orange ${
                    isActive(link.path) ? 'text-astrology-orange' : 'text-foreground'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">{t('nav.language')}</span>
                <LanguageSwitcher />
              </div>
              <Button
                asChild
                size="sm"
                className="bg-astrology-teal hover:bg-astrology-deep-teal text-white w-full"
              >
                <a href="https://wa.me/919515615597?text=Hello%2C%20I%20would%20like%20to%20book%20a%20consultation" target="_blank" rel="noopener noreferrer">{t('hero.cta')}</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
