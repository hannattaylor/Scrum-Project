import logo from "../scrum_logo.svg";

export default function Header() {
  return (
    <section>
      <img className="logo" src={logo}></img>
      <ul>
        <li>VARFÖR SCRUM?</li>
        <li>SCRUM KONCEPT</li>
        <li>GÖR SCRUM-TEST</li>
      </ul>
    </section>
  );
}
