import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { Hotel } from "@/types";
import { GetPhotoRef } from "@/services/GooglePlacesApi";

type HotelCardProps = {
  hotel: Hotel;
};

export default function HotelCard({ hotel }: HotelCardProps) {
  const [photoRefe, setPhotoRefe] = useState();
  useEffect(() => {
    GetGooglePhotoRef();
  }, []);

  const GetGooglePhotoRef = async () => {
    try {
      const result = await GetPhotoRef(hotel.name);
      setPhotoRefe(result);
    } catch (error: any) {
      console.error("Error in GetGooglePhotoRef:", error.message);
    }
  };
  return (
    <View
      style={{
        marginRight: 20,
        width: 180,
      }}
    >
      <Image
        source={{
          uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photoRefe}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}`,
        }}
        style={{
          width: 180,
          height: 120,
          borderRadius: 15,
        }}
      />
      <View
        style={{
          padding: 5,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-medium",
            fontSize: 17,
          }}
        >
          {hotel.name}
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontFamily: "outfit-regular" }}>⭐ {hotel.rating}</Text>
          <Text style={{ fontFamily: "outfit-regular" }}>
            ⭐ {hotel.price.amount} {hotel.price.currency}
          </Text>
        </View>
      </View>
    </View>
  );
}
