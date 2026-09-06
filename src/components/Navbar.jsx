import { Link } from "react-router-dom"

function Navbar({ cart }) {
  return (
    <nav>
      <h1>ShopSphere</h1>

      <div>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/wishlist">Wishlist</Link>
        <Link to="/cart">Cart ({cart.length})</Link>
      </div>
    </nav>
  )
}

export default Navbar