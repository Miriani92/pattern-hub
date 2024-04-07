import styles from "./NewPatternCard.module.css";
import { IoMdAddCircleOutline } from "react-icons/io";

export const NewPatternCard = ({ handleCreateNewPatterClick }) => {
  return (
    <div className={styles.wrapper}>
      <button
        className={styles.description}
        onClick={handleCreateNewPatterClick}
      >
        <IoMdAddCircleOutline size={20} />
        Add New
      </button>
    </div>
  );
};
