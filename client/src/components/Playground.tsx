import styles from "./Playground.module.css";
import { useEffect, useRef } from "react";
export const Playground = () => {
  const textAreaRef = useRef();
  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        textAreaRef.current.focus();
      }
    });
  }, []);
  return <textarea className={styles.wrapper} ref={textAreaRef}></textarea>;
};
