import React, { useState, useRef, useEffect } from "react";
import {
  TextField,
  Container,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  Button,
  Typography,
  ListItemText,
  Checkbox,
  CircularProgress,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import SCstyled from "styled-components";
import { Box, Paper, styled, Grid } from "@mui/material";
import { green } from "@mui/material/colors";

const Section = SCstyled.div`
    background-color: white;
    border-radius: 7px;
    color: black;
    margin: 30px;
`;

const Title = SCstyled.div`
    background-color:  #223F84;
    color: white;
    border-radius: 7px 7px 0 0;
    padding: 0 7px;
    margin: 0;
`;

const Detail = SCstyled.div`
    padding: 5px 20px;
`;
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#223F84",
}));

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "40ch",
    },
  },
  form: {
    display: "flex",
    alignItems: "center",
  },
  marginTop: {
    marginTop: "1rem",
  },
  important: {
    color: "#D60808",
  },
  question: {
    color: "#000",
  },
}));

function Forms({ user, setUser }) {
  const classes = useStyles();
  const history = useHistory();

  const [question1, setQuestion1] = useState("");
  const [question2, setQuestion2] = useState("");
  const [question3, setQuestion3] = useState("");
  const [question4, setQuestion4] = useState("");
  const [question5, setQuestion5] = useState("");
  const [q5Location, setQ5Location] = useState("");
  const [signature1, setSignature1] = useState("");
  const [signature1box, setSignature1Box] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");

  const _handleQuestion1 = (e) => {
    setQuestion1(e.target.value);
  };
  const _handleQuestion2 = (e) => {
    setQuestion2(e.target.value);
  };
  const _handleQuestion3 = (e) => {
    setQuestion3(e.target.value);
  };
  const _handleQuestion4 = (e) => {
    setQuestion4(e.target.value);
  };
  const _handleQuestion5 = (e) => {
    setQuestion5(e.target.value);
  };
  const _handleQ5Location = (input) => {
    setQ5Location(input);
  };

  const _handleSignature1 = (input) => {
    setSignature1(input);
  };
  const _handleSignature1Box = () => {
    setSignature1Box(!signature1box);
  };

  const _handleSubmit = async (e) => {
    e.preventDefault();
    if (!loading) {
      setSuccess(false);
      setLoading(true);
    }

    let data = {
      question1,
      question2,
      question3,
      question4,
      question5,
      q5Location,
      signature1,
      signature1box,
      userID: user.id,
    };

    const response = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/covid-form`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );

    const resdata = await response.json();
    console.log("response", resdata);

    if (resdata.msg) {
      setLoading(false);
      setMessage(resdata.msg);
    } else {
      setLoading(false);
      setMessage("Your form was submitted!");
      setSuccess(true);

      history.push("/user");
    }
  };

  return (
    <form
      className={classes.root}
      autoComplete="off"
      onSubmit={(e) => _handleSubmit(e)}
    >
      <Typography variant="h2">Daily COVID-19 Screening Form</Typography>
      <Container component="formInfo">
        <Typography variant="h5">
          Your safety is our top priority. To that end, we are asking the
          following health screening questions to ensure a safe work
          environment. Everyone must answer these questions before they arrive
          to work.
        </Typography>
        <p></p>
        <Typography variant="h4">
          Remember, if you are sick with or exhibiting symptoms of COVID-19
          (fever of 100.4˚ or greater, chills, cough, fever, difficulty
          breathing, muscle aches, sore throat, diarrhea, recent loss of taste
          or smell), or have had close contact with someone diagnosed with
          COVID-19 within the last 14 days, you must not report to work.
        </Typography>
      </Container>
      <div>
        <Container component="Q1">
          <Section>
            <Title>
              <span className={classes.important}>*</span>Question 1:
            </Title>
            <Detail>
              <FormControl component="fieldset" className={classes.form}>
                <FormLabel component="legend" className={classes.question}>
                  Have you had close contact with someone who in the past 14
                  days was diagnosed with COVID-19 or had a test confirming they
                  have the virus?
                </FormLabel>
                <RadioGroup
                  required
                  id="question1"
                  aria-label="Question 1"
                  value={question1}
                  onChange={_handleQuestion1}
                >
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </Detail>
          </Section>
        </Container>

        <Container component="Q2">
          <Section>
            <Title>
              <span className={classes.important}>*</span>Question 2:
            </Title>
            <Detail>
              <FormControl component="fieldset" className={classes.form}>
                <FormLabel component="legend" className={classes.question}>
                  Within the last 10 days have you been diagnosed with COVID-19
                  or had a test confirming you have the virus?
                </FormLabel>
                <RadioGroup
                  required
                  id="question2"
                  aria-label="Question 2"
                  value={question2}
                  onChange={_handleQuestion2}
                >
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </Detail>
          </Section>
        </Container>
        <Container component="Q3">
          <Section>
            <Title>
              <span className={classes.important}>*</span>Question 3:
            </Title>
            <Detail>
              <FormControl component="fieldset" className={classes.form}>
                <FormLabel component="legend" className={classes.question}>
                  Are you currently under an isolation or quarantine order?
                </FormLabel>
                <RadioGroup
                  required
                  id="question3"
                  aria-label="Question 3"
                  value={question3}
                  onChange={_handleQuestion3}
                >
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </Detail>
          </Section>
        </Container>
        <Container component="Q4">
          <Section>
            <Title>
              <span className={classes.important}>*</span>Question 4:
            </Title>
            <Detail>
              <FormControl component="fieldset" className={classes.form}>
                <FormLabel component="legend" className={classes.question}>
                  Have you had any one or more of these symptoms today or within
                  the past 24 hours, which is new or not explained by a
                  pre-existing condition?
                </FormLabel>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2} columns={12}>
                    <Grid item xs={12} md={6} lg={6}>
                      <Item>
                        Fever of 100.4 or greater, Chills, or Repeated
                        Shaking/Shivering
                      </Item>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                      <Item>Shortness of Breath, Difficulty Breathing</Item>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Item>Cough</Item>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Item>Sore Throat</Item>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Item>Feeling Unusually Weak or Fatigued</Item>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Item>Loss of Taste or Smell </Item>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Item>Muscle Pain</Item>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Item>Headache</Item>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Item>Runny or Congested Nose </Item>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Item>Runny or Congested Nose </Item>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Item>Diarrhea</Item>
                    </Grid>
                  </Grid>
                </Box>
                <RadioGroup
                  required
                  id="question4"
                  aria-label="Question 4"
                  value={question4}
                  onChange={_handleQuestion4}
                >
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </Detail>
          </Section>
        </Container>
        <Container component="Q5">
          <Section>
            <Title>
              <span className={classes.important}>*</span>Question 5:
            </Title>
            <Detail>
              <FormControl component="fieldset" className={classes.form}>
                <FormLabel component="legend" className={classes.question}>
                  Have you traveled internationally or outside the state you
                  reside within the past 14 days?
                </FormLabel>
                <RadioGroup
                  required
                  id="question5"
                  aria-label="Question 5"
                  value={question5}
                  onChange={_handleQuestion5}
                >
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </Detail>
          </Section>
        </Container>
        {question5 !== "yes" ? (
          ""
        ) : (
          <Container component="Q5a">
            <Section>
              <Title>
                <span className={classes.important}>*</span>Question 5a:
              </Title>
              <Detail>
                <FormControl component="fieldset" className={classes.form}>
                  <FormLabel component="legend" className={classes.question}>
                    Where did you travel?
                  </FormLabel>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="travelLocation"
                    label="Travel Location"
                    name="travelLocation"
                    autoComplete="q5Location"
                    onChange={(e) => _handleQ5Location(e.target.value)}
                    value={q5Location}
                  />
                </FormControl>
              </Detail>
            </Section>
          </Container>
        )}
        <Container component="signature">
          <Section>
            <Title>
              <span className={classes.important}>*</span>Statement of
              Acknowledgement and Release of Information
            </Title>
            <Detail>
              <FormControl component="fieldset" className={classes.form}>
                <FormLabel component="legend" className={classes.question}>
                  By checking 'Yes' and typing my name below, I attest that my
                  answers above are accurate to the best of my knowledge. I
                  affirm I will notify the production team if there are any
                  changes to my answers that occur after I complete this form,
                  and before I arrive to the work location.
                </FormLabel>
                <FormLabel component="legend" className={classes.question}>
                  I understand that COVID testing is a condition of employment
                  on this production and I also authorize that the all the
                  information I have given and all the results of COVID testing
                  done while on this project can be released to my Employer, the
                  production team, and to the state database.
                </FormLabel>
                <FormLabel componet="legend" className={classes.question}>
                  I understand the safety measures in place to try and better
                  protect myself and all crew members. If I have any questions
                  about safety measures, I will follow up with the Set Medic or
                  CCO.
                </FormLabel>
                <FormControlLabel
                  required
                  id="signature1Box"
                  control={
                    <Checkbox
                      value={signature1box}
                      onClick={(e) => _handleSignature1Box(e.target.value)}
                    />
                  }
                  label="Yes"
                  inputProps={{ "aria-label": "Signature 1 Checkbox" }}
                />
              </FormControl>
              <TextField
                variant="outlined"
                required
                disabled={!signature1box}
                fullWidth
                id="signature1"
                label="Type your name"
                name="signature1"
                autoComplete="signature1"
                onChange={(e) => _handleSignature1(e.target.value)}
                value={signature1}
              />
            </Detail>
          </Section>
        </Container>
        <Button
          size="large"
          variant="contained"
          className={classes.margin}
          color="primary"
          disabled={loading}
          type="submit"
        >
          Submit Form
        </Button>
        {loading && (
          <CircularProgress
            size={24}
            sx={{
              color: green[500],
              position: "absolute",
              top: "50%",
              left: "50%",
              marginTop: "-12px",
              marginLeft: "-12px",
            }}
          />
        )}
        {!!message && success ? message : message}
      </div>
    </form>
  );
}

export default Forms;
