export interface FlightDetails {
  airline: string;
  arrivalCity: string;
  arrivalDate: string;
  arrivalTime: string;
  departureCity: string;
  departureDate: string;
  departureTime: string;
  flightNumber: string;
}

export interface FlightPrice {
  amount: number;
  currency: string;
}

export interface Flight {
  bookingUrl: string;
  details: FlightDetails;
  price: FlightPrice;
}

interface GeoCoordinates {
  latitude: number;
  longitude: number;
}

interface Price {
  amount: number;
  currency: string;
}

export interface Hotel {
  address: string;
  description: string;
  geoCoordinates: GeoCoordinates;
  imageUrl: string;
  name: string;
  price: Price;
  rating: number;
}

export interface Hotels extends Array<Hotel> {}
