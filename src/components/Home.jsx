import products from "../data/products"
import ProductCard from "./ProductCard"
function Home({ cart, setCart, wishlist, setWishlist }) {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero-content">
          <p className="hero-small-text">WELCOME TO SHOPSPHERE</p>

          <h2>
            Find Products
            <br />
            You'll Love.
          </h2>

          <p className="hero-description">
            Discover quality products at prices you'll love.
            Simple shopping, delivered to your door.
          </p>

          <button onClick={() => {
  document.querySelector(".products-section").scrollIntoView({
    behavior: "smooth",
  })
}}>
  Shop Now
</button>
        </div>

        <div className="hero-image">
  <img
    src="https://images.unsplash.com/photo-1498049794561-7780e7231661"
    alt="Featured products"
  />
</div>
      </section>
      <section className="products-section">
  <h2>Featured Products</h2>

  <div className="products-grid">
    {products.map((product) => (
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
</section>
    </main>
  )
}

export default Home