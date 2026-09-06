import { Link } from "react-router-dom"

function OrderConfirmation() {
  return (
    <main className="products-section">
      <h2>Order Placed Successfully! 🎉</h2>

      <p>
        Thank you for shopping with ShopSphere.
      </p>

      <Link to="/products">
        <button>Continue Shopping</button>
      </Link>
    </main>
  )
}

export default OrderConfirmation