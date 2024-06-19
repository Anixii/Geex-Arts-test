/* eslint-disable @typescript-eslint/no-explicit-any */
const HeaderLinkItem = ({label, icon,active}: {label: string, icon:any, active: boolean}) => {
  return (
    <>
      <li className="flex items-center hover:cursor-pointer" >
        <img className="mr-[10px]" src={icon} alt={label} />
        <span className={`font-medium ${active ? 'text-black' : 'text-[#9395B8]'}`}>{label}</span>
      </li>
    </>
  );
};

export default HeaderLinkItem;
