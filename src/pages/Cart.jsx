import { useCart } from "../context/CartContext";
import "./Cart.css";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, removeFromCart, updateQty, total } = useCart();

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map((item) => (
          <div className="cart-card" key={item.id}>

            {/* ✅ CLICKABLE IMAGE */}
            <Link to={`/product/${item.id}`} className="cart-link">
              <img src={item.image} alt={item.name} />
            </Link>

            <div className="cart-details">

              {/* ✅ CLICKABLE NAME */}
              <Link to={`/product/${item.id}`} className="cart-link">
                <h4>{item.name}</h4>
              </Link>

              <p>{item.description}</p>
              <span className="cart-price">₹{item.price}</span>

              <div className="cart-actions">

                <div className="quantity-box">
                  <span
                    className="qty-btn"
                    onClick={() => updateQty(item.id, "dec")}
                  >
                    -
                  </span>

                  <span className="qty-count">{item.qty}</span>

                  <span
                    className="qty-btn"
                    onClick={() => updateQty(item.id, "inc")}
                  >
                    +
                  </span>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))
      )}

      <div className="cart-summary">
        <h3>Total: ₹{total}</h3>
        <button className="checkout-btn">Checkout</button>
      </div>
    </div>
  );
}

export default Cart;

// import { useCart } from "../context/CartContext";
// import "./Cart.css";
// import { Link } from "react-router-dom";

// function Cart() {
//   const { cart, removeFromCart, updateQty, total } = useCart();

//   return (
//     <div className="cart-container">
//       <h2>Your Cart</h2>

//       {cart.length === 0 ? (
//         <p>Cart is empty</p>
//       ) : (
//         cart.map((item) => (
//           <div className="cart-card" key={item.id}>
//             <img src={item.image} alt={item.name} />

//             <div className="cart-details">
//               <h4>{item.name}</h4>
//               <p>{item.description}</p>
//               <span className="cart-price">₹{item.price}</span>

//               <div className="cart-actions">

//                 <div className="quantity-box">
//                   <span
//                     className="qty-btn"
//                     onClick={() => updateQty(item.id, "dec")}
//                   >
//                     -
//                   </span>

//                   <span className="qty-count">{item.qty}</span>

//                   <span
//                     className="qty-btn"
//                     onClick={() => updateQty(item.id, "inc")}
//                   >
//                     +
//                   </span>
//                 </div>

//                 <button
//                   className="remove-btn"
//                   onClick={() => removeFromCart(item.id)}
//                 >
//                   Remove
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))
//       )}

//       <div className="cart-summary">
//         <h3>Total: ₹{total}</h3>
//         <button className="checkout-btn">Checkout</button>
//       </div>
//     </div>
//   );
// }

// export default Cart;

