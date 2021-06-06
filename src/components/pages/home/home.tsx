import "../../main.css";
import { UserData } from "../../../userdata/userdata";
import Animation from "../../animation/animation";
import useWindowSize from "../../../utils/windowsize";

function Home() {
  const winSize = useWindowSize();
  let TitleFontSize = 32;
  let DescriptionfontSize = 20;

  if (winSize.width < 1000) {
    TitleFontSize = 23;
  }
  if (winSize.width < 1000) {
    DescriptionfontSize = 17;
  }
  return (
    <>
      <Animation />
      <div className="home">
        <div
          className="subabout"
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          <div className="bold" style={{ fontSize: TitleFontSize + "px" }}>
            {UserData.greet}
            <span className="color-primary">{UserData.name}</span>
          </div>

          <p
            style={{
              width: Math.max(winSize.width / 2, 300) + "px",
              fontWeight: 600,
              fontSize: DescriptionfontSize + "px",
            }}
          >
            {" "}
            {UserData.summary}{" "}
          </p>

          <div className="icons">
            <a className="icon" href={UserData.GithubHref} target="_blank">
              {UserData.GithubIcon}
            </a>
            <a className="icon" href={UserData.linkedinHref} target="_blank">
              {UserData.linkedinIcon}
            </a>
            <a className="icon" href={UserData.UpworkHref} target="_blank">
              {UserData.UpworkIcon}
            </a>
          </div>
          <br />
        </div>
      </div>
    </>
  );
}
export default Home;
