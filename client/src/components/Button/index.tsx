import React from "react";
import styled from "styled-components";
import { TYPE } from "../../constants/theme";
import { typography, TypographyProps } from "styled-system";

interface Props extends TypographyProps {
  children?: React.ReactNode;
}

export const _Button = styled.button<Props>`
  ${typography}
  font-family: inherit;
  text-decoration: none;
  overflow: hidden;
  border: none;
  padding: 0;
  margin: 0;
  background-color: inherit;
  cursor: pointer;
  pointer-events: auto;

  :hover {
    color: blue;
  }
  :active {
    color: red;
  }
`;

const Button: React.FC<Props> = ({ children }: Props) => {
  return <_Button fontSize={TYPE}>{children}</_Button>;
};

export { Button };
