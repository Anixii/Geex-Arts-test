import React from "react"

type ButtonType = { 
    className?: string,  
    value:string,
    handleClick?:() => void

}
const Button = React.forwardRef<HTMLButtonElement, ButtonType>(
  ({ className,value,handleClick,...props }, ref) => {
    // '#06082C' : '#F1F3F7'
    return (
      <button onClick={handleClick} ref={ref} className={`py-[10px] rounded-[10px] w-auto text-[14px] font-medium ${className}` } {...props}>{value}</button>
    )
  }
)

export default Button