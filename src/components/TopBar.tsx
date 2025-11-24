// Fixed top bar with contact information
import { Phone, Mail } from 'lucide-react';
import { getSiteInfo } from '@/utils/localStorage';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const TopBar = () => {
  const { t } = useTranslation();
  const [siteInfo, setSiteInfo] = useState({ phone: '', email: '' });

  useEffect(() => {
    setSiteInfo(getSiteInfo());
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-astrology-brown text-astrology-sand h-10 px-4">
      <div className="container mx-auto flex flex-wrap justify-between items-center text-sm gap-2 h-full">
        <div className="flex items-center gap-4">
          <a
            href={`tel:${siteInfo.phone}`}
            className="flex items-center gap-2 hover:text-astrology-orange transition-colors"
            aria-label="Call us"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">{siteInfo.phone}</span>
          </a>
          <a
            href={`mailto:${siteInfo.email}`}
            className="flex items-center gap-2 hover:text-astrology-orange transition-colors"
            aria-label="Email us"
          >
            <Mail className="w-4 h-4" />
            <span className="hidden sm:inline">{siteInfo.email}</span>
          </a>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="text-astrology-sand/80">{t('topBar.tagline')}</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
