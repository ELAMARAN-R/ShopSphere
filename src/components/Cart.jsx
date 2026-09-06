import { Link } from "react-router-dom"
function Cart({ cart, setCart }) {
    const total = cart.reduce(
      (sum, product) => sum + product.price * product.quantity,
      0
    )
  return (
    <main className="products-section">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is currently empty.</p>
      ) : (
        <div className="products-grid">
          {cart.map((product, index) => (
            <div className="product-card" key={`${product.id}-${index}`}>
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                </div>

              <h3>{product.name}</h3>
              <p>₹{product.price}</p>
        <div className="cart-quantity">
             <button
              onClick={() => {
                if (product.quantity > 1) {
                  setCart(
                   cart.map((item, cartIndex) =>
                     cartIndex === index
                       ? { ...item, quantity: item.quantity - 1 }
                       : item
                   )
                )
      }
    }}
  >
    −
  </button>

  <span> {product.quantity} </span>

  <button
    onClick={() => {
      setCart(
        cart.map((item, cartIndex) =>
          cartIndex === index
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      )
    }}
  >
    +
  </button>
</div>
              <p>★ {product.rating}</p>
              <button
                onClick={() => {
                  setCart(
                   cart.filter((_, cartIndex) => cartIndex !== index)
                 )
                }}
            >
              Remove
            </button>
            </div>
          ))}
        </div>
      )}
      {cart.length > 0 && (
  <div>
    <h3>Total: ₹{total}</h3>
    <Link to="/checkout">
        <button>Proceed to Checkout</button>
    </Link>
  </div>
)}
    </main>
  )
}

export default Cart