// Footer component with links and social icons
import { Facebook, Instagram, Twitter, Youtube, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.services'), path: '/#services' },
    { name: t('updates.title'), path: '/#updates' },
    { name: t('nav.contact'), path: '/#contact' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: '#' },
    { name: 'Instagram', icon: Instagram, url: '#' },
    { name: 'Twitter', icon: Twitter, url: '#' },
    { name: 'Youtube', icon: Youtube, url: '#' },
  ];

  return (
    <footer className="bg-astrology-brown text-astrology-sand py-12 border-t border-astrology-brown/80">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <Sparkles className="w-6 h-6 text-astrology-orange" />
              <span className="text-xl font-bold text-white">{t('footer.brand')}</span>
            </Link>
            <p className="text-astrology-sand/80 text-sm leading-relaxed mb-4">
              {t('footer.description')}
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="p-2 bg-astrology-sand/10 rounded-lg hover:bg-astrology-orange transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-astrology-sand/80 hover:text-astrology-orange transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.contactUs')}</h3>
            <div className="space-y-2 text-sm">
              <p className="text-astrology-sand/80">
                <strong className="text-white">{t('footer.email')}</strong>{' '}
                <a
                  href="mailto:hello@cosmicinsights.com"
                  className="hover:text-astrology-orange transition-colors"
                >
                  hello@cosmicinsights.com
                </a>
              </p>
              <p className="text-astrology-sand/80">
                <strong className="text-white">{t('footer.phone')}</strong>{' '}
                <a
                  href="tel:+919876543210"
                  className="hover:text-astrology-orange transition-colors"
                >
                  +91-9876543210
                </a>
              </p>
              <p className="text-astrology-sand/80">
                <strong className="text-white">{t('footer.location')}</strong> {t('footer.locationValue')}
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-astrology-sand/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-astrology-sand/70">
            <p>© {currentYear} {t('footer.brand')}. {t('footer.rights')}</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-astrology-orange transition-colors">
                {t('footer.privacyPolicy')}
              </a>
              <a href="#" className="hover:text-astrology-orange transition-colors">
                {t('footer.termsOfService')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
