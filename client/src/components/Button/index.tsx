import React from "react";
import styled from "styled-components";
import { _H1 } from "../H1";

type Props = {
  children: string;
};

export const _Button = styled.button<Props>`
  font-family: inherit;
  font-size: inherit;
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
  return <_Button>{children}</_Button>;
};

export { Button };
