import React, {useState} from 'react';
import { TextField, Container, Button, FormControl, Radio, RadioGroup, FormLabel, FormControlLabel, Typography } from '@material-ui/core';
import Avatar from 'react-avatar';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import styled from "styled-components";
import UploadPhoto from '../Admin/UploadPhoto';

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

const UserProfile = ({user, setUser, setProfilePicture, profilePicture}) =>{
    const classes = useStyles();
    const history = useHistory();

    const [updateProfilePicture, setUpdateProfilePicture] = useState(false);

    const [FirstName, setFirstName] = useState(user.fname);
    const [LastName, setLastName] = useState(user.lname);
    const [Email, setEmail] = useState(user.email);
  const [Phone, setPhone] = useState(user.phone);
  const [password, setPassword] = useState("");
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
  }
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
            password: password,
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
                    label="Rider First Name"
                    defaultValue={FirstName}
                    variant="outlined"
                    onChange={(e) => _handleFirstName(e.target.value)}
                  />
                  <TextField
                    required
                    id="riderLastName"
                    label="Rider last Name"
                    defaultValue={LastName}
                    variant="outlined"
                    onChange={(e) => _handleLastName(e.target.value)}
                  />
                  <TextField
                    id="riderEmail"
                    label="Rider Email"
                    defaultValue={Email}
                    variant="outlined"
                    onChange={(e) => _handleEmail(e.target.value)}
                  />
                  <TextField
                    id="riderCellPhone"
                    label="Rider Cell Phone"
                    defaultValue={Phone}
                    variant="outlined"
                    onChange={(e) => _handlePhone(e.target.value)}
                  />
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
