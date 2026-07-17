import "../styles/Home.css";
import { Link } from "react-router-dom";

function Home(){
    return(
        <div className="home">
            <div className="hero">
                <h1>Welcome to ShopEasy</h1>

                <p>Find your favourite fashions, electronics and accessories at best price</p>
                
                <Link to="/products">
                    <button>Shop Now</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;