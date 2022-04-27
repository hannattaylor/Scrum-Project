import React from "react";
import scrumJson from "../scrum.json";
import styles from "./Roller.module.css";
import RightElement from "../Components/RightElement";
import LeftElement from "../Components/LeftElement";
import productOwner from "../img/product_owner.svg";
import scrumMaster from "../img/scrum_master.svg";
import scrumTeam from "../img/scrum_team.svg";

export default function Roller() {
  const roles = scrumJson.roles;
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <h3 className={styles.h3}>Vilka roller finns i Scrum?</h3>
        <p className={styles.p}>
          Det viktigaste i alla former av projekt är ju människorna. I scrum
          finns det tre uttalade roller; Produktägaren, Scrum Master och Scrum
          Teamet. Här nedan kan ni läsa om de olika rollerna och vilka
          ansvarsområden de har.
        </p>
      </section>
      <RightElement
        id="produktOwner"
        title="Produktägare"
        props={roles.productOwner}
        img={productOwner}
      ></RightElement>
      <LeftElement
        id="scrumMaster"
        title="Scrum Master"
        props={roles.scrumMaster}
        img={scrumMaster}
      ></LeftElement>
      <RightElement
        id="scrumTeam"
        title="Scrum Team"
        props={roles.scrumTeam}
        img={scrumTeam}
      ></RightElement>
    </main>
  );
}
