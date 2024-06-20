import  Button  from "../../Button/Button";
import { news } from "../../utils/constans";
import NewsItem from "./NewsItem";

const NewsList = () => {
  return (
    <section className="rounded-[20px] px-5 py-6  bg-white">
      <h2 className="font-semibold text-[#06082C] text-xl">
        Последние новости
      </h2>
      <div className="flex flex-col gap-y-4 mt-6 mb-5">
        {news.map((item, i) => (
          <NewsItem
            key={i}
            category={item.category}
            time={item.time}
            title={item.title}
          />
        ))}
      </div>
      <Button
          className="text-[#06082C] bg-[#F1F3F7] px-6 w-full mt-6"
          value="Смотреть все"
        />
    </section>
  );
};

export default NewsList;
