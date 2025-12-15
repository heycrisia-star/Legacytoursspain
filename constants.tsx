import { Tour, FaqItem } from './types';
import { Facebook, Instagram, MapPin } from 'lucide-react';

// Main Booking (Barcelona) - FareHarbor
export const BOOKING_URL = "https://fareharbor.com/embeds/book/legacytoursspain/?full-items=yes&flow=1528104";
// Madrid Cross-sell URL
export const MADRID_BOOKING_URL = "https://wa.me/34673017472";

export const GOOGLE_MAPS_URL = "https://goo.gl/maps/BarcelonaPlaceholder";
export const GOOGLE_REVIEWS_URL = "https://g.page/r/CS-a0zgSFb4GEBM/review";

export const SOCIAL_LINKS = [
  { name: 'Instagram', url: 'https://www.instagram.com/legacytoursspain?igsh=MWVsNzBjaWpiMmpveA%3D%3D&utm_source=qr', icon: 'instagram', active: true },
  { name: 'TikTok', url: 'https://www.tiktok.com/@legacytoursspain', icon: 'tiktok', active: true },
  { name: 'Facebook', url: '#', icon: 'facebook', active: true },
  { name: 'Digital Guide', url: '#', icon: 'notebook', active: true },
  { name: 'TripAdvisor', url: '#', icon: 'tripadvisor', active: true },
  { name: 'GetYourGuide', url: '#', icon: 'getyourguide', active: true },
];

export const TOURS: Tour[] = [
  {
    id: 'essential',
    name: 'Essential Barcelona',
    duration: '1h',
    price: '95€',
    route: [
      'Plaza Catalunya',
      'Arc de Triomf',
      'Sagrada Familia',
      'Passeig de Gràcia (Casa Batlló)',
      'Passeig de Gràcia (Casa Milà)'
    ],
    bookingUrl: "https://fareharbor.com/embeds/book/legacytoursspain/items/688410/?full-items=yes&flow=1528104"
  },
  {
    id: 'city-sea',
    name: 'City & Sea Barcelona',
    duration: '1h30',
    price: '135€',
    route: [
      'Plaza Catalunya',
      'Arc de Triomf',
      'Sagrada Familia',
      'Passeig de Gràcia (Casa Batlló)',
      'Passeig de Gràcia (Casa Milà)',
      'Las Ramblas',
      'Barrio Gótico',
      'El Born',
      'Parc de la Ciutadella',
      'Port Vell',
      'Barceloneta'
    ],
    bookingUrl: "https://fareharbor.com/embeds/book/legacytoursspain/items/688412/?full-items=yes&flow=1528104"
  },
  {
    id: 'complete',
    name: 'Complete Barcelona',
    duration: '2h',
    price: '180€',
    route: [
      'Plaza Catalunya',
      'Arc de Triomf',
      'Sagrada Familia',
      'Passeig de Gràcia (Casa Batlló)',
      'Passeig de Gràcia (Casa Milà)',
      'Las Ramblas',
      'Barrio Gótico',
      'El Born',
      'Parc de la Ciutadella',
      'Port Vell',
      'Barceloneta',
      'Puerto Olímpico',
      'Montjuïc (zona olímpica)',
      'Montjuïc (miradores)',
      'Plaza España',
      'MNAC'
    ],
    bookingUrl: "https://fareharbor.com/embeds/book/legacytoursspain/items/688414/?full-items=yes&flow=1528104"
  },
  {
    id: 'grand',
    name: 'Grand Barcelona',
    duration: '3h',
    price: '250€',
    route: [
      'Plaza Catalunya',
      'Arc de Triomf',
      'Sagrada Familia',
      'Passeig de Gràcia (Casa Batlló)',
      'Passeig de Gràcia (Casa Milà)',
      'Las Ramblas',
      'Barrio Gótico',
      'Mercado de La Boqueria',
      'El Born',
      'Parc de la Ciutadella',
      'Port Vell',
      'Barceloneta',
      'Puerto Olímpico',
      'Montjuïc (Miramar)',
      'Montjuïc (zona olímpica)',
      'MNAC',
      'Plaza España',
      'Fuente Mágica'
    ],
    bookingUrl: "https://fareharbor.com/embeds/book/legacytoursspain/items/688415/?full-items=yes&flow=1528104"
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "How many passengers can fit in one vehicle?",
    answer: "Each vehicle has space for 4 passengers plus the driver."
  },
  {
    question: "Do you provide child safety seats?",
    answer: "We provide a certified booster seat for children taller than 1.2 m, in accordance with current regulations."
  },
  {
    question: "What happens if it rains?",
    answer: "Our vehicles have rain covers. In case of heavy rain or bad weather, we reschedule or offer a refund."
  },
  {
    question: "Are the tours private?",
    answer: "Yes. All our tours are 100% private, only for you and your group."
  },
  {
    question: "Where does the tour start and end?",
    answer: "Pick-up and drop-off are at a central location in Barcelona (near Gothic Quarter). At no extra cost, we can also pick you up at your hotel if it is in the city center."
  },
  {
    question: "How can I pay?",
    answer: "You can pay in cash directly to the driver, by credit or debit card, or through online booking via WhatsApp."
  },
  {
    question: "What is the cancellation policy?",
    answer: "Cancellations are free up to 24 hours before the tour. If canceled less than 24 hours in advance, a 30% penalty applies."
  },
  {
    question: "Can I customize the route?",
    answer: "Yes. With the Flexible Tour, you can fully personalize your itinerary with our team."
  },
  {
    question: "How do we communicate if I don't speak Spanish?",
    answer: "Our vehicles are equipped with an AI translator in over 40 languages, with only 0.2 seconds of latency."
  },
  {
    question: "What clothing or footwear is recommended?",
    answer: "We recommend wearing comfortable clothes and closed shoes to fully enjoy the tour."
  }
];

export const REVIEWS = [
  {
    id: 1,
    author: "Sarah J.",
    location: "United Kingdom",
    text: "The most elegant way to see Barcelona. The car is silent and beautiful, and the driver was exceptional.",
    source: "TripAdvisor"
  },
  {
    id: 2,
    author: "Marc & Lisa",
    location: "Germany",
    text: "We loved the privacy. No crowds, just us and the city. The translation system worked perfectly.",
    source: "GetYourGuide"
  },
  {
    id: 3,
    author: "James T.",
    location: "USA",
    text: "Worth every penny. The 'Grand Tour' covered everything we wanted to see without the walking.",
    source: "Google Reviews"
  }
];