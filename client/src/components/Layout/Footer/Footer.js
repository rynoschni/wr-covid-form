/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import styles from "./assets/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="mailto:mistymedic4@gmail.com"
                className={classes.block}
                target="_blank"
              >
                Contact Misty
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="mailto:ryan@10bladepro.com?subject=COVID Site Trouble"
                className={classes.block}
                target="_blank"
              >
                Issues with the site? Contact Ryan
              </a>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          <a
                href="https://10bladepro.com"
                className={classes.block}
                target="_blank"
              >
          &copy; {1900 + new Date().getYear()} {""}
          10Blade Productions
          </a>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
