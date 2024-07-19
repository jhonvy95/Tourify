import { View, Text } from "react-native";
import React from "react";
import { SelectTravelList } from "@/constants/options";
import { Colors } from "@/constants/Colors";

type OptionCardProps = {
  option: SelectTravelList;
  selectedTraveler: SelectTravelList;
};
export default function OptionCard({ option, selectedTraveler }: OptionCardProps) {
  return (
    <View
      style={[
        {
          padding: 25,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: Colors.light_gray,
          borderRadius: 15,
        },
        selectedTraveler?.id === option?.id && { borderWidth: 2 },
      ]}
    >
      <View>
        <Text
          style={{
            fontSize: 20,
            fontFamily: "outfit-bold",
          }}
        >
          {option.title}
        </Text>
        <Text
          style={{
            fontSize: 17,
            fontFamily: "outfit-regular",
            color: Colors.gray,
          }}
        >
          {option.desc}
        </Text>
      </View>
      <Text
        style={{
          fontSize: 35,
        }}
      >
        {option.icon}
      </Text>
    </View>
  );
}