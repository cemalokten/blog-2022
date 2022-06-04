import React from "react";
import styled from "styled-components";
import { position, PositionProps, color, ColorProps } from "styled-system";

interface Props extends PositionProps {
  children: React.ReactNode;
}

export const _Arrow = styled.button<Props>`
  font-family: inherit;
  font-size: inherit;
  text-decoration: none;
  overflow: hidden;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  pointer-events: auto;
  background-color: inherit;
  ${position};

  :hover:before {
    color: white;
    background-color: black;
    content: "SOMETHING INTERESTING";
  }

  :active {
    color: red;
  }
`;

const Arrow: React.FC<Props> = ({ children, ...props }: Props) => {
  return <_Arrow {...props}>{children}</_Arrow>;
};

export { Arrow };
