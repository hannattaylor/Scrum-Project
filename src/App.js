import "./App.css";
import scrumJson from "./scrum.json";
import Header from "./Components/Header";

function App() {
  let scrum = scrumJson;

  //Funktion för att returnera JSON property som innerHTML i valda element- för att kunna klicka sig fram på sidan //
  function createTag(scrumEl) {
    return { __html: scrumEl };
  }

  //<p id="about" dangerouslySetInnerHTML={createTag(scrum.about)}></p>

  return (
    <main>
      <Header></Header>
    </main>
  );
}

export default App;
