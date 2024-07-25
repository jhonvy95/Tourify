const { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } = require("@google/generative-ai");

const apiKey = process.env.EXPO_PUBLIC_GOOGLE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,
  // safetySettings: Adjust safety settings
  // See https://ai.google.dev/gemini-api/docs/safety-settings
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate Travel Plan for Location: Las Vegas, NV, USA,for 3 Days and 2 Night for A Couple with a Luxury budget with a Flight details , Flight Price with Booking url,Hotels options list with HotelName,Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and Places to visit nearby with placeName, Place Details, Place Image Url,Geo Coordinates, ticket Pricing, Time travel each of the location for 3 days and 2 night with each day plan with best time to visit in JSON format.",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "flight": {\n    "details": {\n      "airline": "Southwest Airlines",\n      "departureCity": "Los Angeles, CA",\n      "arrivalCity": "Las Vegas, NV",\n      "departureDate": "2023-10-27",\n      "arrivalDate": "2023-10-27",\n      "departureTime": "10:00 AM",\n      "arrivalTime": "11:00 AM",\n      "flightNumber": "WN2345"\n    },\n    "price": {\n      "amount": 150,\n      "currency": "USD"\n    },\n    "bookingUrl": "https://www.southwest.com/flights"\n  },\n  "hotel": [\n    {\n      "name": "The Venetian Resort Las Vegas",\n      "address": "3355 Las Vegas Blvd S, Las Vegas, NV 89109",\n      "price": {\n        "amount": 350,\n        "currency": "USD"\n      },\n      "imageUrl": "https://www.venetian.com/content/dam/venetian/images/hero-images/venetian-hero-mobile.jpg",\n      "geoCoordinates": {\n        "latitude": 36.1135,\n        "longitude": -115.1728\n      },\n      "rating": 4.5,\n      "description": "A luxurious resort with an Italian theme, offering world-class dining, shopping, and entertainment."\n    },\n    {\n      "name": "The Bellagio",\n      "address": "3600 Las Vegas Blvd S, Las Vegas, NV 89109",\n      "price": {\n        "amount": 400,\n        "currency": "USD"\n      },\n      "imageUrl": "https://www.bellagio.com/content/dam/bellagio/images/hero-images/bellagio-hero-mobile.jpg",\n      "geoCoordinates": {\n        "latitude": 36.1143,\n        "longitude": -115.1735\n      },\n      "rating": 4.7,\n      "description": "A renowned luxury resort known for its elegant fountains, botanical gardens, and fine dining."\n    },\n    {\n      "name": "The Wynn Las Vegas",\n      "address": "3131 Las Vegas Blvd S, Las Vegas, NV 89109",\n      "price": {\n        "amount": 500,\n        "currency": "USD"\n      },\n      "imageUrl": "https://www.wynnlasvegas.com/content/dam/wynn/images/hero-images/wynn-hero-mobile.jpg",\n      "geoCoordinates": {\n        "latitude": 36.1224,\n        "longitude": -115.1728\n      },\n      "rating": 4.8,\n      "description": "A luxurious resort with a focus on high-end shopping, dining, and entertainment."\n    }\n  ],\n  "itinerary": {\n    "day1": {\n      "time": "12:00 PM",\n      "activity": "Check-in at the hotel",\n      "location": {\n        "name": "The Venetian Resort Las Vegas",\n        "details": "Enjoy a luxurious stay at one of Las Vegas\'s most iconic resorts.",\n        "imageUrl": "https://www.venetian.com/content/dam/venetian/images/hero-images/venetian-hero-mobile.jpg",\n        "geoCoordinates": {\n          "latitude": 36.1135,\n          "longitude": -115.1728\n        }\n      }\n    },\n    "day1": {\n      "time": "02:00 PM",\n      "activity": "Lunch at Grand Lux Cafe",\n      "location": {\n        "name": "Grand Lux Cafe",\n        "details": "Enjoy a delicious meal at a renowned restaurant within the Venetian.",\n        "imageUrl": "https://www.grandluxcafe.com/content/dam/glc/images/hero-images/grand-lux-cafe-hero-mobile.jpg",\n        "geoCoordinates": {\n          "latitude": 36.1135,\n          "longitude": -115.1728\n        }\n      }\n    },\n    "day1": {\n      "time": "04:00 PM",\n      "activity": "Explore the Grand Canal Shoppes",\n      "location": {\n        "name": "Grand Canal Shoppes",\n        "details": "Stroll through this luxurious shopping mall, featuring designer boutiques and upscale stores.",\n        "imageUrl": "https://www.venetian.com/content/dam/venetian/images/hero-images/grand-canal-shoppes-hero-mobile.jpg",\n        "geoCoordinates": {\n          "latitude": 36.1135,\n          "longitude": -115.1728\n        }\n      }\n    },\n    "day1": {\n      "time": "07:00 PM",\n      "activity": "Dinner at Wolfgang Puck\'s Spago",\n      "location": {\n        "name": "Wolfgang Puck\'s Spago",\n        "details": "Indulge in a fine dining experience at this award-winning restaurant.",\n        "imageUrl": "https://www.wolfgangpuck.com/content/dam/wolfgangpuck/images/hero-images/spago-hero-mobile.jpg",\n        "geoCoordinates": {\n          "latitude": 36.1135,\n          "longitude": -115.1728\n        }\n      }\n    },\n    "day1": {\n      "time": "09:00 PM",\n      "activity": "Enjoy a show at the Venetian Theatre",\n      "location": {\n        "name": "Venetian Theatre",\n        "details": "Catch a world-class performance, such as a Broadway show or a concert.",\n        "imageUrl": "https://www.venetian.com/content/dam/venetian/images/hero-images/venetian-theatre-hero-mobile.jpg",\n        "geoCoordinates": {\n          "latitude": 36.1135,\n          "longitude": -115.1728\n        }\n      }\n    },\n    "day2": {\n      "time": "09:00 AM",\n      "activity": "Breakfast at The Buffet at Wynn",\n      "location": {\n        "name": "The Buffet at Wynn",\n        "details": "Enjoy a lavish breakfast buffet at this award-winning restaurant.",\n        "imageUrl": "https://www.wynnlasvegas.com/content/dam/wynn/images/hero-images/wynn-buffet-hero-mobile.jpg",\n        "geoCoordinates": {\n          "latitude": 36.1224,\n          "longitude": -115.1728\n        }\n      }\n    },\n    "day2": {\n      "time": "11:00 AM",\n      "activity": "Visit the Bellagio Conservatory & Botanical Garden",\n      "location": {\n        "name": "Bellagio Conservatory & Botanical Garden",\n        "details": "Admire stunning floral displays and themed gardens.",\n        "imageUrl": "https://www.bellagio.com/content/dam/bellagio/images/hero-images/conservatory-hero-mobile.jpg",\n        "geoCoordinates": {\n          "latitude": 36.1143,\n          "longitude": -115.1735\n        }\n      }\n    },\n    "day2": {\n      "time": "01:00 PM",\n      "activity": "Lunch at The Cheesecake Factory",\n      "location": {\n        "name": "The Cheesecake Factory",\n        "details": "Enjoy a casual lunch at this popular restaurant.",\n        "imageUrl": "https://www.thecheesecakefactory.com/content/dam/tcf/images/hero-images/the-cheesecake-factory-hero-mobile.jpg",\n        "geoCoordinates": {\n          "latitude": 36.1143,\n          "longitude": -115.1735\n        }\n      }\n    },\n    "day2": {\n      "time": "03:00 PM",\n      "activity": "Explore the High Roller Observation Wheel",\n      "location": {\n        "name": "High Roller Observation Wheel",\n        "details": "Experience panoramic views of the Las Vegas Strip from this giant Ferris wheel.",\n        "imageUrl": "https://www.caesars.com/content/dam/caesars/images/hero-images/high-roller-hero-mobile.jpg",\n        "geoCoordinates": {\n          "latitude": 36.1166,\n          "longitude": -115.1754\n        },\n        "ticketPricing": 30,\n        "timeTravel": 30\n      }\n    },\n    "day2": {\n      "time": "07:00 PM",\n      "activity": "Dinner at Joël Robuchon Restaurant",\n      "location": {\n        "name": "Joël Robuchon Restaurant",\n        "details": "Indulge in a Michelin-starred dining experience at this world-renowned restaurant.",\n        "imageUrl": "https://www.joelrobuchon.com/content/dam/joelrobuchon/images/hero-images/joel-robuchon-hero-mobile.jpg",\n        "geoCoordinates": {\n          "latitude": 36.1143,\n          "longitude": -115.1735\n        }\n      }\n    },\n    "day2": {\n      "time": "09:00 PM",\n      "activity": "Attend a Cirque du Soleil show at the Bellagio",\n      "location": {\n        "name": "Bellagio",\n        "details": "Be amazed by the world-renowned Cirque du Soleil performances.",\n        "imageUrl": "https://www.bellagio.com/content/dam/bellagio/images/hero-images/bellagio-hero-mobile.jpg",\n        "geoCoordinates": {\n          "latitude": 36.1143,\n          "longitude": -115.1735\n        }\n      }\n    },\n    "day3": {\n      "time": "09:00 AM",\n      "activity": "Breakfast at The Cafe at Wynn",\n      "location": {\n        "name": "The Cafe at Wynn",\n        "details": "Enjoy a casual breakfast at this elegant cafe.",\n        "imageUrl": "https://www.wynnlasvegas.com/content/dam/wynn/images/hero-images/wynn-cafe-hero-mobile.jpg",\n        "geoCoordinates": {\n          "latitude": 36.1224,\n          "longitude": -115.1728\n        }\n      }\n    },\n    "day3": {\n      "time": "11:00 AM",\n      "activity": "Visit the Neon Museum",\n      "location": {\n        "name": "Neon Museum",\n        "details": "Explore a collection of iconic Las Vegas neon signs.",\n        "imageUrl": "https://www.neonmuseum.org/content/dam/neonmuseum/images/hero-images/neon-museum-hero-mobile.jpg",\n        "geoCoordinates": {\n          "latitude": 36.1737,\n          "longitude": -115.1406\n        },\n        "ticketPricing": 25,\n        "timeTravel": 60\n      }\n    },\n    "day3": {\n      "time": "01:00 PM",\n      "activity": "Lunch at In-N-Out Burger",\n      "location": {\n        "name": "In-N-Out Burger",\n        "details": "Enjoy a casual lunch at this popular fast-food chain.",\n        "imageUrl": "https://www.in-n-out.com/content/dam/in-n-out/images/hero-images/in-n-out-burger-hero-mobile.jpg",\n        "geoCoordinates": {\n          "latitude": 36.1737,\n          "longitude": -115.1406\n        }\n      }\n    },\n    "day3": {\n      "time": "03:00 PM",\n      "activity": "Relax and enjoy the pool at the Wynn",\n      "location": {\n        "name": "The Wynn",\n        "details": "Spend some time lounging by the pool and enjoying the resort amenities.",\n        "imageUrl": "https://www.wynnlasvegas.com/content/dam/wynn/images/hero-images/wynn-pool-hero-mobile.jpg",\n        "geoCoordinates": {\n          "latitude": 36.1224,\n          "longitude": -115.1728\n        }\n      }\n    },\n    "day3": {\n      "time": "07:00 PM",\n      "activity": "Dinner at NoMad Restaurant",\n      "location": {\n        "name": "NoMad Restaurant",\n        "details": "Enjoy a stylish dinner at this upscale restaurant.",\n        "imageUrl": "https://www.nomadasvegas.com/content/dam/nomad/images/hero-images/nomad-restaurant-hero-mobile.jpg",\n        "geoCoordinates": {\n          "latitude": 36.1224,\n          "longitude": -115.1728\n        }\n      }\n    },\n    "day3": {\n      "time": "09:00 PM",\n      "activity": "Enjoy a nightcap at the SkyBar at the Cosmopolitan",\n      "location": {\n        "name": "SkyBar at the Cosmopolitan",\n        "details": "Enjoy stunning city views and cocktails at this rooftop bar.",\n        "imageUrl": "https://www.cosmopolitanlasvegas.com/content/dam/cosmopolitan/images/hero-images/skybar-hero-mobile.jpg",\n        "geoCoordinates": {\n          "latitude": 36.1164,\n          "longitude": -115.1726\n        }\n      }\n    }\n  }\n}\n```\n\n**Notes:**\n\n* This is just a sample itinerary. You can customize it based on your interests and preferences.\n* Flight prices and hotel rates may vary depending on the time of year and availability.\n* Be sure to book your flights and hotel accommodations in advance, especially if you are traveling during peak season.\n* The ticket pricing and time travel listed for each activity are estimates and may vary.\n* It\'s highly recommended to purchase tickets online in advance for popular attractions to avoid lines.\n* This itinerary includes a mix of activities for a couple, including fine dining, entertainment, and sightseeing. You can adjust the activities to your liking.\n* Remember to check for any local guidelines or restrictions regarding COVID-19 before your trip.',
        },
      ],
    },
  ],
});
