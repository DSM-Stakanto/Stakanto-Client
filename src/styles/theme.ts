import styled from "styled-components";
import { Link } from "react-router-dom";

export const theme = {
  colors: {
    mainColor: "#31295F",
    white: "#FDFDFD",
    pink: "#FA03F1",
    lightPink: "#F362EE",
    red: "#DF3131",
    murkyBlue: "#4D527E",
    black: "#000"
  },
};
export const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
