import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
  CardContent,
  CardActions,
  CardHeader,
  Card,
  Box,
} from "@material-ui/core";
import {
  PersonAdd as PersonAddIcon,
  ArrowUpward as ArrowUpwardIcon,
  ArrowDownward as ArrowDownwardIcon,
} from "@material-ui/icons";
import styled from "styled-components";

import { RED, GREEN, BORDER_RADIUS, CARDS_BACKGROUND } from "../../config";
const FooterText = styled.span`
  color: ${(props) => (props.up ? GREEN : RED)};
`;

const Hint = styled.span``;
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    borderRadius: BORDER_RADIUS,
    boxShadow: "0 0 35px 0 rgba(154,161,171,.15)",
    margin: "auto",
    marginBottom: 30,
    backgroundColor: CARDS_BACKGROUND,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

export default function InfoCard({
  title = " Customer",
  number = "3216",
  hint = "Since last month",
  subheader = "helper text",
  icon = <PersonAddIcon />,
  rate = 32.0,
  up = true,
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Avatar aria-label="recipe">{icon}</Avatar>}
        title={title}
        subheader={subheader}
      />
      <CardContent style={{ padding: "0px 1rm" }}>
        <h1>{number}</h1>
      </CardContent>
      <Box p={1}>
        <CardActions>
          <FooterText up={up}>
            {up ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />} {`${rate} %`}
          </FooterText>
          <Hint>{hint}</Hint>
        </CardActions>
      </Box>
    </Card>
  );
}
