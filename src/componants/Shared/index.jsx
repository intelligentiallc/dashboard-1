import styled from "styled-components";

import { BORDER_RADIUS, CARDS_BACKGROUND } from "../../config";

export const CartContainer = styled.div`
  border-radius: ${BORDER_RADIUS}px;
  background-color: ${CARDS_BACKGROUND};
  height: calc(100% - 30px);
  display: flex;
  align-items: center;
  justify-content: cecnter;
`;

export const CenterPadding  = styled.div`
padding:8px;
width:100%;
display: flex;
align-items: center;
justify-content: cecnter;
`;