import styles from "./Pattern.module.css";
import { NewPatternCard } from "./NewPatternCard";
import { PatternCard } from "./PatternCard";

export const Pattern = ({ patterns, handleCreateNewPatterClick }) => {
  return (
    <div className={styles.wrapper}>
      <NewPatternCard handleCreateNewPatterClick={handleCreateNewPatterClick} />
      {patterns.map((item, idx: number) => {
        return <PatternCard {...item} key={idx} />;
      })}
    </div>
  );
};
