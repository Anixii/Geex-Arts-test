import { competitives } from "../../utils/constans";
import timetable from "../../../assets/timetable.svg";
import address from "../../../assets/address.svg";
const CompetitiveList = () => {
  return (
    <>
      <div className="flex flex-col gap-y-6">
        {competitives.map((item, i) => (
          <div key={i}>
            <img
              src={item.image}
              alt="Competitives Image"
              className="max-w-none w-full h-auto"
            />
            <div className="flex mt-4 mb-[10px]  justify-between text-[#7B7EA5] items-center line-clamp-1 text-sm">
              <div className="flex items-center gap-x-2">
                <img src={timetable} className="max-w-none" alt="Icon" />
                {item.time}
              </div>
              •
              <div className="flex items-center gap-x-2">
                <img src={address} className="max-w-none" alt="Icon" />
                {item.locations}
              </div>
            </div>
            <h2 className="text-xl text-[#06082C] font-semibold line-clamp-3">
              {item.title}
            </h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default CompetitiveList;
