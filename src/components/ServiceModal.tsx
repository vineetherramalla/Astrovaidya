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
import { Clock, IndianRupee, Mail } from 'lucide-react';

interface ServiceModalProps {
  service: any;
  isOpen: boolean;
  onClose: () => void;
}

const ServiceModal = ({ service, isOpen, onClose }: ServiceModalProps) => {
  const { t } = useTranslation();
  
  if (!service) return null;

  const Icon = getIcon(service.icon);

  const handleBooking = () => {
    const subject = encodeURIComponent(`Consultation Request: ${service.title}`);
    const body = encodeURIComponent(
      `Hello,\n\nI would like to book a consultation for "${service.title}".\n\nPlease let me know your availability.\n\nThank you.`
    );
    window.location.href = `mailto:hello@cosmicinsights.com?subject=${subject}&body=${body}`;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        
        <DialogHeader>
          <div className="flex items-start gap-4 mb-4">
            <div className="flex-1">
              <DialogTitle className="text-2xl md:text-3xl mb-2">
                {service.title}
              </DialogTitle>
              <DialogDescription className="text-base">
                {service.tagline}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="p-0 bg-transparent rounded-lg">
              {service.image ? (
                <img src={service.image} alt={service.title} className="w-86 h-66 rounded-md object-cover" />
              ) : (
                <div className="p-4 bg-astrology-teal/10 rounded-lg">
                  <Icon className="w-10 h-10 text-astrology-teal" />
                </div>
              )}
            </div>

        <div className="space-y-6">
          {/* Service Details */}
          <div className="flex flex-wrap gap-4 text-sm">
            {service.price && (
              <div className="flex items-center gap-2 px-4 py-2 bg-astrology-orange/10 rounded-lg">
                <IndianRupee className="w-4 h-4 text-astrology-orange" />
                <span className="font-semibold text-astrology-orange">{service.price}</span>
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
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
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
              <Mail className="w-4 h-4 mr-2" />
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
