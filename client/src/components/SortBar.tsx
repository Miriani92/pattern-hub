import { useState } from "react";
import styles from "./SortBar.module.css";

export const SortBar = () => {
  const searchOptions = [
    { label: "All" },
    { label: "Server" },
    { label: "Mobile" },
    { label: "Desktop" },
    { label: "Serverless" },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const handleSetActiveOption = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <div className={styles.wrapper}>
      {searchOptions.map((option, idx) => {
        const isActive = idx === activeIndex;
        return (
          <button
            key={option.label}
            onClick={() => handleSetActiveOption(idx)}
            className={
              isActive ? `${styles.active} ${styles.button}` : styles.button
            }
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
};
