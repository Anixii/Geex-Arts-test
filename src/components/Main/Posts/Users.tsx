/* eslint-disable @typescript-eslint/no-explicit-any */
import verificated from "../../../assets/verificated.svg";
import add from "../../../assets/add.svg";
const Users = ({title, subtitle,icon, isVerificated}:{title:string, subtitle:string, icon:any, isVerificated: boolean}) => {
  return (
    <div className="flex justify-between items-center w-full gap-x-1">
          <div className="flex gap-x-3 items-start">
            <div>
              <img
                className="max-w-none w-10 h-10 rounded-[50%]"
                src={icon}
                alt="Profile image"
              />
            </div>
            <div className="flex flex-col">
              <h4 className="text-[#06082C] text-sm font-medium flex items-center gap-x-1">
                {title}{" "}
                {isVerificated && <img src={verificated} className="w-max-none" alt={"Verify icon"}></img>}
              </h4>
              <h5 className="text-[#06082C] text-xs font-medium mt-1 line-clamp-1">
                {subtitle}
              </h5>
            </div>
          </div>
          <div> 
            <button className="bg-[#F1F3F7] w-10 h-10 rounded-[10px] p-[10px]"> 
                <img className="w-max-none" src={add} alt="Add icon" />
            </button>
          </div>
        </div>
  )
}

export default Users