import Post from "./Posts/Post";
import poster from "../../assets/ads.png";
import { mainPosts } from "../utils/constans";
import Button from "../Button/Button";
import CelebratePost from "./Posts/CelebratePost";


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
        <CelebratePost/>
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
      <aside className="rounded-[20px] px-5 py-6  bg-white flex-[1]"></aside>
    </main>
  );
};

export default MainLayout;
