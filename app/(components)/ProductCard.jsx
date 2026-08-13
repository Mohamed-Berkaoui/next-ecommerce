import React from "react";
import { cookies } from "next/headers";
import Link from "next/link";
import {
  getCookie,
  getCookies,
  setCookie,
  deleteCookie,
  hasCookie,
} from "cookies-next/server";
import Button from "./Button";

async function ProductCard({ product }) {
  async function addToCart(fromData) {
    "use server";
    const data = await getCookie("cart", { cookies });
    let cart = data ? JSON.parse(data) : [];
    if (cart.find((item) => item.id == product.id)) {
      cart = cart.map((item) =>
        item.id == product.id ? { ...item, qty: item.qty + 1 } : item,
      );
    } else {
      cart = [...cart, { ...product, qty: 1 }];
    }
    await setCookie("cart", JSON.stringify(cart), { cookies });
    console.log("🚀 ~ addToCart ~ cart:", cart);
  }

  return (
    <article className="product-card">
      <div className="product-card__image-wrap">
        <img
          src={product.image}
          alt={product.title}
          className="product-card__image"
        />
      </div>

      <div className="product-card__content">
        <span className="product-card__category">{product.category}</span>
        <h2 className="product-card__title">
          <Link href={`/item/${product.id}`}>{product.title}</Link>
        </h2>

        <div className="product-card__footer">
          <div className="product-card__meta">
            <span className="product-card__price">${product.price}</span>
          </div>

          <form action={addToCart}>
          <Button ></Button>
          </form>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
