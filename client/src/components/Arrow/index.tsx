import React from "react";
import styled from "styled-components";
import { position, PositionProps, color, ColorProps } from "styled-system";
import * as C from "../../components";

interface Props extends PositionProps {
  leftContent?: string;
  right?: string;
}

export const _Arrow = styled.button<Props>`
  font-family: inherit;
  font-size: 1.5vw;
  color: white;
  text-decoration: none;
  overflow: hidden;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  pointer-events: auto;
  background-color: inherit;
  ${position};

  :hover:after {
    margin-top: 2vw;
    content: ${({ leftContent }) => {
      return `"${leftContent ? `  ${leftContent}` : ""}"`;
    }};
  }

  :active {
    color: red;
  }
`;

const Arrow: React.FC<Props> = ({ ...props }: Props) => {
  return (
    <_Arrow {...props}>
      <C.H1>{"⟵"}</C.H1>
    </_Arrow>
  );
};

export { Arrow };
