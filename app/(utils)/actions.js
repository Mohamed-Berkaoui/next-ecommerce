"use server";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { setCookie } from "cookies-next/server";

export async function updateThemeAction(cart) {
  await setCookie("cart", JSON.stringify(cart), { cookies });
  // Triggers server components on this path to re-fetch/re-render
  revalidatePath("/");
}
