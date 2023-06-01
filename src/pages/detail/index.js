import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import TamanhoList from "../../component/TamanhoList";
import DotList from "../../component/DotList";
import Button from "../../component/Button";
import HorizontalList from "../../component/HorizontalList";

export default function Detail({ navigation, route }) {
  const { name, preco, imgDetail, tamanhos, cores, descricao } = route.params;

  useEffect(()=>{
    navigation.setOptions({
      headerTitle: name,
    });
  }, [])

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
        <View style={styles.textContent}>
          <Text style={styles.textTitle}>{name}</Text>
          <Text style={styles.textContent}>{descricao}</Text>
          <Text style={styles.textList}>-Categoria: Amortecimento</Text>
          <Text style={styles.textList}>-Material: Mesh</Text>
        </View>
        <Button />
        <View style={styles.line} />
        <View style={{ marginVertical: "5%" }}>
          <Text style={styles.textFooter}>VOCÊ TAMBÉM PODE GOSTAR</Text>
          <HorizontalList />
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
  textContent: {
    fontSize: 16,
    lineHeight: 25,
    marginVertical: "2%",
    paddingHorizontal: "2%",
  },
  textTitle: {
    fontSize: 22,
    marginVertical: "2%",
    fontWeight: "600",
  },
  textList: {
    fontSize: 16,
    lineHeight: 25,
  },
  line: {
    borderWidth: 1,
    borderBottomColor: "#ddd",
    marginVertical: "2%",
  },
  textFooter: {
    fontFamily: "Anton_400Regular",
    fontSize: 22,
    marginHorizontal: "1%",
    marginBottom: "5%",
  },
});