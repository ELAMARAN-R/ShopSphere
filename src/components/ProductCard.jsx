import { Link } from "react-router-dom"

function ProductCard({ product, cart, setCart, wishlist, setWishlist }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        </div>

      <h3>{product.name}</h3>

      <p>{product.category}</p>

      <p>₹{product.price}</p>

      <p>★ {product.rating}</p>

      <Link to={`/products/${product.id}`}>
        <button>View Product</button>
      </Link>

      <button
  onClick={() => {
    const existingProduct = cart.find(
      (item) => item.id === product.id
    )

    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      )
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }}
>
  Add to Cart
</button>
<button
  onClick={() => {
    const alreadyInWishlist = wishlist.some(
      (item) => item.id === product.id
    )

    if (!alreadyInWishlist) {
      setWishlist([...wishlist, product])
    }
  }}
>
  ♡ Add to Wishlist
</button>
    </div>
  )
}

export default ProductCard