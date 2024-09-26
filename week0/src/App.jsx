import smumcLogo from "./assets/smumc.png";
import "./App.css";

function App() {
  return (
    <>
      <nav>
        <div id="nav2">
          <img src={smumcLogo} alt="상명대UMC로고" />
          <p id="smumc">SMUMC</p>
        </div>

        <div id="txtnav">
          <span>PROJECTS</span>
          <span>MEMBERS</span>
          <span>NOTICE</span>
        </div>
      </nav>

    </>
  );
}

export default App;
