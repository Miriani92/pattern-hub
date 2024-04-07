import styles from "./PatterBuilder.module.css";
import { Header } from "../components/Header";
import { BackNavigationHeader } from "../components/BackNavigationHeader";
import { useLocation } from "react-router-dom";

export const PatternBuilder = () => {
  const location = useLocation();

  return (
    <div className={styles.wrapper}>
      <Header isDescription={false} />
      <BackNavigationHeader prev={location.state.prev} />
    </div>
  );
};
