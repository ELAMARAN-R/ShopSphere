import { useParams } from "react-router-dom"
import products from "../data/products"

function ProductDetails({
  cart,
  setCart,
  wishlist,
  setWishlist,
}) {
  const { id } = useParams()

  const product = products.find(
    (product) => product.id === Number(id)
  )

  if (!product) {
    return <h2>Product not found</h2>
  }

  return (
    <main className="products-section">
      <h2>{product.name}</h2>

      <div className="product-card">
        <div className="product-image">
           <img src={product.image} alt={product.name} />
        </div>

        <p>Category: {product.category}</p>
        <p>Price: ₹{product.price}</p>
        <p>Rating: ★ {product.rating}</p>

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
    </main>
  )
}

export default ProductDetails