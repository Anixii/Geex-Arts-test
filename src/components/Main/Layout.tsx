import Post from "./Posts/Post";
import poster from "../../assets/ads.png";
import { filterLinks, mainPosts } from "../utils/constans";
import Button from "../Button/Button";
import CelebratePost from "./Posts/CelebratePost";
import Recomendation from "./Posts/Recomendation";
import NewsList from "./News/NewsList";
import Subscried from "./Subscried/Subscried";
import Banner from "./Banner/Banner";

const MainLayout = () => {
  return (
    <main className="flex gap-x-6 min-h-[100vh]">
      <div className="flex-[2] flex flex-col gap-y-5">
        <div className="rounded-[20px] bg-white px-6 py-[28px]">
          <Post
            category={mainPosts[0].category}
            commentsCount={mainPosts[0].comments.length}
            description={mainPosts[0].subtitle}
            images={mainPosts[0].images}
            time={mainPosts[0].time}
            title={mainPosts[0].title}
            comments={mainPosts[0].comments}
            viewsCount={mainPosts[0].views}
          >
            <Button
              className="text-[#06082C] bg-[#F1F3F7] px-6 w-auto mt-6"
              value="Смотреть все комментарии"
            />
          </Post>
        </div>
        <div className="w-full">
          <img src={poster} className="w-full h-auto" alt="Ads poster" />
        </div>
        <CelebratePost />
        <Recomendation />
        <div className="rounded-[20px] bg-white px-6 py-[28px]">
          <Post
            category={mainPosts[1].category}
            commentsCount={mainPosts[1].comments.length}
            description={mainPosts[1].subtitle}
            images={mainPosts[1].images}
            time={mainPosts[1].time}
            title={mainPosts[1].title}
            comments={mainPosts[1].comments}
            viewsCount={mainPosts[1].views}
          />
        </div>
        <div className="rounded-[20px] bg-white px-6 py-[28px]">
          <Post
            category={mainPosts[2].category}
            commentsCount={mainPosts[2].comments.length}
            description={mainPosts[2].subtitle}
            images={mainPosts[2].images}
            time={mainPosts[2].time}
            title={mainPosts[2].title}
            comments={mainPosts[2].comments}
            viewsCount={mainPosts[2].views}
          />
        </div>
      </div>
      <aside className="flex-[1] flex flex-col gap-y-6">
        <section className="rounded-[20px] px-5 py-6  bg-white">
          <h2 className="font-semibold text-[#06082C] text-xl">Фильтр ленты</h2>
          <ul className="flex flex-col mt-6 gap-y-3">
            {filterLinks.map((item, i) => (
              <li className={`p-[10px] flex font-medium text-sm items-center rounded-[10px] gap-x-3 ${item.active ? 'bg-[#F1F3F7] text-[#06082C]' : 'text-[#7B7EA5]'}`} key={i}>
                <img src={item.icon} alt={"icon"} /> 
                {item.title}
              </li>
            ))}
          </ul>
        </section> 
        <Banner/>
        <Subscried/>
        <NewsList/>
      </aside>
    </main>
  );
};

export default MainLayout;
