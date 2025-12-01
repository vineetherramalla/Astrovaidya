// Continuous scrolling marquee for popular services
// Pauses on hover and keyboard focus for accessibility
import { useState, useEffect } from 'react';
import { getAllServices } from '@/data/services';
import type { Service } from '@/data/services';
import { getIcon } from '@/utils/iconMap';
import { useTranslation } from 'react-i18next';

const MarqueeServices = () => {
  const { t, i18n } = useTranslation();
  const isTeluguMode = i18n.language === 'te';
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    setServices(getAllServices());
  }, []);

  // Duplicate services for seamless infinite scroll
  const duplicatedServices = [...services, ...services];

  return (
    <section className="fixed top-[104px] left-0 right-0 z-30 bg-astrology-teal text-white py-3 overflow-hidden border-b border-astrology-deep-teal">
      <div className="relative container mx-auto px-4">
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0">
            <span className="text-xs font-semibold uppercase tracking-wider">{t('services.popular')}</span>
          </div>

          <div className="flex-1 overflow-hidden">
            <div
              className="flex gap-8 animate-marquee hover:pause focus-within:pause"
              style={{
                width: 'max-content',
                animationDuration: `${Math.max(6, services.length) * 8}s`,
              }}
              role="marquee"
              aria-label="Popular astrology services"
            >
              {duplicatedServices.map((service, index) => {
                const Icon = getIcon(service.icon);
                return (
                  <div
                    key={`${service.id}-${index}`}
                    className="flex items-center gap-3 whitespace-nowrap"
                    tabIndex={0}
                    role="group"
                    aria-label={`${isTeluguMode ? (service.titleTe || service.title) : service.title}: ${isTeluguMode ? (service.taglineTe || service.tagline) : service.tagline}`}
                  >
                    <Icon className="w-5 h-5 text-astrology-sand flex-shrink-0" />
                    <div className="flex items-baseline gap-2">
                      <span className="font-semibold">{isTeluguMode ? (service.titleTe || service.title) : service.title}</span>
                      <span className="text-sm text-astrology-sand/90">• {isTeluguMode ? (service.taglineTe || service.tagline) : service.tagline}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee linear infinite;
        }
        .animate-marquee:hover,
        .animate-marquee:focus-within {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default MarqueeServices;
