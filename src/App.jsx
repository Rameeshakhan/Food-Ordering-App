
import { useState } from "react"
import Cart from "./components/cart/Cart"
import Header from "./components/layout/Header"
import Meal from "./components/meal/Meal"
import CartProvider from "./store/cartProvider"

const App = () => {
  const [showCart , setShowCart] = useState(false)

  const showCartHandler = () => {
    setShowCart(true)
  }

  const hideCartHandler = () => {
    setShowCart(false)
  }
  return (
    <CartProvider>
      { showCart && <Cart onClose ={hideCartHandler}/> }
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meal/>
      </main>
    </CartProvider>
  )
}

export default App
