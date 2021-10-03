import React, {useState} from 'react';
import { TextField, Container, Button, Typography, MenuItem } from '@material-ui/core';
import Avatar from 'react-avatar';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import styled from "styled-components";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DatePicker from "@mui/lab/DatePicker";
// import UploadPhoto from '../Admin/UploadPhoto';

// const Wrapper = styled.div`
//   border-radius: 5px;
//   margin: 0 auto;
//   max-width: 1000px;
//   padding-top: 5px;
//   margin-top: 15px;
// `;

const Section = styled.div`
  background-color: white;
  border-radius: 7px;
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
        width: '50ch',
      },
    },
    form: {
      color: 'black',
      display: 'flex',
      alignItems: 'center'
    },
    margin: {
      marginTop: '2rem',
      marginBottom: '20px',
    },
    upload: {
      backgroundColor: 'white',
      borderRadius: '15px',
      width: '210px',
  }
  }));

// const UserProfile = ({ user, setUser, setProfilePicture, profilePicture }) => {
const UserProfile = ({user, setUser}) =>{
    const classes = useStyles();
    const history = useHistory();

    // const [updateProfilePicture, setUpdateProfilePicture] = useState(false);

    const [FirstName, setFirstName] = useState(user.fname);
    const [LastName, setLastName] = useState(user.lname);
    const [Email, setEmail] = useState(user.email);
  const [Phone, setPhone] = useState(user.phone);
  const [address1, setAddress1] = useState(user.address1);
  const [address2, setAddress2] = useState(user.address2);
  const [city, setCity] = useState(user.city);
  const [state, setState] = useState(user.state);
  const [zip, setZip] = useState(user.zip);
  const [county, setCounty] = useState(user.county);
  const [gender, setGender] = useState(user.gender);
  const [dob, setDOB] = useState(user.dob);
  const [race, setRace] = useState(user.race);
  const [ethnicity, setEthnicity] = useState(user.ethnicity);

    const [emergencyContactOneFirstName, setEmergencyContactOneFirstName] = useState(user.ecFirstName);
    const [emergencyContactOneLastName, setEmergencyContactOneLastName] = useState(user.ecLastName);
    const [emergencyContactOnePhone, setEmergencyContactOnePhone] = useState(user.ecPhone);
    const [emergencyContactOneRelation, setEmergencyContactOneRelation] = useState(user.ecRelation);
    

  const _handleFirstName = input => {
    setFirstName(input);
  }

  const _handleLastName = input => {
    setLastName(input);
  }
  const _handleEmail = input => {
    setEmail(input);
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
  const _handleRace = (input) => {
    setRace(input);
  };
  const _handleEthnicity = (input) => {
    setEthnicity(input);
  };

    const _handleEmergencyContactOneFirstName = input => {
      setEmergencyContactOneFirstName(input);
    }
  
    const _handleEmergencyContactOneLastName = input => {
      setEmergencyContactOneLastName(input);
    }
  
    const _handleEmergencyContactOnePhone = input => {
      setEmergencyContactOnePhone(input);
    }
  
    const _handleEmergencyContactOneRelation = input => {
      setEmergencyContactOneRelation(input);
    }
 

    const _handleSubmit = async (e) => {
        e.preventDefault();
        
          let data = {
            fname: FirstName,
            lname: LastName,
            email: Email,
            address1: address1,
            address2: address2,
            city: city,
            state: state,
            zip: zip,
            county: county,
            phone: Phone,
            gender: gender,
            dob: dob,
            race: race,
            ethnicity: ethnicity,
            ecFirstName: emergencyContactOneFirstName,
            ecLastName: emergencyContactOneLastName,
            ecPhone: emergencyContactOnePhone,
            ecRelation: emergencyContactOneRelation
          };
          
        const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/user/update/${user.id}`, {
            method: 'PUT',
            headers: { 'Content-Type' : 'application/json' },
            body: JSON.stringify(data)
        });
        

        const resdata = await response.json();
        setUser(resdata);
        history.push('/user');
    }



    

    return (
      <>
        <Typography variant="h2">Profile</Typography>
        {/* pulls info in from completed form, editable and updates db when changed */}
        <div>
          <Avatar
            src={user.avatarUrl}
            name={user.fname + " " + user.lname}
            size="105"
            round
          />
          <form
            className={classes.root}
            validation
            autoComplete="off"
            onSubmit={(e) => _handleSubmit(e)}
          >
            {/* <Container className={classes.upload}>
              {!!updateProfilePicture ? (
                <UploadPhoto
                  user={user}
                  setUser={setUser}
                  setProfilePicture={setProfilePicture}
                  setUpdateProfilePicture={setUpdateProfilePicture}
                />
              ) : (
                <Button
                  className={classes.picButton}
                  onClick={setUpdateProfilePicture}
                >
                  Change Profile Pic
                </Button>
              )}
            </Container> */}

            <Container component="RiderInformation">
              <Section>
                <Title>
                  <h2>User Information</h2>
                </Title>
                <Detail>
                  <TextField
                    required
                    id="riderFirstName"
                    label="First Name"
                    defaultValue={FirstName}
                    variant="outlined"
                    onChange={(e) => _handleFirstName(e.target.value)}
                  />
                  <TextField
                    required
                    id="riderLastName"
                    label="Last Name"
                    defaultValue={LastName}
                    variant="outlined"
                    onChange={(e) => _handleLastName(e.target.value)}
                  />
                  <TextField
                    id="riderEmail"
                    label="Email"
                    defaultValue={Email}
                    variant="outlined"
                    onChange={(e) => _handleEmail(e.target.value)}
                  />
                  <TextField
                    id="riderCellPhone"
                    label="Phone"
                    defaultValue={Phone}
                    variant="outlined"
                    onChange={(e) => _handlePhone(e.target.value)}
                  />
                  <TextField
                    required
                    id="address1"
                    label="Address 1"
                    defaultValue={address1}
                    variant="outlined"
                    onChange={(e) => _handleAddress1(e.target.value)}
                  />
                  <TextField
                    id="address2"
                    label="Address 2"
                    defaultValue={address2}
                    variant="outlined"
                    onChange={(e) => _handleAddress2(e.target.value)}
                  />
                  <TextField
                    required
                    id="city"
                    label="City"
                    defaultValue={city}
                    variant="outlined"
                    onChange={(e) => _handleCity(e.target.value)}
                  />
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
                  <TextField
                    required
                    id="zip"
                    label="Zip Code"
                    defaultValue={zip}
                    variant="outlined"
                    onChange={(e) => _handleZip(e.target.value)}
                  />
                  <TextField
                    required
                    id="county"
                    label="County"
                    defaultValue={county}
                    variant="outlined"
                    onChange={(e) => _handleCounty(e.target.value)}
                  />
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      disableFuture
                      label="Date of Birth"
                      openTo="year"
                      views={["year", "month", "day"]}
                      value={dob}
                      onChange={(newValue) => {
                        setDOB(newValue);
                      }}
                      renderInput={(params) => (
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          name="dob"
                          id="dob"
                          autoComplete="dob"
                          {...params}
                        />
                      )}
                    />
                  </LocalizationProvider>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="gender"
                    label="Gender"
                    type="text"
                    id="gender"
                    autoComplete="gender"
                    onChange={(e) => _handleGender(e.target.value)}
                    value={gender}
                    select
                  >
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                    <MenuItem value="Non-Binary">Non-Binary</MenuItem>
                  </TextField>
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
                </Detail>
              </Section>
            </Container>

            <Container
              component="Emergencycontact"
              className={classes.marginTop}
            >
              <Section>
                <Title>
                  <h2>Emergency Contact</h2>
                </Title>
                <Detail>
                  <TextField
                    required
                    id="emergencyContactFirstName"
                    label="Emergency Contact First Name"
                    defaultValue={emergencyContactOneFirstName}
                    variant="outlined"
                    onChange={(e) =>
                      _handleEmergencyContactOneFirstName(e.target.value)
                    }
                  />

                  <TextField
                    required
                    id="emergencyContactLastName"
                    label="Emergency Contact Last Name"
                    defaultValue={emergencyContactOneLastName}
                    variant="outlined"
                    onChange={(e) =>
                      _handleEmergencyContactOneLastName(e.target.value)
                    }
                  />

                  <TextField
                    id="ecPhone"
                    label="Emergency Contact Phone"
                    defaultValue={emergencyContactOnePhone}
                    variant="outlined"
                    onChange={(e) =>
                      _handleEmergencyContactOnePhone(e.target.value)
                    }
                  />

                  <TextField
                    id="ecRelation"
                    label="Emergency Contact Relationship"
                    defaultValue={emergencyContactOneRelation}
                    variant="outlined"
                    onChange={(e) =>
                      _handleEmergencyContactOneRelation(e.target.value)
                    }
                  />
                </Detail>
              </Section>
            </Container>

            <Container>
              <Button
                size="large"
                variant="contained"
                className={classes.margin}
                color="primary"
                type="submit"
              >
                Save
              </Button>
            </Container>
          </form>
        </div>
      </>
    );
}

export default UserProfile;
