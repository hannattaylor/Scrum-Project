import React from "react";
import RightElement from "../Components/RightElement";
import LeftElement from "../Components/LeftElement";
import scrumJson from "../scrum.json";
import styles from "./Start.module.css";

import teamwork from "../img/undraw_teamwork_hpdk.svg";
import rugbyBall from "../img/rugby_ball.svg";
import scrumBoard from "../img/scrum_board.svg";

export default function Start() {
  let scrum = scrumJson;
  return (
    <main>
      <section className={styles.section}>
        <img className={styles.img} src={scrumBoard}></img>
        <section>
          <h2 className={styles.h2}>Varför Scrum?</h2>
          <h2 className={styles.h2Sub}>
            För att bidra till ökat teamwork och nå uppsatta mål mer effektivt.
          </h2>
        </section>
      </section>
      <LeftElement
        id="about"
        title="Om Scrum"
        props={scrum.about}
        img={teamwork}
      ></LeftElement>
      <RightElement
        id="history"
        title="Bakgrund"
        props={scrum.history}
        img={rugbyBall}
      ></RightElement>
    </main>
  );
}
