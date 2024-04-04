import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <h1>Architecture Patterns</h1>
        <p>Select or Add Architecture Pattern Below</p>
      </div>
      <div className={styles.right}>
        <button className={styles.button}>Close</button>
      </div>
    </div>
  );
};
