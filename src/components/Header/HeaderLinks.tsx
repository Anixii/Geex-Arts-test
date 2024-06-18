import { headerLinks } from "../utils/constans";
const HeaderLinks = () => {
  return (
    <nav>
      <ul className="flex items-center justify-between gap-x-6">
        {headerLinks.map((item, index) => (
          <li className="flex items-center hover:cursor-pointer" key={index}>
            <img className="mr-[10px]" src={item.icon} alt={item.label} /> 
            <span className="font-medium">{item.label}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderLinks;
