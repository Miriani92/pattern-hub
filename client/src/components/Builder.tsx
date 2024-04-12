import styles from "./Builder.module.css";
import { useState } from "react";
import { BuilderHeader } from "./BuilderHeader";
import { Playground } from "./Playground";

export const Builder = () => {
  const [title, setTitle] = useState("");

  const handleInputChange = (e: any) => {
    setTitle(e.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <BuilderHeader title={title} handleInputChange={handleInputChange} />
      <Playground />
    </div>
  );
};
