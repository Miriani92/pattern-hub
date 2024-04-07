import styles from "./BackNavigationHeader.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export const BackNavigationHeader = ({ prev }) => {
  const navigate = useNavigate();
  const handleBackNavigation = () => {
    navigate(prev);
  };
  return (
    <div className={styles.wrapper} onClick={handleBackNavigation}>
      <div className={styles.icon}>
        <IoIosArrowBack />
      </div>
      <p>Back to {prev}</p>
    </div>
  );
};
