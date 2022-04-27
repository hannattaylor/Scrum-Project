import React from "react";
import styles from "./RightEl.module.css";

export default function RightElement(props) {
  console.log(props.img);
  function createTag(scrumEl) {
    return { __html: scrumEl };
  }

  return (
    <section id={props.id} className={styles.section}>
      <img className={styles.img} src={props.img} alt="" />
      <aside className={styles.rightSide}>
        <h3 className={styles.h3}>{props.title}</h3>
        <p
          className={styles.p}
          dangerouslySetInnerHTML={createTag(props.props)}
        ></p>
      </aside>
    </section>
  );
}
