// Continuous scrolling marquee for popular services
// Pauses on hover and keyboard focus for accessibility
import { useEffect, useState } from 'react';
import { getServices } from '@/utils/localStorage';
import { getIcon } from '@/utils/iconMap';

const MarqueeServices = () => {
  const [services, setServices] = useState<any[]>([]);

  useEffect(() => {
    setServices(getServices());
  }, []);

  // Duplicate services for seamless infinite scroll
  const duplicatedServices = [...services, ...services];

  return (
    <section className="bg-astrology-teal text-white py-3 overflow-hidden border-y border-astrology-deep-teal">
      <div className="relative">
        <div className="flex items-center gap-2 mb-1 px-4">
          <span className="text-xs font-semibold uppercase tracking-wider">Popular Services</span>
        </div>
        
        <div 
          className="flex gap-8 animate-marquee hover:pause focus-within:pause"
          style={{ 
            width: 'max-content',
            animationDuration: `${services.length * 8}s` 
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
                aria-label={`${service.title}: ${service.tagline}`}
              >
                <Icon className="w-5 h-5 text-astrology-sand flex-shrink-0" />
                <div className="flex items-baseline gap-2">
                  <span className="font-semibold">{service.title}</span>
                  <span className="text-sm text-astrology-sand/90">• {service.tagline}</span>
                </div>
              </div>
            );
          })}
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
