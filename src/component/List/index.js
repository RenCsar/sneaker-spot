import React from "react";
import Shoes from "../Shoes";
import { productList } from "../../data";

export default function ShoesList() {
  return (
    <>
      {productList.map((item) => (
        <Shoes key={item.id} {...item} />
      ))}
    </>
  );
}