import { useCart } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./ProductCard.css";


function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-link">
         <div className="product-image">
           <img src={product.image} alt={product.name} />
         </div>
       </Link>

       <h3>{product.name}</h3>
       <p>{product.description}</p>
       <span className="price">₹{product.price}</span>

      <button
        className="add-cart-btn"
        onClick={() => addToCart(product)}
      >
        <FaShoppingCart /> Add to Cart
      </button>
    </div>
  );
}
export default ProductCard;



// import "./ProductCard.css";
// import { FaShoppingCart } from "react-icons/fa";
// import { Link } from "react-router-dom";

// function ProductCard({ product }) {
//   return (
//     <div className="product-card">      
//       <Link to={`/product/${product.id}`} className="product-link">
//         <div className="product-image">
//           <img src={product.image} alt={product.name} />
//         </div>
//       </Link>

//       <h3>{product.name}</h3>
//       <p>{product.description}</p>
//       <span className="price">{product.price}</span>

//       <button className="add-cart-btn">
//         <FaShoppingCart /> Add to Cart
//       </button>
//     </div>
//   );
// }

// export default ProductCard;

// import "./ProductCard.css";
// import { FaShoppingCart } from "react-icons/fa";

// function ProductCard({ product }) {
//   return (
//     <div className="product-card">
//       <img src={product.image} alt={product.name} />

//       <h3>{product.name}</h3>
//       <p>{product.description}</p>
//       <span className="price">{product.price}</span>

//       <button className="add-cart-btn">
//         <FaShoppingCart /> Add to Cart
//       </button>
//     </div>
//   );
// }

// export default ProductCard;



