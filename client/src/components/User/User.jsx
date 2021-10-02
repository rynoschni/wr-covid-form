import React, {useState, useEffect} from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Avatar from 'react-avatar';
//MUI Core, labs, and styles
import { makeStyles } from '@material-ui/core/styles';
import { ButtonBase, Typography, Breadcrumbs, CardContent, Paper, Chip } from '@material-ui/core';
import { Alert } from '@mui/lab';
//MUI Icons
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import GroupIcon from '@material-ui/icons/Group';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';

import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
//components
import UserProfile from "./UserProfile";
import InitialForm from "./InitialForm";
import UserDocuments from './UserDocuments';
import UserTeamList from "./UserTeamList";
//styles
import styled from 'styled-components';

const BreadcrumbWrapper = styled.div`
  background-color: #FFBA00;
  width: 350px;
  border-radius: 0 7px 7px 0;
`;

const Card = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    background-color: white;
    border: 1px solid lightgrey;
    border-radius: 5px;
    text-align: left;
    margin: 18px 55px;

    .title {
        font-weight: bold;
        margin-right: 10px;
    }
    .paper{
      min-width: 390px;
    }
`;

const Title = styled.div`
    border-radius: 7px 7px 0 0;
    padding: 0 7px;
`;

const images = [
  {
    url: '/editProfile.jpg',
    title: 'Edit Profile',
    width: '33%',
    href: '/user/profile'
  },
  {
    url: '/Form.png',
    title: 'COVID Form',
    width: '33%',
    href: '/user/form'
  },
  {
    url: '/documentsInfo.jpg',
    title: 'Past Forms & Results',
    width: '33%',
    href: '/user/info',
},
];

const useStyles = makeStyles((theme) => ({
  root: {
    color: '#E6EAF3',
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
    
  },
  picButton: {
    dipslay: 'block'
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
    link: {
      display: 'flex',
      alignItems: 'center',
    },
    icon: {
      marginRight: "5px",
      width: 20,
      height: 20,
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'relative',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 20%',
    margin: '5px 20px ',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    margin: '5px 20px',
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
  alert: {
    width: 500,
    margin: "0 auto 24px",
    alignContent: 'center',
    paddingLeft: '120px',
  },
  upload: {
    backgroundColor: '#E6EAF3',
    borderRadius: '30px',
    width: '210px'
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  chipYes: {
      margin: theme.spacing(0.5),
      backgroundColor: '#4caf50',
  }
}));


const User = (props) => {
    const { user, setUser } = props;
    const classes = useStyles();
  const [profilePicture, setProfilePicture] = useState(user.avatarUrl)
  
  console.log("user", user)

  useEffect(() => {
    console.log("userID", user.id)
    // const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/form/${user.id}`, {
    //   method: "GET",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(data),
    // });
    
    })
    
    

  return (
    <>
      <Switch>
        <Route exact path="/user">
          <h1>Welcome {user.fname}!</h1>
          {!!user.formDue || user.ecFirstName === "" ? (
            <Alert className={classes.alert} variant="filled" severity="error">
              Critical Profile Items Missing
              <br />
              {!!user.formDue ? (
                <Link to="/user/forms">Emergency Contact Form</Link>
              ) : (
                ""
              )}
            </Alert>
          ) : (
            ""
          )}
          <div>
            <Card key={user._id} variant="outlined">
              <CardContent>
                <Paper className="paper">
                  <Title className="blue">
                    <Typography variant="h5">User Info:</Typography>
                  </Title>
                  <Avatar
                    src={user.avatarUrl}
                    name={user.fname + " " + user.lname}
                    size="105"
                    round
                  />
                  <Typography variant="h4">
                    {user.fname + " " + user.lname}
                  </Typography>
                  <Chip
                    className={classes.chip}
                    icon={<PhoneAndroidIcon />}
                    label={user.phone}
                  />
                  <Chip
                    className={classes.chip}
                    icon={<AlternateEmailIcon />}
                    label={user.email}
                  />
                </Paper>
              </CardContent>
              <p></p>
              <CardContent>
                <p></p>

                <p></p>
              </CardContent>
              <CardContent>
                <Paper className="paper">
                  <Title className="blue">
                    <Typography variant="h5">Emergency Contact Information:</Typography>
                  </Title>
                  <Typography variant="h4">
                    {user.ecFirstName + " " + user.ecLastName}
                  </Typography>
                  <Chip
                    className={classes.chip}
                    icon={<PhoneAndroidIcon />}
                    label={user.ecPhone}
                  />
                  <Chip
                    className={classes.chip}
                    icon={<GroupIcon />}
                    label={user.ecRelation}
                  />
                </Paper>
              </CardContent>
            </Card>
          </div>

          <div className={classes.root}>
            {images.map((image) => (
              <ButtonBase
                focusRipple
                key={image.title}
                className={classes.image}
                focusVisibleClassName={classes.focusVisible}
                style={{
                  width: image.width,
                }}
              >
                <Link to={image.href}>
                  <span
                    className={classes.imageSrc}
                    style={{
                      backgroundImage: `url(${image.url})`,
                    }}
                  />
                  <span className={classes.imageBackdrop} />
                  <span className={classes.imageButton}>
                    <Typography
                      component="span"
                      variant="subtitle1"
                      color="inherit"
                      className={classes.imageTitle}
                    >
                      {image.title}
                      <span className={classes.imageMarked} />
                    </Typography>
                  </span>
                </Link>
              </ButtonBase>
            ))}
          </div>
        </Route>

        <Route path="/user/profile">
          <BreadcrumbWrapper>
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="breadcrumb"
            >
              <Link className={classes.link} to="/user">
                <HomeIcon className={classes.icon} />
                User Home
              </Link>
              <Typography color="textPrimary">
                <AccountCircleIcon className={classes.icon} />
                Account Profile
              </Typography>
            </Breadcrumbs>
          </BreadcrumbWrapper>
          <UserProfile
            user={user}
            setUser={setUser}
            setProfilePicture={setProfilePicture}
            profilePicture={profilePicture}
          />
        </Route>

        <Route path="/user/form">
          <InitialForm user={user} setUser={setUser} />
        </Route>

        <Route path="/user/team">
          <BreadcrumbWrapper>
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="breadcrumb"
            >
              <Link className={classes.link} to="/user">
                <HomeIcon className={classes.icon} />
                User Home
              </Link>
              <Typography color="textPrimary">
                <GroupIcon className={classes.icon} />
                Team users
              </Typography>
            </Breadcrumbs>
          </BreadcrumbWrapper>
          <UserTeamList />
        </Route>

        <Route path="/user/info">
          <BreadcrumbWrapper>
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="breadcrumb"
            >
              <Link className={classes.link} to="/user">
                <HomeIcon className={classes.icon} />
                User Home
              </Link>
              <Typography color="textPrimary">
                <AssignmentIcon className={classes.icon} />
                Documents and Forms
              </Typography>
            </Breadcrumbs>
          </BreadcrumbWrapper>
          <UserDocuments user={user} />
        </Route>
      </Switch>
    </>
  );
}
export default User;