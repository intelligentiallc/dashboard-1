import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  Drawer,
  List,
  CssBaseline,
  Divider,
  IconButton,
} from "@material-ui/core";

import { ChevronLeft as ChevronLeftIcon } from "@material-ui/icons";
import NavBar from "../NavBar";
import ListItem from "../ListItem";
import {
  SIDE_BAR_WIDTH,
  SIDE_BAR_COLOR,
  SIDE_BAR_TEXT_COLOR,
} from "../../config";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  grow: {
    flexGrow: 1,
  },
  drawer: {
    width: SIDE_BAR_WIDTH,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: SIDE_BAR_WIDTH,
    background: SIDE_BAR_COLOR,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    background: SIDE_BAR_COLOR,
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function SideBar({ children }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  console.log(open);
  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar open={open} toggleOpen={(open) => setOpen(open)} />
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <span>LOGO</span>
          <IconButton onClick={() => setOpen(false)}>
            <ChevronLeftIcon style={{ fill: SIDE_BAR_TEXT_COLOR }} />
          </IconButton>
        </div>
        <Divider />
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem text={text} />
          ))}
        </List>
        <Divider style={{ backgroundColor: SIDE_BAR_TEXT_COLOR }} />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem text={text} />
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
}
