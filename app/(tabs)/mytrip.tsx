import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import StartNewTripCard from "@/components/MyTrips/StartNewTripCard";
import { collection, DocumentData, getDocs, query, where } from "firebase/firestore";
import { auth, db } from "@/configs/FirebaseConfig";
import UserTripList from "@/components/MyTrips/UserTripList";
import { useRouter } from "expo-router";

export default function MyTrip() {
  const router = useRouter();
  const [userTrips, setUserTrips] = useState<DocumentData[]>([]);
  const user = auth.currentUser;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    GetMyTrips();
  }, []);

  const GetMyTrips = async () => {
    setLoading(true);
    if (!user) return;
    const q = query(collection(db, "UserTrips"), where("userEmail", "==", user.email));

    const querySnapshot = await getDocs(q);
    const trips: DocumentData[] = [];

    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      trips.push(doc.data());
    });

    setUserTrips(trips);
    setLoading(false);
  };

  if (loading) <ActivityIndicator size={"large"} color={Colors.primary} />;

  return (
    <ScrollView
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
        <Ionicons
          name="add-circle-sharp"
          size={40}
          color="black"
          onPress={() => router.push("/create-trip/search-place")}
        />
      </View>
      {userTrips.length === 0 ? <StartNewTripCard /> : <UserTripList userTrips={userTrips} />}
    </ScrollView>
  );
}
