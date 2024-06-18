import logo from "../../assets/icon.svg";
import HeaderLang from "./HeaderLang";
import HeaderLinks from "./HeaderLinks";
import HeaderProfile from "./HeaderProfile";
const Header = () => {
  return (
    <header className="h-16 flex w-full justify-between items-center">
      <div className="flex justify-between w-full  items-center gap-x-12">
        <div>
          <img alt="logo SportRec" className="w-[129px] h-auto" src={logo} />
        </div>
        <HeaderLinks />
      <div className="flex items-center justify-between gap-x-8">
        <HeaderLang />
        <HeaderProfile />
      </div>
      </div>
    </header>
  );
};

export default Header;
