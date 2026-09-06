import { useState } from "react"
import products from "../data/products"
import ProductCard from "./ProductCard"

function Products({ cart, setCart, wishlist, setWishlist }) {
  const [search, setSearch] = useState("")
  const filteredProducts = products.filter((product) =>
  product.name.toLowerCase().includes(search.toLowerCase())
)  
  return (
    <main className="products-section">
      <h2>All Products</h2>
      <input
  type="text"
  placeholder="Search products..."
  value={search}
  onChange={(event) => setSearch(event.target.value)}
/>

      <div className="products-grid">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            cart={cart}
            setCart={setCart}
            wishlist={wishlist}
            setWishlist={setWishlist}
         />
        ))}
      </div>
    </main>
  )
}

export default Products