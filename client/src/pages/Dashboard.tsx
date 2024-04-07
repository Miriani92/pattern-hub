import styles from "./Dashboard.module.css";
import { Header } from "../components/Header";
import { SortBar } from "../components/SortBar";
import { useNavigate } from "react-router-dom";
import { Pattern } from "../components/Pattern";
import { useLocation } from "react-router-dom";

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
  const location = useLocation();
  const navigate = useNavigate();
  const handleCreateNewPatterClick = () => {
    navigate("/putternbuilder", { state: { prev: location.pathname } });
  };

  return (
    <div className={styles.wrapper}>
      <Header isDescription={true} />
      <SortBar />
      <Pattern
        patterns={dummyPattern}
        handleCreateNewPatterClick={handleCreateNewPatterClick}
      />
    </div>
  );
};
