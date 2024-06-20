import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import searchIcon from "../../../assets/searchIcon.svg";
import Button from "../../Button/Button";
import { useState } from "react";
import CompetitiveList from "./CompetitiveList";
const Competitives = () => {
  const [value, setValue] = useState("1");

  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <div className="rounded-s-[20px]   px-5 py-6  flex flex-col bg-white">
      <h2 className=" mb-3 text-[#06082C] text-xl font-semibold">
        Список соревнований
      </h2>
      <div className="flex items-center gap-x-3">
        <div className=" text-[#9395B8] bg-[#F8F8F9] flex items-center gap-x-2  py-[10px] px-3 rounded-[10px]">
          <img src={searchIcon} alt="search Icon" />{" "}
          <input
            placeholder="Поиск"
            className="w-full h-full outline-none bg-[#F8F8F9]"
            type="text"
          />
        </div>
        <Button value="Найти" className="px-9 bg-[#06082C] text-white" />
      </div>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            variant="scrollable"
            onChange={handleChange}
            aria-label="lab API tabs example"
          >
            <Tab className="text-[#06082C]" label="Предстоящие 15" value="1" />
            <Tab className="text-[#06082C]" label="Текущие 15" value="2" />
            <Tab className="text-[#06082C]" label="Прошедшие 11" value="3" />
          </TabList>
        </Box>
        <TabPanel className="panel__tab" value="1">
          <CompetitiveList />
        </TabPanel>
        <TabPanel className="panel__tab" value="2">
          <CompetitiveList />
        </TabPanel>
        <TabPanel className="panel__tab" value="3">
          <CompetitiveList />
        </TabPanel>
      </TabContext> 
      <Button
              className="text-[#06082C] bg-[#F1F3F7] px-6 w-auto mt-6"
              value="Смотреть все"
            />
    </div>
  );
};

export default Competitives;
