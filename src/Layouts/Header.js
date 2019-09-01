import React, { Component, Fragment } from "react";
import { AppBar, Toolbar, IconButton, MenuIcon } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

export default class extends Component {
  render() {
    return (
      <Fragment>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Fragment>
    );
  }
}
