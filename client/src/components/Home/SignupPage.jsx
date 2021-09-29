import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";
import { MenuItem } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    color: "black",
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    backgroundColor: "white",
    padding: "30px 30px 30px 30px",
    borderRadius: "20px",
  },
  submit: {
    backgroundColor: "#223F84",
    margin: theme.spacing(3, 0, 2),
  },
  red: {
    color: "red",
  },
}));

export default function SignUp(props) {
  const classes = useStyles();
  const { setUser, setIsLoggedIn } = props;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [county, setCounty] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDOB] = useState("");
  const [race, setRace] = useState("");
  const [ethnicity, setEthnicity] = useState("");
  // const [checked, setChecked] = useState(false);
  const history = useHistory();

  const _handleFirstName = (input) => {
    setFirstName(input);
  };
  const _handleLastName = (input) => {
    setLastName(input);
  };
  const _handleEmail = (input) => {
    setEmail(input);
  };
  const _handlePassword = (input) => {
    setPassword(input);
  };
  const _handleAddress1 = (input) => {
    setAddress1(input);
  };
  const _handleAddress2 = (input) => {
    setAddress2(input);
  };
  const _handleCity = (input) => {
    setCity(input);
  };
  const _handleState = (input) => {
    setState(input);
  };
  const _handleCounty = (input) => {
    setCounty(input);
  };
  const _handleZip = (input) => {
    setZip(input);
  };
  const _handlePhone = (input) => {
    setPhone(input);
  };
  const _handleGender = (input) => {
    setGender(input);
  };
  const _handleDOB = (input) => {
    setDOB(input);
  };
  const _handleRace = (input) => {
    setRace(input);
  };
  const _handleEthnicity = (input) => {
    setEthnicity(input);
  };
  // const _handleCheck = (value) => {
  //   setChecked(!checked);
  // }

  const _handleSubmit = async (e) => {
    e.preventDefault();

    let data = {
      fName: firstName,
      lName: lastName,
      email: email,
      password: password,
      address1: address1,
      address2: address2,
      city: city,
      state: state,
      zip: zip,
      county: county,
      phone: phone,
      gender: gender,
      dob: dob,
      race: race,
      ethnicity: ethnicity,
    };

    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/user/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const resdata = await response.json();
    setUser(resdata);
    setIsLoggedIn(true);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setAddress1("");
    setAddress2("");
    setCity("");
    setState("");
    setZip("");
    setCounty("");
    setPhone("");
    setGender("");
    setDOB("");
    setRace("");
    setEthnicity("");
    history.push("/user");
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form
          className={classes.form}
          validate
          onSubmit={(e) => _handleSubmit(e)}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={(e) => _handleFirstName(e.target.value)}
                value={firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={(e) => _handleLastName(e.target.value)}
                value={lastName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                type="email"
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e) => _handleEmail(e.target.value)}
                value={email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => _handlePassword(e.target.value)}
                value={password}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="address1"
                label="Street Address"
                type="text"
                id="address1"
                autoComplete="address1"
                onChange={(e) => _handleAddress1(e.target.value)}
                value={address1}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="address2"
                label="Address 2 (Apt, Suite, etc)"
                type="text"
                id="address2"
                autoComplete="address2"
                onChange={(e) => _handleAddress2(e.target.value)}
                value={address2}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="city"
                label="City"
                type="text"
                id="city"
                autoComplete="city"
                onChange={(e) => _handleCity(e.target.value)}
                value={city}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="state"
                label="State"
                inputProps={{ placeholder: "State" }}
                id="state"
                autoComplete="state"
                onChange={(e) => _handleState(e.target.value)}
                value={state}
                select
              >
                <MenuItem value="">clear input</MenuItem>
                <MenuItem value="AL">AL</MenuItem>
                <MenuItem value="AK">AK</MenuItem>
                <MenuItem value="AZ">AZ</MenuItem>
                <MenuItem value="AR">AR</MenuItem>
                <MenuItem value="CA">CA</MenuItem>
                <MenuItem value="CO">CO</MenuItem>
                <MenuItem value="CT">CT</MenuItem>
                <MenuItem value="DE">DE</MenuItem>
                <MenuItem value="FL">FL</MenuItem>
                <MenuItem value="GA">GA</MenuItem>
                <MenuItem value="HI">HI</MenuItem>
                <MenuItem value="ID">ID</MenuItem>
                <MenuItem value="IL">IL</MenuItem>
                <MenuItem value="IN">IN</MenuItem>
                <MenuItem value="IA">IA</MenuItem>
                <MenuItem value="KS">KS</MenuItem>
                <MenuItem value="KY">KY</MenuItem>
                <MenuItem value="LA">LA</MenuItem>
                <MenuItem value="ME">ME</MenuItem>
                <MenuItem value="MD">MD</MenuItem>
                <MenuItem value="MA">MA</MenuItem>
                <MenuItem value="MI">MI</MenuItem>
                <MenuItem value="MN">MN</MenuItem>
                <MenuItem value="MS">MS</MenuItem>
                <MenuItem value="MO">MO</MenuItem>
                <MenuItem value="AL">MT</MenuItem>
                <MenuItem value="NE">NE</MenuItem>
                <MenuItem value="NV">NV</MenuItem>
                <MenuItem value="NH">NH</MenuItem>
                <MenuItem value="NJ">NJ</MenuItem>
                <MenuItem value="NM">NM</MenuItem>
                <MenuItem value="NY">NY</MenuItem>
                <MenuItem value="NC">NC</MenuItem>
                <MenuItem value="ND">ND</MenuItem>
                <MenuItem value="OH">OH</MenuItem>
                <MenuItem value="OK">OK</MenuItem>
                <MenuItem value="OR">OR</MenuItem>
                <MenuItem value="PA">PA</MenuItem>
                <MenuItem value="RI">RI</MenuItem>
                <MenuItem value="SC">SC</MenuItem>
                <MenuItem value="SD">SD</MenuItem>
                <MenuItem value="TN">TN</MenuItem>
                <MenuItem value="TX">TX</MenuItem>
                <MenuItem value="UT">UT</MenuItem>
                <MenuItem value="VT">VT</MenuItem>
                <MenuItem value="VA">VA</MenuItem>
                <MenuItem value="WA">WA</MenuItem>
                <MenuItem value="WV">WV</MenuItem>
                <MenuItem value="WI">WI</MenuItem>
                <MenuItem value="WY">WY</MenuItem>
              </TextField>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="zip"
                label="Zipcode"
                type="text"
                id="zip"
                autoComplete="zip"
                onChange={(e) => _handleZip(e.target.value)}
                value={zip}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="phone"
                label="Phone # (just #'s)"
                type="tel"
                pattern="[0-9]{10}"
                id="phone"
                autoComplete="phone"
                onChange={(e) => _handlePhone(e.target.value)}
                value={phone}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="race"
                label="Race"
                type="text"
                id="race"
                autoComplete="race"
                onChange={(e) => _handleRace(e.target.value)}
                value={race}
                select
              >
                <MenuItem value="American Indian or Alaska Native">
                  American Indian or Alaska Native
                </MenuItem>
                <MenuItem value="Asian">Asian</MenuItem>
                <MenuItem value="Black or African American">
                  Black or African American
                </MenuItem>
                <MenuItem value="Hispanic or Latino">
                  Hispanic or Latino
                </MenuItem>
                <MenuItem value="Native Hawaiian or Other Pacific Islander">
                  Native Hawaiian or Other Pacific Islander
                </MenuItem>
                <MenuItem value="White, non-hispanic">White</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="ethnicity"
                label="Ethnicity"
                type="text"
                id="ethnicity"
                autoComplete="ethnicity"
                onChange={(e) => _handleEthnicity(e.target.value)}
                value={ethnicity}
                select
              >
                <MenuItem value="Hispanic">Hispanic</MenuItem>
                <MenuItem value="Non-Hispanic">Non-Hispanic</MenuItem>
              </TextField>
            </Grid>
            {/* <Grid item xs={12}>
              <FormControlLabel
                required
                control={<Checkbox value={checked} onClick={e => _handleCheck(e.target.value)} color="primary" />}
                label="I acknowledge that I am above the age of 18."
              />
            </Grid> */}
          </Grid>
          <Button
            type="submit"
            // disabled={!checked}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/signin" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
