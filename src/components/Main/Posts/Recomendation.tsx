
import { reccomendation } from "../../utils/constans";
import cancel from "../../../assets/cancel.svg";
import Button from "../../Button/Button";
const Recomendation = () => {
  return (
    <section className="rounded-[20px] grid grid-cols-3 gap-x-3 xl:grid-cols-4  bg-white px-6 py-[28px]">
      {reccomendation.map((item, i) => (
        <div className={` rounded-[14px] relative bg_recomend flex flex-col items-center justify-center ${i === 3 ? 'hidden xl:flex' : ''}`} key={i}> 
            <img src={cancel} alt="cancel icon" className="absolute top-3 right-3"></img> 
            <div className="px-4 flex flex-col w-full items-center justify-between pt-[34px] pb-[20px]"> 
                <img  className="max-w-none w-20 h-20" src={item.icon} alt="Profile picture" /> 
                <h3 className="text-center text-sm text-white mb-[10px] mt-[6px] font-medium">{item.name} <br/> {item.lastname}</h3> 
                <Button value="Подписаться" className="text-[#06082C] w-full bg-[#F1F3F7]"/>
            </div>
        </div>
      ))}
    </section>
  );
};

export default Recomendation;
