import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { headerLang } from "../utils/constans";
import { useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const HeaderLang = () => {
  const [lang, setLang] = useState("RU");
  const handleChange = (selectedLang: SelectChangeEvent) => {
    setLang(selectedLang.target.value);
  };
  console.log(lang);
  return (
    <>
      <div>
        <Select
          value={lang}
          className="border-none border_custom"
          IconComponent={KeyboardArrowDownIcon}
          onChange={handleChange} 

        >
          {headerLang.map((item, i) => (
            <MenuItem
              value={item.label}
              className="flex p-0 justify-between items-center border-none"
              key={i}
            >
              <div className="flex p-0 justify-between items-center gap-x-[6px]">
                <img className="w-5 h-5" src={item.icon} alt="Lang icon" />
                <span>{item.label}</span>
              </div>
            </MenuItem>
          ))}
        </Select>
      </div>
    </>
  );
};

export default HeaderLang;

