import React from "react";
import { FC } from "react";
import styled from "styled-components";
import { Props } from "../../constants/Types";

export const _H2 = styled.h2<Props>`
  display: inline;
`;

const H2: FC<Props> = ({ children }) => {
  return <_H2>{children}</_H2>;
};

export { H2 };
