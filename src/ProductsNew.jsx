export function ProductsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateProduct(params);
    event.target.reset();
  };

  return (
    <div>
      <h2>Add Products</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input type="text" name="name" />
        </div>
        <div>
          Price: <input type="number" name="price" />
        </div>
        <div>
          Description: <input type="text" name="description" />
        </div>
        <div>
          Inventory: <input type="number" name="inventory" />
        </div>
        <div>
          Supplier: <input type="number" name="supplier_id" />
        </div>
        <div>
          Image URL: <input type="url" name="image_url" />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}
