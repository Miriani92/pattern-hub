import styles from "./PatternCard.module.css";
import { MdOutlineModeEdit } from "react-icons/md";

export const PatternCard = ({ name, type }: { name: string; type: string }) => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.description}>
        <button
          onClick={() => console.log("edit_clicked")}
          className={styles.editbutton}
        >
          <MdOutlineModeEdit />
        </button>
        <h3 className={styles.main}>{name}</h3>
        <p>{type}</p>
      </button>
    </div>
  );
};
