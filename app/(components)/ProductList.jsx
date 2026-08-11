import React from "react";
import ProductCard from "./ProductCard";

async function ProductList() {
  const res = await fetch("http://localhost:3000/products", {
    next: { revalidate: 60 },
  });
  const products = await res.json();
  return (
    <div className="products-list">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}

export default ProductList;
