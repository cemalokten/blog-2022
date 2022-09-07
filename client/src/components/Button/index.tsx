import React from "react";
import styled from "@emotion/styled";
import { BUTTON } from "../../constants/theme";

interface Props {
  children?: React.ReactNode;
  fontSize?: string[];
}

export const _Button = styled.button<Props>`
  font-family: "Akkurat-Mono";
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
