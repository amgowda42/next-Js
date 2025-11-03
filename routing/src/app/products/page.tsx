import Link from "next/link";

interface Product {
  id: number;
  name: string;
}

export default function Products() {
  const product: Product[] = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" },
    { id: 4, name: "Product 4" },
  ];

  return (
    <>
      <h1>Products Page</h1>
      <ol >
        <li className="flex flex-col gap-3">
          {product.map((pro) => (
            <Link key={pro.id} href={`/products/${pro.id}`}>
              Product {pro.id}
            </Link>
          ))}
        </li>
      </ol>
    </>
  );
}
