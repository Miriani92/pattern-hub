import styles from "./Pattern.module.css";
import { NewPatternCard } from "./NewPatternCard";
import { PatternCard } from "./PatternCard";

export const Pattern = ({ patterns }) => {
  return (
    <div className={styles.wrapper}>
      <NewPatternCard />
      {patterns.map((item) => {
        return <PatternCard {...item} />;
      })}
    </div>
  );
};
