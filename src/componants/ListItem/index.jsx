import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import styled from "styled-components";
import { MoveToInbox as MailIcon } from "@material-ui/icons";
import { SIDE_BAR_TEXT_COLOR, SIDE_BAR_TEXT_COLOR_HOVER } from "../../config";

const IconContainer = styled.div`
  & > svg {
    fill: ${(props) => (props.color ? props.color : SIDE_BAR_TEXT_COLOR)};
  }
  & > svg:hover {
    fill: ${SIDE_BAR_TEXT_COLOR_HOVER};
  }
`;
export default function CustomListItem({
  text,
  textColor = SIDE_BAR_TEXT_COLOR,
  iconColor = SIDE_BAR_TEXT_COLOR,
  icon = <MailIcon />,
}) {
  return (
    <ListItem button key={text}>
      <ListItemIcon>
        <IconContainer color={iconColor}>{icon}</IconContainer>
      </ListItemIcon>
      <ListItemText primary={text} style={{ color: textColor }} />
    </ListItem>
  );
}
