// Services data stored in code
// This data is read-only and should be updated directly in this file

export interface Service {
  id: number;
  title: string;
  titleTe?: string;
  slug: string;
  tagline: string;
  taglineTe?: string;
  icon: string;
  image: string;
  description: string;
  descriptionTe?: string;
  price: string;
  duration: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: 'Personal Horoscope',
    titleTe: 'వ్యక్తిగత రాశిఫలం',
    slug: 'personal-horoscope',
    tagline: 'Detailed birth chart reading',
    taglineTe: 'వివరణాత్మక జననం చార్ట్ విశ్లేషణ',
    icon: 'Star',
    image: '/PersonalHoroscope.jpg',
    description: 'Get comprehensive insights into your life through detailed Vedic birth chart analysis. Understand your strengths, challenges, and destiny path.',
    descriptionTe: 'వివరణాత్మక వైదిక జననం చార్ట్ విశ్లేషణ ద్వారా మీ జీవితం గురించి సమగ్ర అవగాహన పొందండి.',
    price: '2500',
    duration: '60 min',
  },
  {
    id: 2,
    title: 'Marriage Matching',
    titleTe: 'వివాహపు మ్యాచింగ్',
    slug: 'marriage-matching',
    tagline: 'Kundali matching and advice',
    taglineTe: 'కుందలీ మ్యాచ్ మరియు సలహా',
    icon: 'Heart',
    image: '/MarriageMatching.jpg',
    description: 'Traditional Kundali Milan service for marriage compatibility analysis. Comprehensive matching of Guna, Mangal Dosha, and planetary positions.',
    descriptionTe: 'వివాహ అనుకూలత విశ్లేషణ కోసం సాంప్రదాయ కుండలి మిళన్ సేవ.',
    price: '3500',
    duration: '90 min',
  },
  {
    id: 3,
    title: 'Career Guidance',
    titleTe: 'వృత్తి మార్గదర్శకత్వం',
    slug: 'career-guidance',
    tagline: 'Vedic astrological insights',
    taglineTe: 'వైదిక జ్యోతిష్య సూచనలు',
    icon: 'Briefcase',
    image: 'Career.jpg',
    description: 'Discover your ideal career path based on planetary positions and dashas. Get timing for job changes and business ventures.',
    descriptionTe: 'గ్రహస్థానాలు మరియు దశల ఆధారంగా మీకు సరిపోయే వృత్తి మార్గాన్ని కనుగొనండి.',
    price: '2000',
    duration: '45 min',
  },
  {
    id: 4,
    title: 'Vastu Consultation',
    titleTe: 'వాస్తు సంప్రదింపు',
    slug: 'vastu-consultation',
    tagline: 'Harmonize your living space',
    taglineTe: 'మీ నివాస స్థలాన్ని సంతులనం చేయండి',
    icon: 'Home',
    image: 'VastuConsultation.jpg',
    description: 'Expert Vastu Shastra consultation for homes and offices. Balance energies and create prosperity through proper spatial arrangement.',
    descriptionTe: 'ఇంట్స్ మరియు కార్యాలయాల కోసం నిపుణ వాస్తు శాస్త్ర సంప్రదింపు.',
    price: '4000',
    duration: '90 min',
  },
  {
    id: 5,
    title: 'Gemstone Recommendation',
    titleTe: 'రత్న సూచనలు',
    slug: 'gemstone-recommendation',
    tagline: 'Strengthen planetary influence',
    taglineTe: 'గ్రహ ప్రభావాన్ని బలపర్చండి',
    icon: 'Gem',
    image: 'Gemstone.jpg',
    description: 'Personalized gemstone recommendations based on your birth chart. Enhance positive energies and mitigate negative influences.',
    descriptionTe: 'మీ జన్మ చార్ట్ ఆధారంగా వ్యక్తిగత రత్న సూచనలు.',
    price: '1500',
    duration: '30 min',
  },
  {
    id: 6,
    title: 'Yearly Prediction',
    titleTe: 'సూర్య వార్షిక భవిష్యవాణి',
    slug: 'yearly-prediction',
    tagline: 'Annual forecast and guidance',
    taglineTe: ' వార్షిక ఫోర్కాస్ట్ మరియు మార్గదర్శకత్వం',
    icon: 'Calendar',
    image: 'YearlyPrediction.jpg',
    description: 'Comprehensive yearly horoscope with monthly predictions. Plan your year with insights into health, wealth, and relationships.',
    descriptionTe: 'నెలవారీ భవిష్యవాణులతో సమగ్ర వార్షిక రాశిఫలం.',
    price: '5000',
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