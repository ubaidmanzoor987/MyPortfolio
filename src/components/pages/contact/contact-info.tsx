import "./contact.css";
import { UserData } from "../../../userdata/userdata";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { contact_us_api } from "../../../userdata/contactus_api";
import { useState } from "react";
import useWindowSize from "../../../utils/windowsize";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        display: "flex",
        flexDirection: "column ",
        width: "85%",
      },
    },
  })
);

function Contactinfo() {
  const winSize = useWindowSize();
  let TitleFontSize = 42;
  let DescriptionfontSize = 20;

  if (winSize.width < 600) {
    TitleFontSize = 32;
  }

  const Forms = useForm({
    shouldFocusError: true,
  });
  const { register, handleSubmit, control, setError, clearErrors } = Forms;

  const [subject, setSubject] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError1] = useState("");

  const onSubmit = async () => {
    const data = {
      name: name,
      subject: subject,
      email: email,
      phone: phone,
      message: message,
      sender: "ubaidmanzoor987@gmail.com",
      recepient: ["ubaidmanzoor987@gmail.com"],
    };
    console.log("data", data);

    if (subject == "") {
      setError1("Subject is Required!");
      return;
    }

    if (name == "") {
      setError1("Name is Required!");
      return;
    }

    if (email == "") {
      setError1("Email is Required!");
      return;
    }

    if (phone == "") {
      setError1("Phone is Required!");
      return;
    }

    if (message == "") {
      setError1("Message is Required!");
      return;
    }

    setError1("");

    let res = await contact_us_api(data);
    if (res.success) {
      setResponse(res.success);
    } else {
      setError1(res.error);
    }
  };
  const classes = useStyles();
  return (
    <div className="subabout">
      <div className="aboutme" style={{ fontSize: TitleFontSize + "px" }}>
        {" "}
        CONTACT ME{" "}
      </div>{" "}
      <br /> <br />
      <Grid container className="myinfo" style={{ fontSize: 18 }}>
        <Grid
          xs={12}
          sm={12}
          md={6}
          style={{ marginTop: "20px", marginLeft: "" }}
        >
          <div
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div className="form">
              <form
                className={classes.root}
                autoComplete="off"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div
                  className="aboutme"
                  style={{ fontSize: "25px", borderColor: "#cbced8" }}
                >
                  Get In Touch
                </div>{" "}
                <br /> <br />
                <div>
                  <TextField
                    id="outlined-required"
                    label="Enter your subject"
                    defaultValue=" "
                    variant="outlined"
                    style={{ fontSize: "25px", borderColor: "#cbced8" }}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                  />
                  <TextField
                    required
                    id="outlined-required"
                    label="Enter your name"
                    defaultValue=" "
                    variant="outlined"
                    style={{ fontSize: "25px", borderColor: "#cbced8" }}
                    onChange={(e) => setName(e.target.value)}
                    name="name"
                  />
                  <TextField
                    required
                    id="outlined-required"
                    label="Enter your email"
                    defaultValue=" "
                    variant="outlined"
                    style={{ fontSize: "25px", borderColor: "#cbced8" }}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <TextField
                    required
                    id="outlined-required"
                    label="Enter your Phone"
                    defaultValue=" "
                    variant="outlined"
                    style={{ fontSize: "25px", borderColor: "#cbced8" }}
                    onChange={(e) => setPhone(e.target.value)}
                  />

                  <TextareaAutosize
                    placeholder="Enter your Message"
                    style={{
                      margin: "8px",
                      width: "calc(100% - 15%)",
                      minHeight: "100px",
                      borderColor: "#cbced8",
                    }}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>
                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    marginTop: "20px",
                    marginLeft: "10px",
                    backgroundColor: "#037fff",
                    height: "3.2rem",
                  }}
                  disableElevation
                  type="submit"
                >
                  <div>SEND MAIL </div>
                </Button>{" "}
                <br /> <br />
                {error != "" ? <div className="error">{error}</div> : ""}
                {response != "" ? (
                  <div className="message">{response}</div>
                ) : (
                  ""
                )}
                <br />
              </form>
            </div>
          </div>
        </Grid>
        <Grid
          xs={12}
          sm={12}
          md={6}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div>
            <div className="socialinfo">
              {UserData.socialinfo.map((social: any) => {
                return (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      padding: "10px",
                      marginBottom: "25px",
                      backgroundColor: "#e4e4e4",
                    }}
                  >
                    <div
                      className="social-icon"
                      style={{ margin: "10px 10px 4px" }}
                    >
                      {social.icon}
                    </div>
                    <div style={{ margin: "10px 30px 50px" }}>
                      <div className="type" style={{ margin: "5px" }}>
                        {social.type}
                      </div>
                      <div className="address" style={{ margin: "5px" }}>
                        <span
                          style={{ width: "100%", overflowWrap: "anywhere" }}
                        >
                          {social.address}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Contactinfo;
