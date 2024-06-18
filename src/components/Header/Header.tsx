import logo from "../../assets/icon.svg";
import HeaderLang from "./HeaderLang";
import HeaderLinks from "./HeaderLinks";
const Header = () => {
  return (
    <header className="h-16 flex w-full items-center">
      <div className="flex justify-between items-center w-full">
        <div>
          <img alt="logo SportRec" src={logo} />
        </div>
        <HeaderLinks /> 
        <div>
          <HeaderLang/>
        </div>
      </div>
    </header>
  );
};

export default Header;
