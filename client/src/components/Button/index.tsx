import React from "react";
import styled from "styled-components";
import { BUTTON } from "../../constants/theme";
import { typography, TypographyProps, space, SpaceProps } from "styled-system";

interface Props extends TypographyProps, SpaceProps {
  children?: React.ReactNode;
}

export const _Button = styled.button<Props>`
  ${typography}
  ${space};
  font-family: "Helvetica Neue";
  font-style: normal;
  letter-spacing: 0.05em;
  border: none;
  padding: 0;
  background-color: inherit;
  cursor: pointer;
  pointer-events: auto;
  transition: border 0.25s ease-out;
  border-bottom: 1px solid transparent;

  :hover {
    border-bottom: 1px solid black;
  }
  :active {
    color: red;
  }
`;

const Button: React.FC<Props> = ({ children, ...props }: Props) => {
  return (
    <_Button fontSize={BUTTON} {...props}>
      {children}
    </_Button>
  );
};

export { Button };
