// Contact form with mailto fallback
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Mail, Phone, MapPin, Send, Copy, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct mailto link with form data
    const subject = encodeURIComponent(`Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    );
    
    const mailtoLink = `mailto:hello@cosmicinsights.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;

    toast({
      title: t('contact.openingEmail'),
      description: t('contact.openingEmailDesc'),
    });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hello@cosmicinsights.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    
    toast({
      title: t('contact.emailCopied'),
      description: t('contact.emailCopiedDesc'),
    });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-2 border-astrology-teal/20">
              <CardHeader>
                <CardTitle>{t('contact.contactInfo')}</CardTitle>
                <CardDescription>
                  {t('contact.contactSubtitle')}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-astrology-teal mt-1" />
                  <div>
                    <p className="font-medium mb-1">{t('contact.emailLabel')}</p>
                    <div className="flex items-center gap-2">
                      <a
                        href="mailto:hello@cosmicinsights.com"
                        className="text-muted-foreground hover:text-astrology-teal transition-colors"
                      >
                        hello@cosmicinsights.com
                      </a>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleCopyEmail}
                        className="h-8 w-8 p-0"
                      >
                        {copied ? (
                          <Check className="w-4 h-4 text-green-600" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-astrology-teal mt-1" />
                  <div>
                    <p className="font-medium mb-1">{t('contact.phoneLabel')}</p>
                    <a
                      href="tel:+919876543210"
                      className="text-muted-foreground hover:text-astrology-teal transition-colors"
                    >
                      +91-9876543210
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-astrology-teal mt-1" />
                  <div>
                    <p className="font-medium mb-1">{t('contact.locationLabel')}</p>
                    <p className="text-muted-foreground">
                      {t('contact.locationValue')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle>{t('contact.location')}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d522.1176798028033!2d78.3541044842078!3d17.494336836733353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9398a74e6225%3A0x9ab33bfbaff07f32!2sSria%20Infotech%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1763453965029!5m2!1sen!2sin" 
                  width="100%" 
                  height="300" 
                  style={{border:0}} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                />
              </CardContent>
            </Card>

            <Card className="bg-astrology-teal text-white">
              <CardContent className="pt-6">
                <p className="text-sm text-astrology-sand/90">
                  <strong>{t('contact.note')}</strong> {t('contact.noteText')}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>{t('contact.sendMessage')}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="text-sm font-medium mb-2 block">
                    {t('contact.name')}
                  </label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t('contact.namePlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-sm font-medium mb-2 block">
                    {t('contact.email')}
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={t('contact.emailPlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="text-sm font-medium mb-2 block">
                    {t('contact.phone')}
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder={t('contact.phonePlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-medium mb-2 block">
                    {t('contact.message')}
                  </label>
                  <Textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t('contact.messagePlaceholder')}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-astrology-teal hover:bg-astrology-deep-teal text-white"
                  size="lg"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {t('contact.send')}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
