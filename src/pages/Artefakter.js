import React from "react";
import scrumJson from "../scrum.json";
import styles from "./Aktiviteter.module.css";
import RightElement from "../Components/RightElement";
import LeftElement from "../Components/LeftElement";
import SmallElement from "../Components/SmallElement";

import backlog from "../img/Backlog.svg";
import sprintBacklog from "../img/Sprint_backlog.svg";
import inkrement from "../img/Inkrement.svg";

export default function Artefakter() {
  const artefacts = scrumJson.artefacts;
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <h3 className={styles.h3}>Artefakter inom Scrum</h3>
        <p className={styles.p}>{artefacts.about}</p>
      </section>
      <section className={styles.elWrap}>
        <SmallElement
          id="backlog"
          title="Backlog"
          props={artefacts.backlog}
          img={backlog}
        ></SmallElement>
        <SmallElement
          id="sprintBacklog"
          title="Sprint backlog"
          props={artefacts.sprintBacklog}
          img={sprintBacklog}
        ></SmallElement>
        <SmallElement
          id="inkrement"
          title="Inkrement"
          props={artefacts.inkrement}
          img={inkrement}
        ></SmallElement>
      </section>
    </main>
  );
}
