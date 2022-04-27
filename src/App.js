import "./App.css";
import scrumJson from "./scrum.json";
import Header from "./Components/Header";
import RightElement from "./Components/RightElement";
import LeftElement from "./Components/LeftElement";
import teamwork from "./undraw_teamwork_hpdk.svg";
import team from "./undraw_project_team_lc5a.svg";

function App() {
  let scrum = scrumJson;

  return (
    <main>
      <Header></Header>
      <section></section>

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

export default App;
