import logo from "../../assets/icon.svg";
import HeaderBurgerBtn from "./HeaderBurgerBtn";
import HeaderBurgerMenu from "./HeaderBurgerMenu";
import HeaderLang from "./HeaderLang";
import HeaderLinks from "./HeaderLinks";
import HeaderProfile from "./HeaderProfile";
const Header = ({
  isOpen,
  onHandleClick,
}: {
  isOpen: boolean;
  onHandleClick: () => void;
}) => { 
  console.log(isOpen);
  
  return (
    <header className="h-16 flex w-full justify-between items-center">
      <div className="flex justify-between w-full  items-center gap-x-7 xl:gap-x-12">
        <div>
          <img
            alt="logo SportRec"
            className="w-[129px] h-auto max-w-none"
            src={logo}
          />
        </div>
        <HeaderLinks />
        <div className="hidden lg:flex items-center justify-between gap-x-5 xl:gap-x-8">
          <HeaderLang />
          <HeaderProfile />
        </div>
        <div className="block lg:hidden">
          {isOpen && (
            <HeaderBurgerMenu isOpen={isOpen} onHandleClick={onHandleClick} />
            // <p>hello</p>
          )}
          <HeaderBurgerBtn isOpen={isOpen} onHandleClick={onHandleClick} />
        </div>
      </div>
    </header>
  );
};

export default Header;
