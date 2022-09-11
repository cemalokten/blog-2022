import React from "react";
import styled from "@emotion/styled";
import { BUTTON } from "../../constants/theme";
import { Text } from "@chakra-ui/react";

interface Props {
  children?: React.ReactNode;
  fontSize?: string[];
}

export const _Button = styled.button<Props>`
  background-color: inherit;
  border-bottom: 1px solid transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  pointer-events: auto;
  transition: border 0.25s ease-out;
  border: 1px solid transparent;

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
      <Text
        fontFamily="Akkurat-Mono"
        fontSize={BUTTON}
        fontStyle="normal"
        letterSpacing="0.05em"
      >
        {children}
      </Text>
    </_Button>
  );
};

export { Button };
