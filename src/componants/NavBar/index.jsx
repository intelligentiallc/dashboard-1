import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import SearchBar from "../SearchBar";
import { Menu as MenuIcon } from "@material-ui/icons";
import { SIDE_BAR_WIDTH , APP_NAME } from "../../config";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(0, 4),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: SIDE_BAR_WIDTH,
    width: `calc(100% - ${SIDE_BAR_WIDTH}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function PrimarySearchAppBar({ open, toggleOpen = () => {} }) {
  const classes = useStyles();
  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}
      color="white"
    >
      <Toolbar className={classes.toolbar}>
        <div className={classes.center}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => toggleOpen(true)}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" >
            {APP_NAME}
          </Typography>
          <SearchBar />
        </div>
        <div>
          <span>mina</span>
        </div>
      </Toolbar>
    </AppBar>
  );
}
