import { View, Text } from "react-native";
import React, { useState } from "react";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import StartNewTripCard from "@/components/MyTrips/StartNewTripCard";

export default function MyTrip() {
  const [userTrips, setUserTrips] = useState([]);

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 55,
        backgroundColor: Colors.white,
        height: "100%",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 30,
            marginBottom: 20,
          }}
        >
          My Trips
        </Text>
        <Ionicons name="add-circle-sharp" size={40} color="black" />
      </View>

      {userTrips.length === 0 ? <StartNewTripCard /> : null}
    </View>
  );
}
