import Animation from "../../animation/animation";
import "./portfolio.css";
import Myportfolios from "./myporfolios";

function Portfolios() {
  return (
    <div className="about-me">
      <Animation />
      <div className="portfolio">
        <Myportfolios />
      </div>
    </div>
  );
}

export default Portfolios;
