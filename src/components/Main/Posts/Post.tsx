/* eslint-disable @typescript-eslint/no-explicit-any */ 
import viewsIcon from '../../../assets/view.svg'
import commentIcon from '../../../assets/comments.svg'
import Comment, { CommentPropsType } from './Comment' 
type PostPropsType = { 
    category: string, 
    time: string, 
    title: string, 
    description: string, 
    images: Array<any> | undefined, 
    viewsCount: string, 
    commentsCount: number, 
    comments: CommentPropsType[], 
    children?: React.ReactNode,
}
const Post = ({category,time,description,title, images,commentsCount,viewsCount,comments,children}:PostPropsType) => {
  return (
    <section>
        <h3 className="text-[#9395B8] text-xs font-normal">{category} • {time}</h3> 
        <h2 className="text-xl font-semibold text-[#06082C] mt-3 mb-5">{title}</h2> 
        <h4 className="line-clamp-2 text-[#7B7EA5] text-sm font-medium">{description}</h4> 
        <div className='grid grid-cols-2 xl:grid-cols-3 gap-x-[10px] mb-4 mt-5  gap-y-3 w-full'> 
            {images?.map((item,index) => <img className='w-full h-auto ' src={item} key={index} alt="Image of Post"/>)}
        </div> 
        <div className='flex items-center gap-x-5'> 
            <div className='text-[#7B7EA5] text-sm font-medium flex items-center gap-x-[6px]'> 
                <img src={viewsIcon} alt="Views Icon" /> 
                {viewsCount}
            </div>
            <div className='text-[#7B7EA5] text-sm font-medium flex items-center gap-x-[6px]'> 
                <img src={commentIcon} alt="Views Icon" /> 
                {commentsCount}
            </div>
        </div> 
        {comments.map((item,index) => <Comment icon={item.icon} isVerificated={item.isVerificated} name={item.name} time={item.time} title={item.title} key={index}/>)}
        {children}
    </section>
  )
}

export default Post