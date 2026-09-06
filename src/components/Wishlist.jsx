function Wishlist({ wishlist, setWishlist }) {
  return (
    <main className="products-section">
      <h2>Your Wishlist</h2>

      {wishlist.length === 0 ? (
        <p>Your wishlist is currently empty.</p>
      ) : (
        <div className="products-grid">
          {wishlist.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                </div>

              <h3>{product.name}</h3>
              <p>{product.category}</p>
              <p>₹{product.price}</p>
              <p>★ {product.rating}</p>
              <button
                onClick={() => {
                    setWishlist(
                    wishlist.filter((item) => item.id !== product.id)
                    )
                }}
                >
                Remove from Wishlist
                </button>
            </div>
          ))}
        </div>
      )}
    </main>
  )
}

export default Wishlist