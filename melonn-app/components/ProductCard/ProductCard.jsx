import React from "react";
import s from "./ProductCard.module.scss"

function ProductCard({ item }) {
  const { productName, productQty, productWeight } = item;
  return (
    <div className = {s.card}>
      <p><b>Nombre del producto: </b>{productName}</p>
      <p><b>Cantidad: </b>{productQty}</p>
      <p><b>Peso: </b>{productWeight}</p>
    </div>
  );
}

export default ProductCard;
