import "react-native-gesture-handler";

import React from "react";
import { StatusBar } from "expo-status-bar";
import Router from "./src/router";
import { useFonts, Anton_400Regular } from "@expo-google-fonts/anton";
import { View, ActivityIndicator } from "react-native";

export default function App() {
  let [fontsLoaded] = useFonts({
    Anton_400Regular,
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }

  return (
    <>
      <StatusBar style="light" backgroundColor="#000" translucent={true} />
      <Router />
    </>
  );
}