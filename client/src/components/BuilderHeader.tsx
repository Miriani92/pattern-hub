import styles from "./BuilderHeader.module.css";
import { MdFormatBold } from "react-icons/md";
import { FaItalic } from "react-icons/fa";
import { MdOutlineFormatUnderlined } from "react-icons/md";
import { MdInsertLink } from "react-icons/md";
import { FaAlignLeft } from "react-icons/fa";

export const BuilderHeader = ({ title, handleInputChange }: any) => {
  const onChange = (e) => {
    const element = e.target;
    const minWidth = 100;
    const inputWidth = element.scrollWidth;
    if (e.target.value.length < 1) {
      return (element.style.width = minWidth + "px");
    }
    element.style.width =
      inputWidth > minWidth ? inputWidth + "px" : minWidth + "px";
    handleInputChange(e);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <input
          autoFocus
          className={styles.input}
          placeholder="New pattern"
          onChange={onChange}
        />
        <div className={styles.iconsWrapper}>
          <button>
            <MdFormatBold size={20} />
          </button>
          <button>
            <FaItalic size={16} />
          </button>
          <button>
            <MdOutlineFormatUnderlined size={20} />
          </button>
          <button>
            <MdInsertLink size={20} />
          </button>
          <button>
            <FaAlignLeft size={16} />
          </button>
        </div>
      </div>
      <div className={styles.right}></div>
    </div>
  );
};
