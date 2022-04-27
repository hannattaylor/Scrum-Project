import React from "react";
import scrumJson from "../scrum.json";
import styles from "./Aktiviteter.module.css";
import RightElement from "../Components/RightElement";
import LeftElement from "../Components/LeftElement";
import SmallElement from "../Components/SmallElement";

import sprint from "../img/sprint.svg";
import sprintPlanning from "../img/sprint_planning.svg";
import dailyScrumZoom from "../img/daily_scrum_zoom.svg";
import dailyScrumTeams from "../img/daily_scrum_teams.svg";
import dailyScrum15 from "../img/15_min.svg";
import dailyScrum from "../img/daily_scrum.svg";
import sprintReview from "../img/sprint_review.svg";
import sprintReviewTwo from "../img/sprint_review_two.svg";

export default function Aktiviteter() {
  let activities = scrumJson.activities;
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <h3 className={styles.h3}>Hur kan vi jobba med Scrum?</h3>
        <p className={styles.p}>
          För att se till så att rätt saker görs vid rätt tillfälle har Scrum
          tagit fram fem stycken aktiviteter, ibland även kallat ceremonier.{" "}
        </p>
      </section>
      <section className={styles.elWrap}>
        <RightElement
          id="sprint"
          title="Sprint"
          props={activities.sprint}
          img={sprint}
        ></RightElement>
        <LeftElement
          id="sprintPlanning"
          title="Sprint Planning"
          props={activities.sprintPlanning}
          img={sprintPlanning}
        ></LeftElement>
        <RightElement
          id="dailyScrum"
          title="Daily Scrum"
          props={activities.dailyScrum}
          img={dailyScrum15}
        ></RightElement>
        <LeftElement
          id="sprintReview"
          title="Sprint Review"
          props={activities.sprintReview}
          img={sprintReview}
        ></LeftElement>
        <RightElement
          id="sprintRetrospective"
          title="Sprint Retrospective"
          props={activities.sprintRetrospective}
          img={sprintReviewTwo}
        ></RightElement>
      </section>
    </main>
  );
}
