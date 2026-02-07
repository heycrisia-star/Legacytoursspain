export interface Tour {
  id: string;
  name: string;
  duration: string;
  price?: string;
  route: string[];
  coordinates?: [number, number][];
  bookingUrl?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}