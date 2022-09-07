import React from "react";
import { FC } from "react";
import styled from "@emotion/styled";
import { typography, TypographyProps } from "styled-system";
import { TYPE } from "../../constants/theme";

interface Props extends TypographyProps {
  children?: string;
}

export const _H2 = styled.h2<Props>`
  ${typography}
  display: inline;
`;

const H2: FC<Props> = ({ children }) => {
  return <_H2 fontSize={TYPE}>{children}</_H2>;
};

export { H2 };
