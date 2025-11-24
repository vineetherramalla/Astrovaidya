// Individual service detail page (route: /services/:slug)
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getServiceBySlug } from '@/data/services';
import type { Service } from '@/data/services';
import { getIcon } from '@/utils/iconMap';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, IndianRupee, Mail, ArrowLeft } from 'lucide-react';

const ServicePage = () => {
  const { t } = useTranslation();
  const { slug } = useParams();
  const [service, setService] = useState<Service | null>(null);

  useEffect(() => {
    if (slug) {
      const found = getServiceBySlug(slug);
      setService(found || null);
    }
  }, [slug]);

  if (!service) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">{t('services.notFound')}</h1>
          <Button asChild>
            <Link to="/">{t('services.returnHome')}</Link>
          </Button>
        </div>
      </main>
    );
  }

  const Icon = getIcon(service.icon);

  const handleBooking = () => {
    const subject = encodeURIComponent(`Consultation Request: ${service.title}`);
    const body = encodeURIComponent(
      `Hello,\n\nI would like to book a consultation for "${service.title}".\n\nPlease let me know your availability.\n\nThank you.`
    );
    window.location.href = `mailto:hello@cosmicinsights.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="min-h-screen py-24 md:py-32">
      <div className="container mx-auto px-4 max-w-4xl">
        <Button asChild variant="ghost" className="mb-8">
          <Link to="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t('services.backHome')}
          </Link>
        </Button>

        <div className="animate-fade-in">
          <div className="flex items-start gap-6 mb-8">
            <div className="p-6 bg-astrology-teal/10 rounded-lg">
              <Icon className="w-16 h-16 text-astrology-teal" />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl md:text-5xl font-bold mb-3">{service.title}</h1>
              <p className="text-xl text-muted-foreground">{service.tagline}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mb-8">
            {service.price && (
              <div className="flex items-center gap-2 px-6 py-3 bg-astrology-orange/10 rounded-lg">
                <IndianRupee className="w-5 h-5 text-astrology-orange" />
                <span className="font-bold text-lg text-astrology-orange">{service.price}</span>
              </div>
            )}
            {service.duration && (
              <div className="flex items-center gap-2 px-6 py-3 bg-astrology-teal/10 rounded-lg">
                <Clock className="w-5 h-5 text-astrology-teal" />
                <span className="font-bold text-lg text-astrology-teal">{service.duration}</span>
              </div>
            )}
          </div>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4">{t('services.aboutService')}</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {service.description || service.tagline}
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4">{t('services.whatsIncluded')}</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-astrology-teal text-xl mt-1">✓</span>
                  <span className="text-lg">{t('services.included1')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-astrology-teal text-xl mt-1">✓</span>
                  <span className="text-lg">{t('services.included2')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-astrology-teal text-xl mt-1">✓</span>
                  <span className="text-lg">{t('services.included3')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-astrology-teal text-xl mt-1">✓</span>
                  <span className="text-lg">{t('services.included4')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-astrology-teal text-xl mt-1">✓</span>
                  <span className="text-lg">{t('services.included5')}</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              className="bg-astrology-teal hover:bg-astrology-deep-teal text-white flex-1"
              size="lg"
              onClick={handleBooking}
            >
              <Mail className="w-5 h-5 mr-2" />
              {t('services.bookService')}
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/#contact">{t('services.contactUs')}</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ServicePage;
