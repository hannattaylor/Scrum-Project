import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../img/scrum_logo.svg";
import styles from "./Header.module.css";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const [style, setStyle] = useState({ display: "none" });

  const toggleFunction = () => setToggle(!toggle);

  useEffect(() => {
    if (window.innerWidth >= 750) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  });

  return (
    <section id="section" className={styles.section}>
      <img className={styles.logo} src={logo}></img>
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

          <li
            onMouseEnter={() => {
              setStyle({ display: "block" });
            }}
            onMouseLeave={() => {
              setStyle({ display: "none" });
            }}
            id="koncept"
            className={styles.li}
          >
            SCRUM KONCEPT
            <ul
              onMouseLeave={() => {
                setStyle({ display: "none" });
              }}
              style={style}
              className={styles.dropdown}
            >
              <Link to="/roller">
                <li className={styles.dropLi}>Roller</li>
              </Link>
              <Link to="/aktiviteter">
                <li className={styles.dropLi}>Aktiviteter</li>
              </Link>
              <Link to="/artefakter">
                <li className={styles.dropLi}>Artefakter</li>
              </Link>
              <Link to="/agil-estimering">
                <li className={styles.dropLi}>Agil Estimering</li>
              </Link>
            </ul>
          </li>

          <li id="test" className={styles.li}>
            GÖR SCRUM-TEST
          </li>
        </ul>
      </nav>
      <button
        id="button"
        aria-expanded={toggle}
        className={styles.button}
        onClick={toggleFunction}
      ></button>
    </section>
  );
}
