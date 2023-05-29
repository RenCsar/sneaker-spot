import "react-native-gesture-handler";

import React from "react";
import { AppLoading } from "expo";
import { StatusBar } from "expo-status-bar";
import Router from "./src/router";
import { useFonts, Anton_400Regular } from "@expo-google-fonts/anton";

export default function App() {

  let [ fontsLoaded ] = useFonts({
    Anton_400Regular,
  });

  if(!fontsLoaded){
    return null
  }

  return (
    <>
      <StatusBar style="light" backgroundColor="#000" translucent={true} />
      <Router />
    </>
  );
}