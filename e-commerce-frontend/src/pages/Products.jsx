import products from "../data/product.js";
import ProductCard from "../components/ProductCard.jsx";
import "../styles/Products.css";



function Products(){
    return(
        <div className="products-box">
            <h1>Our Products</h1>

            <div className="products-grid">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default Products;