// Home page - main landing page
import { useEffect } from 'react';
import { initializeStorage } from '@/utils/localStorage';
import Hero from '@/components/Hero';
import MarqueeServices from '@/components/MarqueeServices';
import ServicesGrid from '@/components/ServicesGrid';
import Horoscopes from '@/components/Horoscopes';
import ZodiacSigns from '@/components/ZodiacSigns';
import UpdatesFeed from '@/components/UpdatesFeed';
import ContactForm from '@/components/ContactForm';

const Home = () => {
  useEffect(() => {
    // Initialize localStorage with sample data on first run
    initializeStorage();
  }, []);

  return (
    <main>
      <Hero />
      <MarqueeServices />
      <ServicesGrid />
      <div id="horoscope">
        <Horoscopes />
      </div>
      <div id="zodiac">
        <ZodiacSigns />
      </div>
      <UpdatesFeed />
      <ContactForm />
    </main>
  );
};

export default Home;
