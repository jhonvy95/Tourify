import { View, Text, Image } from "react-native";
import React from "react";
import moment from "moment";
import { TripData } from "@/context/CreateTripContext";
import { Colors } from "@/constants/Colors";

type UserTripCardProps = {
  trip: any;
};

export default function UserTripCard({ trip }: UserTripCardProps) {
  const formData = (data: string): TripData => {
    return JSON.parse(data);
  };
  return (
    <View
      style={{
        marginTop: 20,
        display: "flex",
        flexDirection: "row",
        gap: 10,
      }}
    >
      <Image
        source={{
          uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${
            formData(trip.tripData).locationInfo?.photoRef
          }&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}`,
        }}
        style={{
          width: 100,
          height: 100,
          borderRadius: 15,
        }}
      />
      <View>
        <Text
          style={{
            fontFamily: "outfit-medium",
            fontSize: 18,
          }}
        >
          {trip?.tripPlan?.flight?.details?.arrivalCity}
        </Text>
        <Text
          style={{
            fontFamily: "outfit-regular",
            fontSize: 14,
            color: Colors.gray,
          }}
        >
          {moment(formData(trip.tripData).startDate).format("DD MMM YYYY")}
        </Text>
        <Text
          style={{
            fontFamily: "outfit-regular",
            fontSize: 14,
            color: Colors.gray,
          }}
        >
          Traveling: {formData(trip.tripData).traveler?.title}
        </Text>
      </View>
    </View>
  );
}
