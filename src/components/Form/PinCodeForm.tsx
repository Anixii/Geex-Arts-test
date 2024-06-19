
import PinField from "react-pin-field";
const PinCodeForm = () => {
  return (
    <label className="flex gap-x-4 mb-6 "> 
        <PinField length={6} type="number" className=" rounded-[10px] w-10 h-10 bg-[#F1F3F7] outline-none flex justify-center items-center text-center"/>
    </label>
  )
}

export default PinCodeForm