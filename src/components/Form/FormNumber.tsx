import { useState } from "react";
import ru from "../../assets/ru.svg";
const FormNumber = () => {
    const [phone, setPhone] = useState("+7 ");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value.replace(/[^\d]/g, "");
    console.log(input);

    if (input.startsWith("7")) {
      input = input.slice(1);
    }

    const formattedInput = input.match(/(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);

    let newPhone = "+7 ";
    if (formattedInput) {
      if (formattedInput[1]) newPhone += formattedInput[1];
      if (formattedInput[2]) newPhone += " " + formattedInput[2];
      if (formattedInput[3]) newPhone += "-" + formattedInput[3];
      if (formattedInput[4]) newPhone += "-" + formattedInput[4];
    }

    setPhone(newPhone);
  };
  return (
    <label className="flex flex-col">
      <span className="text-xs text-[#7B7EA5] font-normal">
        Номер телефона
      </span>
      <div className="mt-1 mb-6 flex items-center bg-[#F1F3F7] w-full px-3 py-[10px] rounded-[10px] gap-x-2">
        <img src={ru} alt="Russian Flag" />
        <input
          className="bg-[#F1F3F7] h-full w-full border-none outline-none"
          type="text"
          value={phone}
          onChange={handleChange}
          placeholder="+7"
          maxLength={16}
        />
      </div>
    </label>
  );
};

export default FormNumber;
