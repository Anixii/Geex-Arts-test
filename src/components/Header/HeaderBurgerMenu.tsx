
import Container from "../Container/Container";
import { headerLinks } from "../utils/constans";
import HeaderLinkItem from "./HeaderLinkItem";
import HeaderLang from "./HeaderLang";
import Button from "../Button/Button";
import logo from "../../assets/icon.svg";

const HeaderBurgerMenu = ({
  isOpen,
  onHandleClick,
}: {
  isOpen: boolean;
  onHandleClick: () => void;
}) => {
  return (
    <>
      <div className=" absolute bg-white top-0 left-0 right-0 h-[100dvh] w-[100vw]">
        <Container>
          <div className="flex items-center justify-between h-[52px]">
            <img
              alt="logo SportRec"
              className="w-[129px] h-auto max-w-none"
              src={logo}
            />
            <div>
              <HeaderBurgerMenu isOpen={isOpen} onHandleClick={onHandleClick}/>
            </div>
          </div>
        </Container>
        
          <nav className="py-6 h-[calc(100%-52px)]">
            <Container classname="h-full">
              <div className="h-full flex flex-col justify-between gap-y-6">
                <ul className="flex flex-col gap-y-9">
                  {headerLinks.map((item, i) => (
                    <HeaderLinkItem
                      key={i}
                      label={item.label}
                      icon={item.icon}
                    />
                  ))}
                  <HeaderLang />
                </ul>
                <div className="flex flex-col gap-y-4">
                  <Button
                    className="bg-[#06082C] text-white"
                    value="Зарегестрироваться"
                  />
                  <Button
                    className="text-[#06082C] bg-[#F1F3F7]"
                    value="Войти"
                  />
                </div>
              </div>
            </Container>
          </nav>
      </div>
    </>
  );
};

export default HeaderBurgerMenu;
