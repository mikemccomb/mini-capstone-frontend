export function ProductsIndex(props) {
  return (
    <div>
      <h2>These are Products</h2>
      {props.products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <img src={product.images[0].url} alt={product.name} />
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
}
