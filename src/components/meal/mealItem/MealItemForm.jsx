import { useRef, useState } from "react";
import Input from "../../UI/Input"

const MealItemForm = (props) => {
 const amountInputRef= useRef()
 const [amountValid , setAmountValid] = useState(true)
    
 const submitHandler = event => {
        event.preventDefault();
        const  enteredAmount = amountInputRef.current.value
        const enteredAmountNumber = +enteredAmount

        if(enteredAmount.trim().length === 0 || enteredAmountNumber < 0 || enteredAmountNumber > 5){
            setAmountValid(false)
            return
        }
        props.onAddToCart(enteredAmountNumber)
    }



  return (
    <form onSubmit={submitHandler}>
      <Input 
      label="Amount" 
      ref={amountInputRef}
      input={{
        id:"amount",
        type: "number",
        min: "1",
        max: "5",
        step: "1",
        defaultValue: "1",
      }}/>
      <button>+ Add</button>
      {!amountValid && <p>Please Enter a valid Amount (1-5)</p>}
    </form>
  )
}

export default MealItemForm
