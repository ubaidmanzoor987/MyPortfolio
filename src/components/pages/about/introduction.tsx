import { UserData } from "../../../userdata/userdata";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import useWindowSize from "../../../utils/windowsize";
function Introduction() {
  const winSize = useWindowSize();
  let TitleFontSize = 42;
  if (winSize.width < 600) {
    TitleFontSize = 32;
  }
  return (
    <div className="subabout">
      <div className="aboutme" style={{ fontSize: TitleFontSize + "px" }}>
        ABOUT ME{" "}
      </div>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "stretch",
          justifyContent: "space-between",
        }}
      >
        <Grid xs={12} sm={12} md={5} style={{ paddingTop: "30px" }}>
          <img className="mypic" src={UserData.myPic} alt="pic" />
        </Grid>
        <Grid xs={12} sm={12} md={7} style={{ paddingTop: "30px" }}>
          <div className="myself">
            <div style={{ marginBottom: "20px" }}>
              {UserData.greet}{" "}
              <span className="color-primary"> {UserData.name}</span>
            </div>
            <div
              className="paragraph"
              style={{ fontSize: 19, textAlign: "justify" }}
            >
              {UserData.about}
            </div>
            {Object.keys(UserData.about_info).map((key: string) => {
              return (
                <div className="myinfo" style={{ fontSize: 18 }}>
                  <Grid container>
                    <Grid xs={12} md={3} className="about_me_label">
                      {key} :
                    </Grid>
                    <Grid xs={12} md={9} className="about_me_value">
                      {UserData.about_info[key as "FullName"]}
                    </Grid>
                  </Grid>
                </div>
              );
            })}
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: "20px", backgroundColor: "#037fff" }}
              disableElevation
            >
              <a
                href="/static/Resume.pdf"
                download
                style={{ textDecoration: "none", color: "white" }}
              >
                DOWNLOAD CV{" "}
              </a>
            </Button>
          </div>
        </Grid>
      </div>
    </div>
  );
}

export default Introduction;
