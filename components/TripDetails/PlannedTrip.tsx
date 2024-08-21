import { View, Text, Image } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import PlaceCard from "./PlaceCard";

type PlannedTripProps = {
  tripDays: { [key: string]: any };
};

export default function PlannedTrip({ tripDays }: PlannedTripProps) {
  // Ordenar las claves de los días
  const sortedDays = Object.keys(tripDays).sort((a, b) => {
    const dayA = parseInt(a.replace("day", ""), 10);
    const dayB = parseInt(b.replace("day", ""), 10);
    return dayA - dayB;
  });

  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontFamily: "outfit-bold", fontSize: 20 }}>🏕️ Plan Details</Text>
      {sortedDays.map((day) => {
        const details = tripDays[day];
        console.log({ day, details });
        return (
          <View key={day}>
            <Text
              style={{
                fontFamily: "outfit-medium",
                fontSize: 20,
                marginTop: 20,
              }}
            >
              {day}
            </Text>
            <PlaceCard place={details} />
          </View>
        );
      })}
    </View>
  );
}
