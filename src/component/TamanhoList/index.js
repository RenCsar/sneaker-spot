import { View, FlatList } from "react-native";
import React from "react";
import Tamanho from "../Tamanho";

export default function TamanhoList({ tamanhos }) {
  function renderItem({ item }) {
    return <Tamanho tamanho={item.tamanho} />;
  }

  return (
    <View>
      <FlatList
        keyExtractor={(item) => item.tamanho}
        data={tamanhos}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}