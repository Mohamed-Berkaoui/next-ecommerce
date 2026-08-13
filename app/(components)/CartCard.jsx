"use client";
import { getCookie, getCookies, setCookie } from "cookies-next/client";
import { useState } from "react";
import { updateThemeAction } from "../(utils)/actions";

function CartCard({ item }) {
  function handleClick(e) {
    let cart = JSON.parse(getCookie("cart"));
    const abc = e.target.getAttribute("abc");
    console.log("🚀 ~ handleClick ~ abc:", abc);
    let newCart;
    switch (abc) {
      case "inc":
        newCart = cart.map((ele) =>
          ele.id == item.id ? { ...ele, qty: ele.qty + 1 } : ele,
        );
        break;
      case "dec":
        newCart = cart.map((ele) =>
          ele.id == item.id && ele.qty > 1 ? { ...ele, qty: ele.qty - 1 } : ele,
        );
        break;
      case "delete":
        newCart = cart.filter((ele) => ele.id != item.id);
    }
    updateThemeAction(newCart)
  }

  return (
    <article className="cart-card">
      <div className="cart-card__image-wrap">
        <img src={item.image} alt={item.title} className="cart-card__image" />
      </div>

      <div className="cart-card__content">
        <div className="cart-card__header">
          <div>
            <span className="cart-card__category">{item.category}</span>
            <h3 className="cart-card__title">{item.title}</h3>
          </div>

          <span className="cart-card__price">${item.price}</span>
        </div>

        <p className="cart-card__description">{item.description}</p>

        <div className="cart-card__footer">
          <div className="cart-card__quantity">
            <button
              type="button"
              className="cart-card__quantity-button"
              abc="dec"
              onClick={handleClick}
              aria-hidden="true"
            >
              −
            </button>

            <span className="cart-card__quantity-value">{item.qty}</span>

            <button
              type="button"
              className="cart-card__quantity-button"
              abc="inc"
              onClick={handleClick}
              aria-hidden="true"
            >
              +
            </button>
          </div>

          <button
            type="button"
            className="cart-card__remove-button"
            abc="delete"
            onClick={handleClick}
          >
            Remove
          </button>
        </div>
      </div>
    </article>
  );
}

export default CartCard;
