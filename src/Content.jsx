import { ProductsIndex } from "./ProductsIndex";

export function Content() {
  const products = [
    { id: 1, name: "stuff" },
    { id: 2, name: "things" },
    { id: 3, name: "gizmos" },
  ];

  return (
    <div>
      <h1>Welcome to React!</h1>
      <ProductsIndex products={products} />
    </div>
  );
}
