import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import ShoesList from "../../component/List";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/banner.png")}
          style={styles.image}
        />
        <View style={styles.textComtainer}>
          <Text style={styles.text}>Tênis</Text>
          <Text style={[styles.text, { color: "#cececf" }]}>•</Text>
          <Text style={[styles.text, { color: "#cececf" }]}>Masculino</Text>
          <TouchableOpacity
            style={{ position: "absolute", right: 0, alignSelf: "center" }}
          >
            <MaterialIcons name="filter-list" size={24} color={"#000"} />
          </TouchableOpacity>
        </View>
        <View style={styles.line} />
        <Text style={[styles.text, { marginTop: 10 }]}>LANÇAMENTOS</Text>
        <ScrollView style={{}}>
          <View style={styles.scrollContainer}>
            <ShoesList/>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    width: "100%",
    backgroundColor: "#FFF",
  },
  header: {
    marginBottom: 8,
  },
  image: {
    width: "100%",
  },
  textComtainer: {
    flexDirection: "row",
    marginVertical: "5%",
    marginHorizontal: "5%",
  },
  text: {
    fontFamily: "Anton_400Regular",
    fontSize: 26,
    marginHorizontal: "1%",
  },
  line: {
    borderBottomColor: "#d8d8d8",
    borderBottomWidth: 2,
  },
  scrollContainer: {
    justifyContent:'space-around',
    marginBottom: 300,
    flexDirection:'row',
    flexWrap: 'wrap'
  }
});