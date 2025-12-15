export interface Tour {
  id: string;
  name: string;
  duration: string;
  price: string;
  route: string[];
  bookingUrl?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}