import { MenuItem, Select } from "@mui/material";
import { headerLang } from "../utils/constans";

const HeaderLang = () => {
  return (
    <>
      <div>
        <Select>
          {headerLang.map((item, i) => (
            <MenuItem className="flex items-center" key={i}> 
                <img src={item.icon} alt="Lang icon" />
                <span >{item.label}</span>
            </MenuItem>
          ))}
        </Select>
      </div>
    </>
  );
};

export default HeaderLang;
