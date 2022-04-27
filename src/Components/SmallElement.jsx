import React from "react";
import styles from "./SmallEl.module.css";

export default function SmallElement(props) {
  return (
    <section className={styles.section}>
      <img className={styles.img} src={props.img} alt="" />
      <aside>
        <h3 className={styles.h3}>{props.title}</h3>
        <p className={styles.p}>{props.props}</p>
      </aside>
    </section>
  );
}
