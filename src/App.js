import "./App.css";
import scrumJson from "./scrum.json";

function App() {
  let scrum = scrumJson;

  //Funktion för att returnera JSON property som innerHTML i valda element- för att kunna klicka sig fram på sidan //
  function createTag(scrumEl) {
    return { __html: scrumEl };
  }

  return (
    <div className="App">
      {/* test av innerHtml */}
      <h3>Vad är Scrum?</h3>
      <p id="about" dangerouslySetInnerHTML={createTag(scrum.about)}></p>

      <p id="history" dangerouslySetInnerHTML={createTag(scrum.history)}></p>
      <h3>Roller</h3>
      <p
        id="productOwner"
        dangerouslySetInnerHTML={createTag(scrum.roles.productOwner)}
      ></p>
      <p
        id="scrumMaster"
        dangerouslySetInnerHTML={createTag(scrum.roles.scrumMaster)}
      ></p>
      <p
        id="scrumTeam"
        dangerouslySetInnerHTML={createTag(scrum.roles.scrumTeam)}
      ></p>
      <h3>Aktiviteter</h3>
      <p id="sprint" dangerouslySetInnerHTML={createTag(scrum.sprint)}></p>
      <p
        id="sprintPlanning"
        dangerouslySetInnerHTML={createTag(scrum.sprintPlanning)}
      ></p>
      <p
        id="dailyScrum"
        dangerouslySetInnerHTML={createTag(scrum.dailyScrum)}
      ></p>
      <p
        id="sprintReview"
        dangerouslySetInnerHTML={createTag(scrum.sprintReview)}
      ></p>
      <p
        id="sprintRetrospective"
        dangerouslySetInnerHTML={createTag(scrum.sprintRetrospective)}
      ></p>
      <h3>Scrum Artefakter</h3>
      <p
        id="aboutArtefacts"
        dangerouslySetInnerHTML={createTag(scrum.artefacts.about)}
      ></p>
      <p
        id="backlog"
        dangerouslySetInnerHTML={createTag(scrum.artefacts.backlog)}
      ></p>
      <p
        id="sprintBacklog"
        dangerouslySetInnerHTML={createTag(scrum.artefacts.sprintBacklog)}
      ></p>
      <p
        id="inkrement"
        dangerouslySetInnerHTML={createTag(scrum.artefacts.inkrement)}
      ></p>
    </div>
  );
}

export default App;
