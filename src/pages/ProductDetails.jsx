import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products";
import "./ProductDetails.css";
import { FaShoppingCart, FaBolt } from "react-icons/fa";
import { useCart } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2 style={{ textAlign: "center" }}>Product not found</h2>;
  }
  
  const handleAddToCart = () => {
    addToCart(product);
  };
  
  const handleBuyNow = () => {
    addToCart(product);
    navigate("/cart");
  };

  return (
    <div className="product-details">
      <div className="details-card">
        <img src={product.image} alt={product.name} />

        <div className="details-info">
          <h2>{product.name}</h2>
          <span className="price">₹{product.price}</span>

          <p className="description">{product.description}</p>

          <div className="details-buttons">
              <div className="action-row">
              <button className="cart-btn" onClick={handleAddToCart}>
                <FaShoppingCart /> Add to Cart
              </button>

              <button className="buy-btn" onClick={handleBuyNow}>
                <FaBolt /> Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

// import { useParams, useNavigate } from "react-router-dom";
// import products from "../data/products";
// import "./ProductDetails.css";
// import { FaComments, FaShoppingCart, FaBolt } from "react-icons/fa";
// import { useCart } from "../context/CartContext";

// const ProductDetails = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { addToCart } = useCart();

//   const product = products.find((p) => p.id === parseInt(id));

//   if (!product) {
//     return <h2 style={{ textAlign: "center" }}>Product not found</h2>;
//   }

//   // ✅ Add to Cart
//   const handleAddToCart = () => {
//     addToCart(product);
//   };

//   // ✅ Buy Now
//   const handleBuyNow = () => {
//     addToCart(product);
//     navigate("/cart");   // redirect
//   };

//   return (
//     <div className="product-details">
//       <div className="details-card">
//         <img src={product.image} alt={product.name} />

//         <div className="details-info">
//           <h2>{product.name}</h2>
//           <span className="price">₹{product.price}</span>

//           <p className="description">{product.description}</p>

//           <div className="details-buttons">
//             <button className="chat-btn">
//               <FaComments /> Chat with Seller
//             </button>

//             <div className="action-row">
//               {/* ✅ FIXED */}
//               <button className="cart-btn" onClick={handleAddToCart}>
//                 <FaShoppingCart /> Add to Cart
//               </button>

//               {/* ✅ FIXED */}
//               <button className="buy-btn" onClick={handleBuyNow}>
//                 <FaBolt /> Buy Now
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;




// // import { useParams } from "react-router-dom";
// // import products from "../data/products";
// // import "./ProductDetails.css";
// // import { FaComments, FaShoppingCart, FaBolt } from "react-icons/fa";
// // import { useCart } from "../context/CartContext";
// // import { useNavigate, useParams } from "react-router-dom";

// // const { id } = useParams();
// // const navigate = useNavigate();
// // const { addToCart } = useCart();

// // const product = products.find((p) => p.id === parseInt(id));

// // const handleAddToCart = () => {
// //   addToCart(product);
// // };

// // const handleBuyNow = () => {
// //   addToCart(product);
// //   navigate("/cart");   // ✅ redirect
// // };


// // const ProductDetails = () => {
// //   const { id } = useParams();
// //   const product = products.find(p => p.id === parseInt(id));

// //   if (!product) {
// //     return <h2 style={{ textAlign: "center" }}>Product not found</h2>;
// //   }

// //   return (
// //     <div className="product-details">
// //       <div className="details-card">
// //         <img src={product.image} alt={product.name} />

// //         <div className="details-info">
// //           <h2>{product.name}</h2>
// //           <p className="category">{product.category}</p>
// //           <span className="price">{product.price}</span>

// //           <p className="description">{product.description}</p>

// //         <div className="details-buttons">
// //             <button className="chat-btn">
// //                 <FaComments /> Chat with Seller
// //             </button>
// //         <div className="action-row">
// //             <button className="cart-btn">
// //                 <FaShoppingCart /> Add to Cart
// //             </button>
// //             <button className="buy-btn">
// //                 <FaBolt /> Buy Now
// //             </button>
// //   </div>

// // </div>

// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProductDetails;
