import { View, Text, FlatList, Image } from "react-native";
import React, { useEffect } from "react";
import { Hotels } from "@/types";
import { GetPhotoRef } from "@/services/GooglePlacesApi";
import HotelCard from "./HotelCard";

type HotelsListProps = {
  hotels: Hotels;
};

export default function HotelList({ hotels }: HotelsListProps) {
  return (
    <View
      style={{
        marginTop: 20,
      }}
    >
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 20,
        }}
      >
        🏨 Hotel Recommendation
      </Text>
      <FlatList
        data={hotels}
        style={{ marginTop: 8 }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => <HotelCard hotel={item} />}
      />
    </View>
  );
}
