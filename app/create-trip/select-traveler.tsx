import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import { selectTravelesList, SelectTravelList } from "@/constants/options";
import OptionCard from "@/components/CreateTrip/OptionCard";
import { CreateTripContext } from "@/context/CreateTripContext";

export default function SelectTraveler() {
  const navigation = useNavigation();
  const router = useRouter();
  const { tripData, setTripData } = useContext(CreateTripContext);
  const [selectedTraveler, setSelectedTraveler] = useState<SelectTravelList>({
    id: 1,
    title: "Just Me",
    desc: "A sole traveles in exploration",
    icon: "✈️",
    people: "1 People",
  });
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);

  useEffect(() => {
    setTripData({ ...tripData, traveler: selectedTraveler });
  }, [selectedTraveler]);
  console.log(tripData);
  return (
    <View
      style={{
        padding: 25,
        paddingTop: 75,
        backgroundColor: Colors.white,
        height: "100%",
      }}
    >
      <Text
        style={{
          fontSize: 35,
          fontFamily: "outfit-bold",
          marginTop: 20,
          textAlign: "center",
        }}
      >
        Who's Traveling
      </Text>

      <View
        style={{
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 23,
            textAlign: "center",
          }}
        >
          Choose your traveles
        </Text>

        <FlatList
          data={selectTravelesList}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => setSelectedTraveler(item)}
              style={{
                marginVertical: 10,
              }}
            >
              <OptionCard option={item} selectedOption={selectedTraveler!} />
            </TouchableOpacity>
          )}
        />
      </View>

      <TouchableOpacity
        onPress={() => router.replace("create-trip/select-dates")}
        style={{
          padding: 15,
          backgroundColor: Colors.primary,
          borderRadius: 99,
          marginTop: 20,
          borderWidth: 1,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-regular",
            fontSize: 17,
            textAlign: "center",
            color: Colors.white,
          }}
        >
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
}
