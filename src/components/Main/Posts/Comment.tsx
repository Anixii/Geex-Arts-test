/* eslint-disable @typescript-eslint/no-explicit-any */ 
import verificated from '../../../assets/verificated.svg'
export type CommentPropsType = { 
    icon: any, 
    name: string, 
    title: string, 
    time: string,
    isVerificated: boolean
}
const Comment = ({icon,isVerificated,name,time,title}:CommentPropsType) => {
  return (
    <>
    <div className='w-full h-[1px] bg-[#F1F3F7] my-4'/>  
    <div className='flex gap-x-3 items-start w-full'>
        <div> 
            <img className='max-w-none w-10 h-10 rounded-[50%]' src={icon} alt="Profile image" />
        </div> 
        <div className='flex flex-col'> 
            <h4 className='text-[#7B7EA5] text-sm font-medium flex items-center gap-x-1'>{name} {' '} {isVerificated && <img src={verificated} alt={'Verify icon'}></img>}</h4> 
            <h5 className='text-[#06082C] text-sm font-medium mt-1 mb-2'>{title}</h5> 
            <div className='text-[#7B7EA5] text-sm font-medium'>{time} <span className='text-[#353754] ml-[6px]'>Ответить</span> </div>
        </div>
    </div>
    </>
  )
}

export default Comment