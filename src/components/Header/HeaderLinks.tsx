import { headerLinks } from "../utils/constans";
import HeaderLinkItem from "./HeaderLinkItem";
const HeaderLinks = () => {
  return (
    <nav>
      <ul className="hidden lg:flex items-center justify-between gap-x-6">
        {headerLinks.map((item, index) => (
          <HeaderLinkItem key={index} active={item.active} icon={item.icon} label={item.label}/>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderLinks;
