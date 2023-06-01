import { View, StyleSheet } from "react-native";
import React from "react";
import Dot from "../Dot";

export default function DotList({ cores }) {
  return (
    <View style={styles.dotContainer}>
      {cores.map((item) => (
        <Dot cores={item.cor} key={item.cor} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  dotContainer: {
    flexDirection: "row",
    marginVertical: "7%",
  },
});