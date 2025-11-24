// Home page - main landing page
import { useEffect } from 'react';
import { initializeStorage } from '@/utils/localStorage';
import Hero from '@/components/Hero';
import About from '@/components/About';
import ServicesGrid from '@/components/ServicesGrid';
import Horoscopes from '@/components/Horoscopes';
import ZodiacSigns from '@/components/ZodiacSigns';
import UpdatesFeed from '@/components/UpdatesFeed';
import ContactForm from '@/components/ContactForm';
import FAQs from '@/components/FAQs';

const Home = () => {
  useEffect(() => {
    // Initialize localStorage with sample data on first run
    initializeStorage();
  }, []);

  return (
    <main>
      <Hero />
      <About />
      <ServicesGrid />
      <div id="horoscope">
        <Horoscopes />
      </div>
      <div id="zodiac">
        <ZodiacSigns />
      </div>
      <UpdatesFeed />
      <ContactForm />
      <FAQs />
    </main>
  );
};

export default Home;
