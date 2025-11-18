// Grid of service cards with modal/expand functionality
import { useState, useEffect } from 'react';
import { getServices } from '@/utils/localStorage';
import { getIcon } from '@/utils/iconMap';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import ServiceModal from './ServiceModal';
import { Clock, IndianRupee } from 'lucide-react';

const ServicesGrid = () => {
  const [services, setServices] = useState<any[]>([]);
  const [selectedService, setSelectedService] = useState<any>(null);

  useEffect(() => {
    setServices(getServices());
  }, []);

  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive Vedic astrology services tailored to your unique needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = getIcon(service.icon);
            return (
              <Card
                key={service.id}
                className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-astrology-teal group animate-slide-up"
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
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="p-3 bg-astrology-teal/10 rounded-lg group-hover:bg-astrology-teal/20 transition-colors">
                      <Icon className="w-8 h-8 text-astrology-teal" />
                    </div>
                    {service.price && (
                      <div className="flex items-center gap-1 text-astrology-orange font-bold">
                        <IndianRupee className="w-4 h-4" />
                        <span>{service.price.replace('₹', '')}</span>
                      </div>
                    )}
                  </div>
                  <CardTitle className="text-xl group-hover:text-astrology-teal transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {service.tagline}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  {service.duration && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{service.duration}</span>
                    </div>
                  )}
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
