"use client";
import { useRouter } from "next/navigation";
export default function ProductDetails() {
  const router = useRouter();

  return (
    <>
      <h1>Order Product Page</h1>
      <button onClick={() => router.replace("/")}>Placing the order</button>
    </>
  );
}
