import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import "../styles/ProductCard.css";


function ProductCard({product}) {
    const dispatch = useDispatch();

    const handleAddToCart = () =>{
        dispatch(addToCart(product));
        alert("Product Added to Cart");
    };

    return(
        <div className="card">
            <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.name} />   
            </Link>

            <Link to={`/product/${product.id}`} className="product-link">
                <h3>{product.name}</h3>
            </Link>           

                <p>₹ {product.price}</p>

            
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
}

export default ProductCard;