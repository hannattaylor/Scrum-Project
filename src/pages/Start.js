import React from "react";
import RightElement from "../Components/RightElement";
import LeftElement from "../Components/LeftElement";
import teamwork from "../img/undraw_teamwork_hpdk.svg";
import team from "../img/undraw_project_team_lc5a.svg";
import scrumJson from "../scrum.json";
import styles from "./Start.module.css";
import scrumBoard from "../img/scrum_board.svg";
import SmallElement from "../Components/SmallElement";
import backlog from "../img/Backlog.svg";

export default function Start() {
  let scrum = scrumJson;
  return (
    <main>
      <section className={styles.section}>
        <img className={styles.img} src={scrumBoard}></img>
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
      <SmallElement
        id="backlog"
        title="Backlog"
        props={scrum.artefacts.backlog}
        img={backlog}
      ></SmallElement>
    </main>
  );
}
