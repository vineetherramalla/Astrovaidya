// Modal component for service details
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Button } from './ui/button';
import { getIcon } from '@/utils/iconMap';
import { useTranslation } from 'react-i18next';
import { Clock} from 'lucide-react';
import type { Service } from '@/data/services';

interface ServiceModalProps {
  service: Service | null;
  isOpen: boolean;
  onClose: () => void;
}

const ServiceModal = ({ service, isOpen, onClose }: ServiceModalProps) => {
  const { t, i18n } = useTranslation();
  const isTeluguMode = i18n.language === 'te';
  
  if (!service) return null;

  const Icon = getIcon(service.icon);

  const handleBooking = () => {
    const message = encodeURIComponent(
      `Hello, I would like to book a consultation for "${service.title}" (₹${service.price} | ${service.duration}). Please let me know your availability. Thank you.`
    );
    window.open(`https://wa.me/919515615597?text=${message}`, '_blank');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto sm:max-w-lg md:max-w-2xl">
        
        <DialogHeader>
          <div className="flex items-start gap-4 mb-4 flex-col sm:flex-row">
            <div className="flex-1 w-full">
              <DialogTitle className="text-2xl md:text-3xl mb-2">
                {isTeluguMode ? (service.titleTe || service.title) : service.title}
              </DialogTitle>
              <DialogDescription className="text-base">
                {isTeluguMode ? (service.taglineTe || service.tagline) : service.tagline}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="p-0 bg-transparent rounded-lg">
              {service.image ? (
                <img src={service.image} alt={service.title} className="w-full max-w-md h-auto rounded-md object-cover mx-auto" />
              ) : (
                <div className="p-4 bg-astrology-teal/10 rounded-lg flex justify-center">
                  <Icon className="w-10 h-10 text-astrology-teal" />
                </div>
              )}
            </div>

        <div className="space-y-6">
          {/* Service Details */}
          <div className="flex flex-wrap gap-4 text-sm">
            {service.price && (
              <div className="flex items-center gap-2 px-4 py-2 bg-astrology-orange/10 rounded-lg">
                <span className="font-semibold text-astrology-orange">₹{service.price}</span>
              </div>
            )}
            {service.duration && (
              <div className="flex items-center gap-2 px-4 py-2 bg-astrology-teal/10 rounded-lg">
                <Clock className="w-4 h-4 text-astrology-teal" />
                <span className="font-semibold text-astrology-teal">{service.duration}</span>
              </div>
            )}
          </div>

          {/* Description */}
          {service.description && (
            <div>
              <h3 className="text-lg font-semibold mb-2">{t('services.aboutService')}</h3>
              <p className="text-muted-foreground leading-relaxed">{isTeluguMode ? (service.descriptionTe || service.description) : service.description}</p>
            </div>
          )}

          {/* What's Included */}
          <div>
            <h3 className="text-lg font-semibold mb-3">{t('services.whatsIncluded')}</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-astrology-teal mt-1">✓</span>
                <span>{t('services.included1')}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-astrology-teal mt-1">✓</span>
                <span>{t('services.included2')}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-astrology-teal mt-1">✓</span>
                <span>{t('services.included3')}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-astrology-teal mt-1">✓</span>
                <span>{t('services.included4')}</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              className="bg-astrology-teal hover:bg-astrology-deep-teal text-white flex-1"
              size="lg"
              onClick={handleBooking}
            >     
              {t('services.bookService')}
            </Button>
            <Button variant="outline" className = "bg-astrology-orange text-white hover:bg-astrology-orange/90"  size="lg" onClick={onClose}>
              {t('services.close')}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceModal;
