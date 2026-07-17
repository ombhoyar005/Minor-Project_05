import "../styles/ProductDetails.css";
import { useParams } from "react-router-dom";
import products from "../data/product.js";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <div className="product-details">
      <div className="details-card">
        <img src={product.image} alt={product.name} />

        <div className="details">
          <h1>{product.name}</h1>

          <h2>₹ {product.price}</h2>

          <p>{product.description}</p>

          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;