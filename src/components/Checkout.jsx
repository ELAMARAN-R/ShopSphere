import { useNavigate } from "react-router-dom"
function Checkout({ setCart }) {
  const navigate = useNavigate()
  return (
    <main className="products-section">
      <h2>Checkout</h2>

      <form
            className="checkout-form"
            onSubmit={(event) => {
            event.preventDefault()
           setCart([])
            navigate("/order-confirmation")
            }}
            >
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Address" />
        <input type="text" placeholder="City" />
        <input type="text" placeholder="Pincode" />

        <button type="submit">
          Place Order
        </button>
      </form>
    </main>
  )
}

export default Checkout