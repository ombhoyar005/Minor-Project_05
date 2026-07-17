import "../styles/Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";

function Cart(){
    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(removeFromCart(id));
    };

    return(
        <div className="cart-box">
            <h1>Shopping Cart</h1>

            {cartItems.length === 0 ? (
                <h3>Your cart is empty.</h3>
            ) : (
                cartItems.map((item) => (
                    <div className="cart-card" key={item.id}>
                        <img src={item.image} alt={item.name} />
                    
                        <div className="cart-details">
                            <h3>{item.name}</h3>
                            <p>₹ {item.price}</p>
                            
                            <button onClick={() => handleRemove(item.id)}>Remove</button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}

export default Cart;