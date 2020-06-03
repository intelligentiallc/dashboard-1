import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import styled from "styled-components";
import { SIDE_BAR_TEXT_COLOR, SIDE_BAR_TEXT_COLOR_HOVER } from "../../config";
import { Icon } from "semantic-ui-react";

const ListItemContainer = styled.div`
  &:hover span {
    color: ${SIDE_BAR_TEXT_COLOR_HOVER};
  }

  & i {
    color: ${(props) => (props.color ? props.color : SIDE_BAR_TEXT_COLOR)};
  }
  &:hover i {
    color: ${SIDE_BAR_TEXT_COLOR_HOVER};
  }
`;
export default function CustomListItem({ item }) {
  const {
    text,
    textColor = SIDE_BAR_TEXT_COLOR,
    iconColor = SIDE_BAR_TEXT_COLOR,
    icon = "users",
  } = item;
  return (
    <ListItemContainer color={iconColor}>
      <ListItem button key={text}>
        <ListItemIcon>
          <Icon name={icon} size="large" />
        </ListItemIcon>
        <ListItemText
          className="custom-list-item"
          primary={text}
          style={{ color: textColor }}
        />
      </ListItem>
    </ListItemContainer>
  );
}
