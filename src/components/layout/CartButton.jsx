import { useContext } from "react"
import CartContext from "../../store/cart.context"
const CartButton = (props) => {
   const cartctx = useContext(CartContext)
   const numberofCartItems = cartctx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount
   }, 0)
    return (
        <>
            <button onClick={props.onClick}>
                <span>
                    icon
                </span>
                <span>Your Cart</span>
                <span>
                    {numberofCartItems}
                </span>
            </button>
        </>
    )
}

export default CartButton
