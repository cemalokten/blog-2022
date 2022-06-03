import React from "react";
import { FC } from "react";
import styled from "styled-components";
import { Grid, Cell } from "styled-css-grid";
import { Props } from "../../constants/Types";

export const _H1 = styled.h1<Props>`
  display: inline-block;
`;
const H1: FC<Props> = ({ children }) => {
  return <_H1>{children.toUpperCase()}</_H1>;
};

export { H1 };
