import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../img/scrum_logo.svg";
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
          <Link to="/">
            <li id="why" className={styles.li}>
              VARFÖR SCRUM?
            </li>
          </Link>
          <Link to="/roller">
            {/* <-- detta ska ändras sen, till dropdown*/}
            <li d="koncept" className={styles.li}>
              SCRUM KONCEPT
            </li>
          </Link>
          <li d="test" className={styles.li}>
            GÖR SCRUM-TEST
          </li>
        </ul>
      </nav>
    </section>
  );
}
