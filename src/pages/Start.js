import React from "react";
import RightElement from "../Components/RightElement";
import LeftElement from "../Components/LeftElement";
import teamwork from "../undraw_teamwork_hpdk.svg";
import team from "../undraw_project_team_lc5a.svg";
import scrumJson from "../scrum.json";
import styles from "./Start.module.css";
import scrumBoard from "../scrum_board.svg";

export default function Start() {
  let scrum = scrumJson;
  return (
    <main>
      <section className={styles.section}>
        <img src={scrumBoard}></img>
        <section>
          <h2 className={styles.h2}>Vad är Scrum?</h2>
          <h2 className={styles.h2Sub}>Agil utvecklig.</h2>
        </section>
      </section>
      <RightElement
        id="about"
        title="Om Scrum"
        props={scrum.about}
        img={teamwork}
      ></RightElement>
      <LeftElement
        id="history"
        title="Bakgrund"
        props={scrum.history}
        img={team}
      ></LeftElement>
    </main>
  );
}
