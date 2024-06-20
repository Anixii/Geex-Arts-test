import Button from "../../Button/Button";
import { interestedSubs } from "../../utils/constans";
import Users from "../Posts/Users";

const Subscried = () => {
  return (
    <section className="rounded-[20px] px-5 py-6  bg-white">
      <h2 className="font-semibold text-[#06082C] text-xl">
        Интересные подписки
      </h2> 
      <div className="mb-5 mt-6 flex flex-col gap-y-5"> 
        {interestedSubs.map((item,i) => <Users icon={item.icon} key={i} subtitle={item.subtitle} title={item.name} isVerificated={item.isVerificated}/> )}
      </div>
      <Button
          className="text-[#06082C] bg-[#F1F3F7] px-6 w-full"
          value="Смотреть всех"
        />
    </section>
  );
};

export default Subscried;
