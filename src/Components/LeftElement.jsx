import React from "react";
import styles from "./LeftEl.module.css";

export default function LeftElement(props) {
  function createTag(scrumEl) {
    return { __html: scrumEl };
  }

  return (
    <section id={props.id} className={styles.section}>
      <aside className={styles.rightSide}>
        <h3 className={styles.h3}>{props.title}</h3>
        <p
          className={styles.p}
          dangerouslySetInnerHTML={createTag(props.props)}
        ></p>
      </aside>
      <img className={styles.img} src={props.img} alt="" />
    </section>
  );
}
