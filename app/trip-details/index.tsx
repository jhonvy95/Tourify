import { View, Text, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { TripData } from "../../context/CreateTripContext";
import { Colors } from "@/constants/Colors";
import moment from "moment";
import FlightInfo from "@/components/TripDetails/FlightInfo";
import { Flight } from "@/types";
import HotelList from "@/components/TripDetails/HotelList";
import PlannedTrip from "@/components/TripDetails/PlannedTrip";

export default function TripDetails() {
  const navigation = useNavigation();
  const [tripDetails, setTripDetails] = useState<any>();
  const [tripData, setTripData] = useState<TripData | null>(null);
  const { trip } = useLocalSearchParams();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });

    if (trip) {
      try {
        const parsedTrip = JSON.parse(trip as string);
        setTripDetails(parsedTrip);
        if (parsedTrip?.tripData) {
          setTripData(JSON.parse(parsedTrip.tripData));
        }
      } catch (error) {
        console.error("Error parsing trip data:", error);
      }
    }
  }, [trip]);

  console.log("tripDetails", tripDetails);

  return (
    <ScrollView>
      <Image
        source={{
          uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${tripData?.locationInfo?.photoRef}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}`,
        }}
        style={{
          width: "100%",
          height: 330,
        }}
      />
      <View
        style={{
          padding: 15,
          backgroundColor: Colors.white,
          height: "100%",
          marginTop: -30,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}
      >
        <Text
          style={{
            fontSize: 25,
            fontFamily: "outfit-bold",
          }}
        >
          {tripData?.locationInfo?.name}
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 5,
            marginTop: 5,
          }}
        >
          <Text
            style={{
              fontFamily: "outfit-regular",
              fontSize: 18,
              color: Colors.gray,
            }}
          >
            {moment(tripData?.startDate).format("DD MMM YYYY")}
          </Text>
          <Text
            style={{
              fontFamily: "outfit-regular",
              fontSize: 18,
              color: Colors.gray,
            }}
          >
            {" "}
            - {moment(tripData?.endDate).format("DD MMM YYYY")}
          </Text>
        </View>
        <Text
          style={{
            fontFamily: "outfit-regular",
            fontSize: 17,
            color: Colors.gray,
          }}
        >
          🚌 {tripData?.traveler?.title}
        </Text>

        {tripDetails && (
          <View>
            <FlightInfo flightDetails={tripDetails?.tripPlan?.flight as Flight} />
            <HotelList hotels={tripDetails?.tripPlan?.hotel} />
            <PlannedTrip tripDays={tripDetails?.tripPlan?.itinerary} />
          </View>
        )}
      </View>
    </ScrollView>
  );
}
