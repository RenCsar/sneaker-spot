import React from "react";
import Shoes from "../Shoes";
import { productList } from "../../data";
import { useNavigation } from "@react-navigation/native";

export default function ShoesList() {
  const navigation = useNavigation();

  return (
    <>
      {productList.map((item) => (
        <Shoes
          key={item.id}
          {...item}
          onClick={() => navigation.navigate("Detail", { ...item })}
        />
      ))}
    </>
  );
}