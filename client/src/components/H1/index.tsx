import React from "react";
import { FC } from "react";
import styled from "@emotion/styled";
import { typography, TypographyProps } from "styled-system";
import { TYPE } from "../../constants/theme";

interface Props extends TypographyProps {
  children?: string;
}

export const _H1 = styled.h1<Props>`
  ${typography}
  display: inline-block;
`;

const H1: FC<Props> = ({ children }) => {
  return <_H1 fontSize={TYPE}>{children?.toUpperCase()}</_H1>;
};

export { H1 };
