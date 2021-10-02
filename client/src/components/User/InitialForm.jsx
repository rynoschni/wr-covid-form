import React, {useState} from 'react';
import { TextField, Container, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, Button, Typography }  from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Section = styled.div`
    background-color: white;
    border-radius: 7px;
    color: black;
    margin: 30px;
`;

const Title = styled.div`
    background-color:  #223F84;
    color: white;
    border-radius: 7px 7px 0 0;
    padding: 0 7px;
    margin: 0;
`;

const Detail = styled.div`
    padding: 5px 20px;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '40ch',
    },
  },
  form: {
    display: 'flex',
    alignItems: 'center'
  },
  marginTop: {
    marginTop: '1rem'
  },
  important: {
    color: '#D60808',
  }
}));

function Forms({user, setUser}) {
  const classes = useStyles();
  const history = useHistory();


  const [question1, setQuestion1] = useState("");
  const [question2, setQuestion2] = useState("");
  const [question3, setQuestion3] = useState("");
  const [question4, setQuestion4] = useState("");
  const [question5, setQuestion5] = useState("");
  const [question6, setQuestion6] = useState("");
  const [question7, setQuestion7] = useState("");
  const [question8, setQuestion8] = useState("");
  const [signature1, setSignature1] = useState("");
  const [signature2, setSignature2] = useState("");
  const [signature1box, setSignature1Box] = useState("");
  const [signature2box, setSignature2Box] = useState("");
  
  const _handleQuestion1 = e => {
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
  const _handleQuestion6 = (e) => {
    setQuestion6(e.target.value);
  };
  const _handleQuestion7 = (e) => {
    setQuestion7(e.target.value);
  };
  const _handleQuestion8 = (e) => {
    setQuestion8(e.target.value);
  };
  const _handleSignature1 = (e) => {
    setSignature1(e.target.value);
  };
  const _handleSignature1Box = (e) => {
    setSignature1Box(e.target.value);
  };
  const _handleSignature2 = (e) => {
    setSignature2(e.target.value);
  };
  const _handleSignature2Box = (e) => {
    setSignature2Box(e.target.value);
  };

  const _handleSubmit = async (e) => {
    e.preventDefault();
    // let ib;
    // if (ibReleaseRadio === 'true') {
    //   ib = true;
    // } else {
    //   ib = false
    // }

  let data = {
    question1,
    question2,
    question3,
    question4,
    question5,
    question6,
    question7,
    question8,
    signature1,
    signature1box,
    signature2,
    signature2box,
    userID: user.id,
  };

  const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/user/update/${user._id}`, {
        method: 'PUT',
        headers: { 'Content-Type' : 'application/json' },
        body: JSON.stringify(data)
    });

    const resdata = await response.json();
    setUser(resdata);
    history.push('/user');
  }

    
    
  

  return (
    <form
      className={classes.root}
      autoComplete="off"
      onSubmit={(e) => _handleSubmit(e)}
    >
      <Typography variant="h2">Daily COVID Form</Typography>

      <div>
        <Container component="riderInfo">
          <Section>
            <Title>
              <h5>
                Your safety is our top priority. To that end, we are asking the
                following health screening questions to ensure a safe work
                environment. Everyone must answer these questions before they
                arrive to work.
              </h5>
              <h4>
                <b>
                  Remember, if you are sick with or exhibiting symptoms of
                  COVID-19 (fever of 100.4˚ or greater, chills, cough, fever,
                  difficulty breathing, muscle aches, sore throat, diarrhea,
                  recent loss of taste or smell), or have had close contact with
                  someone diagnosed with COVID-19 within the last 14 days, you
                  must not report to work.
                </b>
              </h4>
            </Title>
            <Detail>
              <p className={classes.important}>* Required</p>
              <FormControl component="fieldset" className={classes.form}>
                <FormLabel component="legend">Question 1:</FormLabel>
                <FormLabel component="legend">
                  Have you had close contact with someone who in the past 14
                  days was diagnosed with COVID-19 or had a test confirming they
                  have the virus?
                </FormLabel>
                <RadioGroup
                  required
                  id="riderFirstName"
                  aria-label="Rider First Name"
                  value={question1}
                  onChange={(e) => _handleQuestion1(e.target.value)}
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

        <Container>
          <Section>
            <Title>
              <h2>Ibuprofen Release</h2>
            </Title>
            <Detail></Detail>
          </Section>
        </Container>

        <Button
          size="large"
          variant="contained"
          className={classes.margin}
          color="primary"
          type="submit"
        >
          Submit Form
        </Button>
      </div>
    </form>
  );
}

export default Forms;
