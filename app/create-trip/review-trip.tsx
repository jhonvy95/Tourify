import { Colors } from "@/constants/Colors";
import { CreateTripContext } from "@/context/CreateTripContext";
import { useNavigation, useRouter } from "expo-router";
import moment from "moment";
import React, { useContext, useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function ReviewTrip() {
  const navigation = useNavigation();
  const { tripData } = useContext(CreateTripContext);
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);

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
        Review your trip
      </Text>
      <View
        style={{
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 20,
            textAlign: "left",
          }}
        >
          Before generating your trip, please review your selection
        </Text>
        {/* Destination Info */}
        <View
          style={{
            marginTop: 40,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 20,
          }}
        >
          <Text
            style={{
              fontSize: 30,
            }}
          >
            📍
          </Text>
          <View>
            <Text
              style={{
                fontFamily: "outfit-regular",
                fontSize: 20,
                color: Colors.gray,
              }}
            >
              Destination
            </Text>
            <Text
              style={{
                fontFamily: "outfit-medium",
                fontSize: 20,
              }}
            >
              {tripData?.locationInfo?.name}
            </Text>
          </View>
        </View>

        {/* Date selected Info */}
        <View
          style={{
            marginTop: 25,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 20,
          }}
        >
          <Text
            style={{
              fontSize: 30,
            }}
          >
            📆
          </Text>
          <View>
            <Text
              style={{
                fontFamily: "outfit-regular",
                fontSize: 20,
                color: Colors.gray,
              }}
            >
              Travel Date
            </Text>
            <Text
              style={{
                fontFamily: "outfit-medium",
                fontSize: 20,
              }}
            >
              {`${moment(tripData?.startDate).format("DD MMM")} To ${moment(
                tripData?.endDate
              ).format("DD MMM")}  (${tripData?.totalNoOfDays} days)`}
            </Text>
          </View>
        </View>

        {/* Traveles Info */}
        <View
          style={{
            marginTop: 25,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 20,
          }}
        >
          <Text
            style={{
              fontSize: 30,
            }}
          >
            🚌
          </Text>
          <View>
            <Text
              style={{
                fontFamily: "outfit-regular",
                fontSize: 20,
                color: Colors.gray,
              }}
            >
              Who is Traveling
            </Text>
            <Text
              style={{
                fontFamily: "outfit-medium",
                fontSize: 20,
              }}
            >
              {tripData?.traveler?.title}
            </Text>
          </View>
        </View>

        {/* Budget Info */}
        <View
          style={{
            marginTop: 25,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 20,
          }}
        >
          <Text
            style={{
              fontSize: 30,
            }}
          >
            💰
          </Text>
          <View>
            <Text
              style={{
                fontFamily: "outfit-regular",
                fontSize: 20,
                color: Colors.gray,
              }}
            >
              Budget
            </Text>
            <Text
              style={{
                fontFamily: "outfit-medium",
                fontSize: 20,
              }}
            >
              {tripData?.budget}
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => router.replace("create-trip/generate-trip")}
        style={{
          padding: 15,
          backgroundColor: Colors.primary,
          borderRadius: 99,
          marginTop: 80,
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
          Build My trip
        </Text>
      </TouchableOpacity>
    </View>
  );
}
