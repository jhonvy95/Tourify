import { View, Text, Image } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Colors } from "@/constants/Colors";
import { CreateTripContext } from "@/context/CreateTripContext";
import { AI_PROMPT } from "@/constants/options";
import { chatSession } from "@/configs/AiModal";
import { db, auth } from "@/configs/FirebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "expo-router";

export default function GenerateTrip() {
  const { tripData, setTripData } = useContext(CreateTripContext);
  const router = useRouter();
  const user = auth.currentUser;
  useEffect(() => {
    GenerateAiTrip();
  }, []);

  const GenerateAiTrip = async () => {
    try {
      const { locationInfo, totalNoOfDays, traveler, budget } = tripData || {};

      if (!locationInfo || !totalNoOfDays || !traveler || !budget) {
        throw new Error("Datos de viaje incompletos");
      }

      const FINAL_PROMPT = AI_PROMPT.replace("{location}", locationInfo.name || "")
        .replace("{totalDays}", totalNoOfDays.toString())
        .replace("{totalNight}", (totalNoOfDays - 1).toString())
        .replace("{traveler}", traveler.title || "")
        .replace("{budget}", budget || "");

      console.log("FINAL_PROMPT:", FINAL_PROMPT);

      // Enviar el mensaje y obtener la respuesta
      const result = await chatSession.sendMessage(FINAL_PROMPT);
      const responseText = await result.response.text();

      console.log("Response text:", responseText);

      if (!responseText) {
        throw new Error("La respuesta es vacía o inválida.");
      }

      // Intentar parsear el texto de la respuesta como JSON
      let tripResp;
      try {
        tripResp = JSON.parse(responseText);
      } catch (error) {
        throw new Error("Error al parsear JSON: " + error);
      }

      const docId = Date.now().toString();
      await setDoc(doc(db, "UserTrips", docId), {
        userEmail: user?.email,
        tripPlan: tripResp,
        tripData: JSON.stringify(tripData),
        docId,
      });

      router.push("(tabs)/mytrip");
    } catch (error) {
      console.error("Error generating trip:", error);
    }
  };

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
          fontFamily: "outfit-bold",
          fontSize: 35,
          textAlign: "center",
        }}
      >
        Please Wait...
      </Text>
      <Text
        style={{
          fontFamily: "outfit-medium",
          fontSize: 20,
          textAlign: "center",
          marginTop: 40,
        }}
      >
        We are working to generate your dream trip
      </Text>

      <Image
        source={require("./../../assets/images//plane.gif")}
        style={{
          width: "100%",
          height: 300,
          resizeMode: "contain",
          marginTop: 100,
          marginBottom: 20,
          alignSelf: "center",
        }}
      />

      <Text
        style={{
          fontFamily: "outfit-regular",
          fontSize: 20,
          textAlign: "center",
          color: Colors.gray,
        }}
      >
        Do not Go Back
      </Text>
    </View>
  );
}
