import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import moment from "moment";
import { TripData } from "@/context/CreateTripContext";
import { Colors } from "@/constants/Colors";
import UserTripCard from "./UserTripCard";

type UserTripListProps = {
  userTrips: any[];
};

export default function UserTripList({ userTrips }: UserTripListProps) {
  const latestTrip: TripData = JSON.parse(userTrips[0].tripData);
  return (
    <View>
      <View style={{ marginTop: 20 }}>
        {latestTrip.locationInfo?.photoRef && (
          <Image
            source={{
              uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${latestTrip.locationInfo.photoRef}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}`,
            }}
            style={{
              width: "100%",
              height: 240,
              objectFit: "cover",
              borderRadius: 15,
            }}
          />
        )}

        <View
          style={{
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontFamily: "outfit-medium",
              fontSize: 20,
            }}
          >
            {userTrips[0]?.tripPlan?.flight?.details?.arrivalCity}
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 7,
              marginBottom: 10,
            }}
          >
            <Text
              style={{
                fontFamily: "outfit-regular",
                fontSize: 17,
                color: Colors.gray,
              }}
            >
              {moment(latestTrip.startDate).format("DD MMM YYYY")}
            </Text>
            <Text
              style={{
                fontFamily: "outfit-regular",
                fontSize: 17,
                color: Colors.gray,
              }}
            >
              🚌 {latestTrip.traveler?.title}
            </Text>
          </View>
          <TouchableOpacity
            // onPress={() => router.replace("create-trip/select-dates")}
            style={{
              padding: 15,
              backgroundColor: Colors.primary,
              borderRadius: 15,
              marginTop: 10,
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
              See your plan
            </Text>
          </TouchableOpacity>
        </View>
        {userTrips.map((trip, index) => (
          <UserTripCard trip={trip} key={index} />
        ))}
      </View>
    </View>
  );
}
