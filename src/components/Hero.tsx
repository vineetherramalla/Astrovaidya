// Hero section with CTA buttons
import { Button } from './ui/button';
import { Sparkles, ChevronRight } from 'lucide-react';
import heroImage from '@/assets/hero-cosmic.jpg';

const Hero = () => {
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
              Vedic Astrology Services
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Illuminate Your Path with
            <span className="block text-astrology-orange">Cosmic Wisdom</span>
          </h1>
          
          <p className="text-lg md:text-xl text-astrology-sand/90 mb-8 leading-relaxed">
            Discover personalized insights through ancient Vedic astrology. Get expert guidance 
            for life's most important decisions with accurate birth chart readings and consultations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-astrology-orange hover:bg-astrology-orange/90 text-white font-semibold group"
            >
              <a href="mailto:hello@cosmicinsights.com">
                Book Consultation
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-astrology-sand text-astrology-sand hover:bg-astrology-sand hover:text-astrology-brown font-semibold"
            >
              <a href="#services">
                Explore Services
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap gap-8 text-astrology-sand/80">
            <div>
              <div className="text-2xl font-bold text-white">15+</div>
              <div className="text-sm">Years Experience</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">5000+</div>
              <div className="text-sm">Happy Clients</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">98%</div>
              <div className="text-sm">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
