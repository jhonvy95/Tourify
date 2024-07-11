import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();
  return (
    <View>
      <Image
        source={require("../assets/images/login.jpg")}
        style={{
          width: "100%",
          height: 520,
          resizeMode: "cover",
          justifyContent: "center",
          alignItems: "center",
        }}
      />

      <View style={styles.container}>
        <Text
          style={{
            fontSize: 28,
            fontFamily: "outfit-bold",
            textAlign: "center",
            marginTop: 10,
          }}
        >
          Welcome to Tourify
        </Text>
        <Text
          style={{
            fontFamily: "outfit-regular",
            fontSize: 17,
            textAlign: "center",
            color: Colors.gray,
            marginTop: 20,
          }}
        >
          Discover your next adventure effortlessly. Personalized itineraries at your fingertips.
          Travel smarter with AI-driven insights and.
        </Text>

        <TouchableOpacity style={styles.button} onPress={() => router.push("auth/sign-in")}>
          <Text
            style={{
              fontFamily: "outfit-regular",
              fontSize: 17,
              textAlign: "center",
              color: Colors.white,
            }}
          >
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    marginTop: -20,
    height: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 25,
    shadowColor: "#000",
  },
  button: {
    padding: 15,
    backgroundColor: Colors.primary,
    borderRadius: 99,
    marginTop: "20%",
  },
});
