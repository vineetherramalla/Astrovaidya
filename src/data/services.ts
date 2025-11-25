// Services data stored in code
// This data is read-only and should be updated directly in this file

export interface Service {
  id: number;
  title: string;
  slug: string;
  tagline: string;
  icon: string;
  image: string;
  description: string;
  price: string;
  duration: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: 'Personal Horoscope',
    slug: 'personal-horoscope',
    tagline: 'Detailed birth chart reading',
    icon: 'Star',
    image: '/PersonalHoroscope.jpg',
    description: 'Get comprehensive insights into your life through detailed Vedic birth chart analysis. Understand your strengths, challenges, and destiny path.',
    price: '₹2,500',
    duration: '60 min',
  },
  {
    id: 2,
    title: 'Marriage Matching',
    slug: 'marriage-matching',
    tagline: 'Kundali matching and advice',
    icon: 'Heart',
    image: '/MarriageMatching.jpg',
    description: 'Traditional Kundali Milan service for marriage compatibility analysis. Comprehensive matching of Guna, Mangal Dosha, and planetary positions.',
    price: '₹3,500',
    duration: '90 min',
  },
  {
    id: 3,
    title: 'Career Guidance',
    slug: 'career-guidance',
    tagline: 'Vedic astrological insights',
    icon: 'Briefcase',
    image: 'Career.jpg',
    description: 'Discover your ideal career path based on planetary positions and dashas. Get timing for job changes and business ventures.',
    price: '₹2,000',
    duration: '45 min',
  },
  {
    id: 4,
    title: 'Vastu Consultation',
    slug: 'vastu-consultation',
    tagline: 'Harmonize your living space',
    icon: 'Home',
    image: 'VastuConsultation.jpg',
    description: 'Expert Vastu Shastra consultation for homes and offices. Balance energies and create prosperity through proper spatial arrangement.',
    price: '₹4,000',
    duration: '90 min',
  },
  {
    id: 5,
    title: 'Gemstone Recommendation',
    slug: 'gemstone-recommendation',
    tagline: 'Strengthen planetary influence',
    icon: 'Gem',
    image: 'Gemstone.jpg',
    description: 'Personalized gemstone recommendations based on your birth chart. Enhance positive energies and mitigate negative influences.',
    price: '₹1,500',
    duration: '30 min',
  },
  {
    id: 6,
    title: 'Yearly Prediction',
    slug: 'yearly-prediction',
    tagline: 'Annual forecast and guidance',
    icon: 'Calendar',
    image: 'YearlyPrediction.jpg',
    description: 'Comprehensive yearly horoscope with monthly predictions. Plan your year with insights into health, wealth, and relationships.',
    price: '₹5,000',
    duration: '120 min',
  },
];

// Helper function to get service by slug
export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(s => s.slug === slug);
};

// Helper function to get service by id
export const getServiceById = (id: number): Service | undefined => {
  return services.find(s => s.id === id);
};

// Helper function to get all services
export const getAllServices = (): Service[] => {
  return services;
};