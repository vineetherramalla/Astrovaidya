// Grid of service cards with modal/expand functionality
import { useState, useEffect } from 'react';
import { getAllServices } from '@/data/services';
import type { Service } from '@/data/services';
import { getIcon } from '@/utils/iconMap';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import ServiceModal from './ServiceModal';
import { Clock } from 'lucide-react';

const ServicesGrid = () => {
  const { t, i18n } = useTranslation();
  const isTeluguMode = i18n.language === 'te';
  const [services, setServices] = useState<Service[]>([]);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  useEffect(() => {
    setServices(getAllServices());
  }, []);

  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
            {t('services.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
          {services.map((service, index) => {
            const Icon = getIcon(service.icon);
            return (
              <Card
                key={service.id}
                className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-astrology-teal group animate-slide-up flex flex-col h-full"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedService(service)}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setSelectedService(service);
                  }
                }}
              >
                <CardHeader className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div className="p-0 bg-transparent rounded-lg group-hover:bg-transparent transition-colors">
                        {service.image ? (
                          <img src={service.image} alt={service.title} className="w-42 h-32 rounded-md object-cover" />
                        ) : (
                          <div className="p-3 bg-astrology-teal/10 rounded-lg group-hover:bg-astrology-teal/20 transition-colors">
                            <Icon className="w-8 h-8 text-astrology-teal" />
                          </div>
                        )}
                      </div>                    
                  </div>
                  <CardTitle className="text-xl group-hover:text-astrology-teal transition-colors">
                    {isTeluguMode ? (service.titleTe || service.title) : service.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {isTeluguMode ? (service.taglineTe || service.tagline) : service.tagline}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="mt-auto">
                  <div className="flex items-center justify-between">

                    {/* LEFT → Duration */}
                    {service.duration && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{service.duration}</span>
                      </div>
                    )}

                    {/* RIGHT → Price */}
                    {service.price && (
                      <div className="flex items-center gap-1 text-astrology-orange font-bold">
                        
                        <span>₹{service.price}</span>
                      </div>
                    )}

                  </div>
                </CardContent>

              </Card>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      <ServiceModal
        service={selectedService}
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
};

export default ServicesGrid;
