import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function Tamanho({ tamanho }) {
  const [selected, setSelected] = useState(false);
  return (
    <TouchableOpacity onPress={() => setSelected(!selected)}>
      <View style={selected ? styles.containerPress : styles.container}>
        <Text style={selected ? styles.textPress : styles.text}>{tamanho}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderColor: "#e6e6e6",
    borderWidth: 2,
    marginHorizontal: 10,
  },
  containerPress: {
    width: 150,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderColor: "#17181a",
    borderWidth: 2,
    marginHorizontal: 10,
    backgroundColor: "#17181a",
    color: "#fff",
  },
  text: {
    fontSize: 18,
    textAlign: "center",
    textAlignVertical: "center",
    color: "#c9c",
  },
  textPress: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    textAlignVertical: "center",
  },
});