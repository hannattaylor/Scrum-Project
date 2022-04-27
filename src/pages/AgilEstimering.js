import React from "react";
import LeftElement from "../Components/LeftElement";
import scrumJson from "../scrum.json";
import styles from "./AgilEst.module.css";

import team from "../img/undraw_teamwork_hpdk.svg";

export default function AgilEstimering() {
  return (
    <main>
      <section className={styles.section}>
        <h3 className={styles.h3}>Vad är då Agil Estimering?</h3>
      </section>
      <LeftElement
        id="agilEst"
        props={scrumJson.agilEstimering}
        img={team}
      ></LeftElement>
    </main>
  );
}
