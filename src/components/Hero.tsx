// Hero section with CTA buttons
import { Button } from './ui/button';
import { Sparkles, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import heroImage from '@/assets/hero-cosmic.jpg';
import MarqueeServices from './MarqueeServices';

const Hero = () => {
  const { t } = useTranslation();
  
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
      
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-astrology-brown/95 via-astrology-brown/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl animate-fade-in">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-astrology-orange" />
            <span className="text-astrology-sand text-sm font-medium uppercase tracking-wider">
              {t('hero.subtitle')}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {t('hero.title')}
            <span className="block text-astrology-orange">{t('hero.titleHighlight')}</span>
          </h1>
          
          <p className="text-lg md:text-xl text-astrology-sand/90 mb-8 leading-relaxed">
            {t('hero.description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-astrology-orange hover:bg-astrology-orange/90 text-white font-semibold group"
            >
              <a href="https://wa.me/919515615597?text=Hello%2C%20I%20would%20like%20to%20book%20a%20consultation" target="_blank" rel="noopener noreferrer">
                {t('hero.cta')}
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-astrology-sand bg-astrology-sand text-astrology-brown hover:bg-astrology-sand/80 hover:text-astrology-brown font-semibold"
            >
              <a href="#services">
                {t('hero.explore')}
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap gap-8 text-astrology-sand/80">
            <div>
              <div className="text-2xl font-bold text-white">15+</div>
              <div className="text-sm">{t('hero.yearsExperience')}</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">5000+</div>
              <div className="text-sm">{t('hero.happyClients')}</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">98%</div>
              <div className="text-sm">{t('hero.satisfactionRate')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
