import styles from "./Dashboard.module.css";
import { Header } from "../components/Header";
import { SortBar } from "../components/SortBar";
import { Pattern } from "../components/Pattern";
const dummyPattern = [
  { name: "React", type: "Mobile" },
  { name: "Node", type: "Server" },
  { name: "Node", type: "Server" },
  { name: "Node", type: "Server" },
  { name: "Node", type: "Server" },
  { name: "Node", type: "Server" },
  { name: "Node", type: "Server" },
  { name: "Node", type: "Server" },
  { name: "Python", type: "Language" },
  { name: "Node", type: "Server" },
  { name: "Node", type: "Server" },
  { name: "Node", type: "Server" },
  { name: "Node", type: "Server" },
  { name: "Python", type: "Language" },
];

export const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <SortBar />
      <Pattern patterns={dummyPattern} />
    </div>
  );
};
