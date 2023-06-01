import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import Dot from "../../component/Dot";
import TamanhoList from "../../component/TamanhoList";

export default function Detail({ navigation, route }) {
  const { name, img, preco, imgDetail, tamanhos } = route.params;

  navigation.setOptions({
    headerTitle: name,
  });

  return (
    <ScrollView style={styles.container}>
      <Image 
      source={imgDetail}
      style={styles.img}
      resizeMode="cover"
      />
      <View>
        <View>
          <Text style={styles.preco}>{preco.toLocaleString("pt-br", { style: "currency", currency: "BRL", })}</Text>
        </View>
        <View>
          <Text style={styles.title}>{name}</Text>
        </View>
        <View style={styles.dotContainer}>
          <Dot color={'black'}/>
          <Dot color={'#2379f4'}/>
          <Dot color={'#fb6e53'}/>
          <Dot color={'#ddd'}/>
        </View>
        <View style={styles.tamanhoContainer}>
          <TamanhoList tamanhos={tamanhos}/>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    width: '100%',
    backgroundColor: '#FFF'
  },
  img: {
    width: '100%',
    height: 250,
  },
  preco: {
    fontSize: 24,
    fontFamily: 'Anton_400Regular',
    paddingHorizontal: 4,
  },
  title: {
    fontSize: 30,
    fontFamily: 'Anton_400Regular',
    opacity: 0.4,
    paddingHorizontal: 4,
  },
  dotContainer: {
    flexDirection: 'row',
    marginVertical: '7%',
  }, 
  tamanhoContainer: {
    flexDirection: 'row',
    width: '100%'
  }
});
