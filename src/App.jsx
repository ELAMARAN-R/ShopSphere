import "./App.css"
import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Products from "./components/Products"
import ProductDetails from "./components/ProductDetails"
import Cart from "./components/Cart"
import Wishlist from "./components/Wishlist"
import Checkout from "./components/Checkout"
import OrderConfirmation from "./components/OrderConfirmation"

function App() {
  const [cart, setCart] = useState(() => {
  const savedCart = localStorage.getItem("cart")
  return savedCart ? JSON.parse(savedCart) : []
})

const [wishlist, setWishlist] = useState(() => {
  const savedWishlist = localStorage.getItem("wishlist")
  return savedWishlist ? JSON.parse(savedWishlist) : []
})
useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart))
}, [cart])

useEffect(() => {
  localStorage.setItem("wishlist", JSON.stringify(wishlist))
}, [wishlist])
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="app">
        <Navbar cart={cart} />

        <Routes>
          <Route
            path="/"
            element={
              <Home
                cart={cart}
                setCart={setCart}
                wishlist={wishlist}
                setWishlist={setWishlist}
              />
            }
          />
          <Route
            path="/products"
            element={
              <Products
                cart={cart}
                setCart={setCart}
                wishlist={wishlist}
                setWishlist={setWishlist}
              />
            }
          />
          <Route
            path="/products/:id"
            element={
              <ProductDetails
                cart={cart}
                setCart={setCart}
                wishlist={wishlist}
                setWishlist={setWishlist}
              />
            }
          />
          <Route
             path="/cart"
             element={<Cart cart={cart} setCart={setCart} />}
          />
          <Route
            path="/wishlist"
            element={
              <Wishlist
                wishlist={wishlist}
                setWishlist={setWishlist}
              />
            }
          />
         <Route path="/checkout" element={<Checkout setCart={setCart} />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
