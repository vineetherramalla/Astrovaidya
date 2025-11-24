// About section component
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from './ui/card';
import { Award, Users, Star, TrendingUp } from 'lucide-react';

const About = () => {
  const { t } = useTranslation();

  const stats = [
    { icon: Award, value: '15+', label: t('hero.yearsExperience') },
    { icon: Users, value: '5000+', label: t('hero.happyClients') },
    { icon: Star, value: '98%', label: t('hero.satisfactionRate') },
    { icon: TrendingUp, value: '100+', label: t('about.servicesDelivered') },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                {t('about.title')}
              </h2>
              <div className="w-20 h-1 bg-astrology-orange mb-6"></div>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('about.description1')}
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('about.description2')}
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index} className="border-2 border-astrology-teal/20">
                    <CardContent className="pt-6 text-center">
                      <Icon className="w-8 h-8 text-astrology-teal mx-auto mb-2" />
                      <div className="text-2xl font-bold text-astrology-teal">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Right side - Astrologer image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/Astrologers.jpg" 
                alt="Professional Astrologer"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-astrology-brown/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">{t('about.expertTitle')}</h3>
                <p className="text-astrology-sand">{t('about.expertSubtitle')}</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-astrology-orange rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-astrology-teal rounded-full opacity-20 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;