import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Start from "./pages/Start";
import Roller from "./pages/Roller";
import Artefakter from "./pages/Artefakter";
import Aktiviteter from "./pages/Aktiviteter";
import AgilEstimering from "./pages/AgilEstimering";
import Header from "./Components/Header";

function App() {
  return (
    <main>
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/roller" element={<Roller />} />
          <Route path="/artefakter" element={<Artefakter />} />
          <Route path="/aktiviteter" element={<Aktiviteter />} />
          <Route path="/agil-estimering" element={<AgilEstimering />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
