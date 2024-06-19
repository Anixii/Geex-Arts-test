import { Modal } from "@mui/material";
import icon from "../../assets/logo.svg";

import cancel from "../../assets/cancel.svg";
import Button from "../Button/Button";

type ModalPropsType = {
  title: string;
  subtitle: string;
  btnValue: string;
  secondaryBtnValue?: string;
  btnTitle: string;
  isOpen: boolean;
  onHandleClose: () => void;
  onRedirect: () => void;
  onHandleClickBtn: () => void;
  children: React.ReactNode,

};
const ModalAuth = ({
  isOpen,
  onHandleClose,
  title,
  btnTitle,
  btnValue,
  secondaryBtnValue,
  subtitle,
  onRedirect,
  children,
  onHandleClickBtn
}: ModalPropsType) => {
  
  return (
    <Modal
      disableScrollLock
      className="h-full flex items-end justify-center sm:items-center"
      open={isOpen}
      onClose={onHandleClose}
    >
      <div className="bg-white relative  w-full max-w-full sm:max-w-[370px] px-6 pb-9 pt-10 rounded-3xl flex flex-col items-center">
        <button
          className="absolute top-[21px] right-[21px]"
          onClick={onHandleClose}
        >
          <img src={cancel} alt="Close" />
        </button>
        <div className="flex justify-center">
          <img src={icon} alt="Logo" />
        </div>
        <h1 className="font-semibold text-3xl text-center mt-6 mb-4">
          {title}
        </h1>
        <h2 className="font-medium text-sm text-center text-[#9395B8]">
          {subtitle}
        </h2>
        <div className="w-full mt-8 mb-10">
          {children}
          <Button handleClick={onHandleClickBtn} value={btnValue} className="text-white bg-[#06082C]" />
        </div>
        <div className="w-full flex flex-col gap-y-4">
          <h3 className="text-[#9395B8] text-sm text-center">{btnTitle}</h3>
          {secondaryBtnValue && <Button
            handleClick={onRedirect}
            value={secondaryBtnValue}
            className="text-[#06082C] bg-[#F1F3F7] w-full"
          />}
        </div>
      </div>
    </Modal>
  );
};

export default ModalAuth;
