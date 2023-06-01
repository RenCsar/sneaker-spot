import { Text, TouchableOpacity, Image, StyleSheet, View } from "react-native";
import React from "react";

export default function Shoes({ img, name, preco, onClick }) {
  return (
    <TouchableOpacity onPress={onClick}>
      <View style={styles.container}>
        <Image source={img} style={styles.shoesImg} />
        <Text style={styles.nome}>{name}</Text>
        <Text style={styles.preco}>
          {preco.toLocaleString("pt-br", { style: "currency", currency: "BRL", })}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    padding: 5,
  },
  nome: {
    fontWeight: "700",
  },
  preco :{
    color: '#aaa'
  }
});