import Login from "@/components/Login";
import { auth } from "@/configs/FirebaseConfig";
import { Redirect } from "expo-router";
import { View } from "react-native";

export default function Index() {
  const user = auth.currentUser;
  console.log(user);
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {user ? <Redirect href={"/mytrip"} /> : <Login />}
    </View>
  );
}
