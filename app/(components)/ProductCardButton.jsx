"use client";
import React, { useEffect } from "react";

function ProductCardButton({ product }) {
  useEffect(() => {
    localStorage.setItem("hello", "hello");
  });
  console.log(product);
  return (
    <button type="button" className="product-card__button" onClic>
      Add to cart
    </button>
  );
}

export default ProductCardButton;
