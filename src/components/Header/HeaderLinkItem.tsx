/* eslint-disable @typescript-eslint/no-explicit-any */
const HeaderLinkItem = ({label, icon}: {label: string, icon:any}) => {
  return (
    <>
      <li className="flex items-center hover:cursor-pointer" >
        <img className="mr-[10px]" src={icon} alt={label} />
        <span className="font-medium">{label}</span>
      </li>
    </>
  );
};

export default HeaderLinkItem;
