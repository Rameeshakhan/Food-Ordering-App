import React from "react"

// eslint-disable-next-line react/display-name
const Input = React.forwardRef((props ,ref) => {
  return (
    <div>
      <label>{props.label}</label>
      <input ref= {ref} {...props.input}/>
    </div>
  )
})

export default Input
