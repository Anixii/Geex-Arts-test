import { useState } from "react";
import profile from '../../assets/profile.svg'
import { useNavigate } from "react-router-dom";
const HeaderProfile = () => {
  const [isLogin, setLogin] = useState(false); 
  const nav = useNavigate()
  return (
    <>
      <div onClick={() => nav('/auth')} className="rounded-[10px] p-3 bg-[#F1F3F7]">
        <img className="max-w-none" src={profile} alt="Profle ava" />
      </div>
    </>
  );
};

export default HeaderProfile;
