import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

export default function index() {
  const navigation = useNavigation();
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 40,
        backgroundColor: Colors.white,
        height: "100%",
      }}
    >
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 30,
          textAlign: "center",
        }}
      >
        Create New Account
      </Text>

      <View
        style={{
          marginTop: 50,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-regular",
          }}
        >
          Full Name
        </Text>
        <TextInput style={styles.input} placeholder="Enter Full Name" />
      </View>

      <View
        style={{
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-regular",
          }}
        >
          Email
        </Text>
        <TextInput secureTextEntry={true} style={styles.input} placeholder="Enter Email" />
      </View>
      <View
        style={{
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-regular",
          }}
        >
          Password
        </Text>
        <TextInput secureTextEntry={true} style={styles.input} placeholder="Enter Password" />
      </View>
      <View
        style={{
          padding: 15,
          backgroundColor: Colors.primary,
          borderRadius: 99,
          marginTop: 50,
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
          Create Account
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => router.replace("auth/sign-in")}
        style={{
          padding: 15,
          backgroundColor: Colors.white,
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
            color: Colors.primary,
          }}
        >
          Sign In
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.gray,
    fontFamily: "outfit-regular",
  },
});
