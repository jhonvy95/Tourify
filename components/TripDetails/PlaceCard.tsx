import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "@/constants/Colors";
import { GetPhotoRef } from "@/services/GooglePlacesApi";

type PlaceCardProps = {
  place: any;
};

export default function PlaceCard({ place }: PlaceCardProps) {
  const [photoRefe, setPhotoRefe] = useState();
  useEffect(() => {
    GetGooglePhotoRef();
  }, []);

  const GetGooglePhotoRef = async () => {
    try {
      const result = await GetPhotoRef(place.location.name);
      setPhotoRefe(result);
    } catch (error: any) {
      console.error("Error in GetGooglePhotoRef:", error.message);
    }
  };

  return (
    <View
      style={{
        borderWidth: 1,
        padding: 10,
        borderRadius: 15,
        borderColor: Colors.light_gray,
        marginTop: 20,
        backgroundColor: "rgba(217, 238, 252, 0.4)",
      }}
    >
      <Image
        source={{
          uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photoRefe}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}`,
        }}
        style={{
          width: "100%",
          height: 140,
          borderRadius: 15,
        }}
      />
      <View
        style={{
          marginTop: 5,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 20,
          }}
        >
          {place.location.name}
        </Text>
        <Text
          style={{
            fontFamily: "outfit-regular",
            fontSize: 16,
            color: Colors.gray,
          }}
        >
          {place.location.details}
        </Text>
        <Text
          style={{
            fontFamily: "outfit-regular",
            fontSize: 15,
            marginTop: 5,
          }}
        >
          🏖️Activity: {place.activity}
        </Text>
      </View>
    </View>
  );
}
