import { useState } from "react";
import profile from '../../assets/profile.svg'
const HeaderProfile = () => {
  const [isLogin, setLogin] = useState(false);
  return (
    <>
      <div className="rounded-[10px] p-3 bg-[#F1F3F7]">
        <img src={profile} alt="Profle ava" />
      </div>
    </>
  );
};

export default HeaderProfile;
