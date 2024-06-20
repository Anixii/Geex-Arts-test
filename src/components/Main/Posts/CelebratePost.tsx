import Button from "../../Button/Button";
import Users from "./Users";
import magaAva from "../../../assets/maga.svg";
import firstMedalIcon from "../../../assets/firstMedal.svg";
import maga from "../../../assets/maga.svg";
const CelebratePost = () => {
  return (
    <div className="rounded-[20px] bg-white px-6 py-[28px]">
      <section>
        <h3 className="text-[#9395B8] text-xs font-normal">
          24 февраля, 2024 в 15:55
        </h3>
        <div className="mt-3">
          <Users
            isVerificated={true}
            icon={maga}
            subtitle="Спортсмен • Призер Олимпийских игр, двукратный призер
          чемпионатов мира"
            title="Александр Магомедов"
          />
        </div>
        <div className="bg-[#F8F8F9] flex-col py-3 px-[10px] rounded-xl flex items-center mb-6 mt-4 justify-center">
          <img src={firstMedalIcon} alt="Medal Icon" />
          <h3 className="font-semibold text-sm text-[#06082C]  text-center mt-4 mb-2">
            Занял 1-е место
          </h3>
          <h4 className="font-medium text-sm text-[#7B7EA5] text-center">
            В Спортивном чемпионате 2024 по греко-римской борьбе среди юниоров
            до 24{" "}
          </h4>
        </div>
        <div className="flex items-center font-semibold text-sm text-[#06082C] gap-x-1 ">
          <img
            className="w-max-none w-5 h-5"
            src={magaAva}
            alt="Profile icon"
          />
          <span>Дмитрий Зайцев </span>
          <span className="font-medium text-sm text-[#7B7EA5] ">
            и еще 500 человек поздравили
          </span>
        </div>
        <Button
          className="text-white bg-[#06082C] px-6 w-auto mt-6"
          value="Поздравить"
        />
      </section>
    </div>
  );
};

export default CelebratePost;
