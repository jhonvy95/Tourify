import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Flight } from "@/types";
import { Colors } from "@/constants/Colors";
import * as Linking from "expo-linking";

type FlightInfoProps = {
  flightDetails: Flight;
};

export default function FlightInfo({ flightDetails }: FlightInfoProps) {
  console.log(flightDetails);
  const handleBookHerePress = () => {
    const url = flightDetails?.bookingUrl || "https://defaultbookinglink.com";
    Linking.openURL(url).catch((err) => console.error("Error opening URL:", err));
  };
  return (
    <View
      style={{
        marginTop: 20,
        borderWidth: 1,
        borderColor: Colors.light_gray,
        padding: 10,
        borderRadius: 15,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 20,
          }}
        >
          ✈️ Flights
        </Text>
        <TouchableOpacity
          onPress={handleBookHerePress}
          style={{
            backgroundColor: Colors.primary,
            padding: 5,
            width: 100,
            borderRadius: 7,
            marginTop: 7,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: Colors.white,
              fontFamily: "outfit-regular",
            }}
          >
            Book Here
          </Text>
        </TouchableOpacity>
      </View>

      <Text
        style={{
          fontFamily: "outfit-regular",
          fontSize: 17,
          marginTop: 7,
        }}
      >
        Airline: {flightDetails?.details?.airline}
      </Text>
      <Text
        style={{
          fontFamily: "outfit-regular",
          fontSize: 17,
        }}
      >
        Price: {flightDetails?.price?.amount} {flightDetails?.price?.currency}
      </Text>
    </View>
  );
}
