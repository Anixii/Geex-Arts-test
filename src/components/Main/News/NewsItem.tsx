import timetableIcon from '../../../assets/timetable.svg' 
type NewsItemPropsType = { 
    category: string, 
    title: string, 
    time:string
}
const NewsItem = ({category,time,title}:NewsItemPropsType) => {
  return (
    <div className='p-[10px] rounded-xl bg-[#F8F8F9]'> 
        <p className='text-[#9395B8] text-xs font-semibold'>{category}</p> 
        <p className='text-[#06082C] mt-3 mb-2 text-sm font-medium'>{title}</p> 
        <div className='text-[#9395B8] text-xs flex items-center gap-x-1'>
            <img src={timetableIcon} alt="timetable Icon" /> 
            {time}
        </div>
    </div>
  )
}

export default NewsItem