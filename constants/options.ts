export type SelectTravelList = {
  id: number;
  title: string;
  desc: string;
  icon: string;
  people: string;
};

// create a new type based on SelectTravelList but don't have propertie people.

export type SelectBudgetOptions = Omit<SelectTravelList, "people">;

export const selectTravelesList: SelectTravelList[] = [
  {
    id: 1,
    title: "Just Me",
    desc: "A sole traveles in exploration",
    icon: "✈️",
    people: "1 People",
  },
  {
    id: 2,
    title: "A Couple",
    desc: "Two traveles in tandem",
    icon: "🥂",
    people: "2 People",
  },
  {
    id: 3,
    title: "Family",
    desc: "A group of fun loving adv",
    icon: "🏡",
    people: "3 to 5 People",
  },
  {
    id: 4,
    title: "Friends",
    desc: "A bunch of thrill-seekes",
    icon: "🚢",
    people: "5 to 10 People",
  },
];

export const selectBudgetOptions = [
  {
    id: 1,
    title: "Cheap",
    desc: "Stay conscious of costs",
    icon: "💵",
  },
  {
    id: 2,
    title: "Moderate",
    desc: "Keep cost on the average side",
    icon: "💰",
  },
  {
    id: 3,
    title: "Luxury",
    desc: "Dont worry about the cost",
    icon: "💸",
  },
];

export const AI_PROMPT =
  "Generate Travel Plan for Location: {location},for {totalDays} Days and {totalNight} Night for {traveler} with a {budget} budget with a Flight details , Flight Price with Booking url,Hotels options list with HotelName,Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and Places to visit nearby with placeName, Place Details, Place Image Url,Geo Coordinates, ticket Pricing, Time travel each of the location for {totalDays} days and {totalNight} night with each day plan with best time to visit in JSON format.";
