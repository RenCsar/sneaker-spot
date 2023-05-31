import React from "react";
import { productList } from "../../data";
import Shoes from "../Shoes";
import { FlatList } from "react-native";

export default function HorizontalList() {
  function renderItem({ item }) {
    return <Shoes {...item} />;
  }
  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={productList}
      renderItem={renderItem}
      horizontal
    />
  );
}