import { Colors } from "@/constants/Colors";
import { SelectBudgetOptions, SelectTravelList } from "@/constants/options";
import React from "react";
import { Text, View } from "react-native";

type OptionCardProps = {
  option: SelectTravelList | SelectBudgetOptions;
  selectedOption: SelectTravelList | SelectBudgetOptions;
};
export default function OptionCard({ option, selectedOption }: OptionCardProps) {
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
        selectedOption?.id === option?.id && { borderWidth: 2 },
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
