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
import { Clock, IndianRupee, Mail } from 'lucide-react';

interface ServiceModalProps {
  service: any;
  isOpen: boolean;
  onClose: () => void;
}

const ServiceModal = ({ service, isOpen, onClose }: ServiceModalProps) => {
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
            <div className="p-4 bg-astrology-teal/10 rounded-lg">
              <Icon className="w-10 h-10 text-astrology-teal" />
            </div>
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
              <h3 className="text-lg font-semibold mb-2">About This Service</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          )}

          {/* What's Included */}
          <div>
            <h3 className="text-lg font-semibold mb-3">What's Included</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-astrology-teal mt-1">✓</span>
                <span>Detailed analysis and consultation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-astrology-teal mt-1">✓</span>
                <span>Written report with insights and recommendations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-astrology-teal mt-1">✓</span>
                <span>Follow-up support via email</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-astrology-teal mt-1">✓</span>
                <span>Remedial measures and guidance</span>
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
              Book This Service
            </Button>
            <Button variant="outline" size="lg" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceModal;
