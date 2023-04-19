export function ProductsIndex(props) {
  return (
    <div>
      <h2>These are Products</h2>
      {props.products.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
}
