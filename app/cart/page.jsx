import { getCookie } from "cookies-next/server";
import CartCard from "../(components)/CartCard";
import { cookies } from "next/headers";
async function page() {
  const data = await getCookie("cart", { cookies });
  const cart = JSON.parse(data);
  return (
    <div className="cart-conatiner">
      <h2>cart</h2>
      {cart.map((item) => (
        <CartCard item={item} />
      ))}
    </div>
  );
}

export default page;
