import DragHandleIcon from "@mui/icons-material/DragHandle";
import CloseIcon from "@mui/icons-material/Close";
const HeaderBurgerBtn = ({
    isOpen,
    onHandleClick,
  }: {
    isOpen: boolean;
    onHandleClick: () => void;
  }) => {
  return (
    <button onClick={onHandleClick}>
      {isOpen ? <CloseIcon /> : <DragHandleIcon />}
    </button>
  );
};

export default HeaderBurgerBtn;
