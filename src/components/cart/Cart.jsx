import Modal from "../UI/Modal"
import { useContext } from "react"
import CartItem from "./CartItem"
import CartContext from "../../store/cart.context"

const Cart = (props) => {
    const cartCtx = useContext(CartContext)


    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id)
    }

    const cartItemAddHandler = item => {
        cartCtx.addItem({...item, amount:1})
    }
    
    const cartItem = <ul>
    {cartCtx.items.map(item => 
    <CartItem  
    key={item.id} 
    name={item.name} 
    amount = {item.amount} 
    price = {item.price}  
    onRemove={cartItemRemoveHandler.bind(null, item.id)} 
    onAdd = {cartItemAddHandler.bind(null, item)
    }/>)}
    </ul>
     
    const hasItems = cartCtx.items.length > 0


    return (
        <Modal onClose = {props.onClose}>
            {cartItem}
            <div>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div>
                <button onClick={props.onClose}>Close</button>
                {hasItems && <button onClick={()=>{ console.log("Ordering...") }}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart
