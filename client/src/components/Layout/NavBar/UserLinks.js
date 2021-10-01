/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
import Avatar from 'react-avatar';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import { Apps } from "@material-ui/icons";

// core components
import CustomDropdown from "./assets/CustomDropdown";
import Button from "./assets/Button.js";

import styles from "./assets/headerLinksStyle.js";

import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(styles);

export default function UserLinks(props) {
  const { user, setUser, setIsLoggedIn } = props;
  const history = useHistory();

  const _handleClick = () => {
    setIsLoggedIn(false);
    setUser('');
    history.push('/');
  } 

  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button className={classes.navLink}
          color="transparent"
          onClick={() => _handleClick()}
        >
          Log Out
        </Button>
        
      </ListItem>
    </List>
  );
}
