import React from "react";
import { FC } from "react";
import styled from "styled-components";
import { Props } from "../../constants/Types";

export const _H1 = styled.h1<Props>`
  display: inline-block;
`;
const H1: FC<Props> = ({ children }) => {
  return <_H1>{children}</_H1>;
};

export { H1 };
