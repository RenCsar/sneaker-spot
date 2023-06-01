import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import React from "react";
import TamanhoList from "../../component/TamanhoList";
import DotList from "../../component/DotList";

export default function Detail({ navigation, route }) {
  const { name, preco, imgDetail, tamanhos, cores } = route.params;

  navigation.setOptions({
    headerTitle: name,
  });

  return (
    <ScrollView style={styles.container}>
      <Image source={imgDetail} style={styles.img} resizeMode="cover" />
      <View>
        <View>
          <Text style={styles.preco}>
            {preco.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </Text>
        </View>
        <View>
          <Text style={styles.title}>{name}</Text>
        </View>
        <View>
          <DotList cores={cores} />
        </View>
        <View style={styles.tamanhoContainer}>
          <TamanhoList tamanhos={tamanhos} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    width: "100%",
    backgroundColor: "#FFF",
  },
  img: {
    width: "100%",
    height: 250,
  },
  preco: {
    fontSize: 24,
    fontFamily: "Anton_400Regular",
    paddingHorizontal: 4,
  },
  title: {
    fontSize: 30,
    fontFamily: "Anton_400Regular",
    opacity: 0.4,
    paddingHorizontal: 4,
  },
  tamanhoContainer: {
    flexDirection: "row",
    width: "100%",
  },
});