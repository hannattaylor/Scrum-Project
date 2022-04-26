import { useState } from "react";
import logo from "../scrum_logo.svg";
import styles from "./Header.module.css";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  console.log(toggle);

  const toggleFunction = () => {
    setToggle(!toggle);
  };

  return (
    <section className={styles.section}>
      <img className={styles.logo} src={logo}></img>
      <button
        id="button"
        aria-expanded={toggle}
        className={styles.button}
        onClick={toggleFunction}
      ></button>
      <nav
        className={styles.nav}
        style={{ transform: toggle ? "translateX(0%)" : "translateX(100%)" }}
      >
        <ul className={styles.ul}>
          <li id="why" className={styles.li}>
            VARFÖR SCRUM?
          </li>
          <li d="koncept" className={styles.li}>
            SCRUM KONCEPT
          </li>
          <li d="test" className={styles.li}>
            GÖR SCRUM-TEST
          </li>
        </ul>
      </nav>
    </section>
  );
}
