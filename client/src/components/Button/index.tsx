import React from "react";
import styled from "@emotion/styled";
import { BUTTON } from "../../constants/theme";
import { Text } from "@chakra-ui/react";

interface Props {
  children?: React.ReactNode;
  underline?: boolean;
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
  text-align: left;
  :hover {
    border-bottom: 1px solid black;
  }

  :active {
    color: blue;
  }
`;

const Button: React.FC<Props> = ({ children, ...props }: Props) => {
  return (
    <_Button {...props}>
      <Text
        as="span"
        borderBottom="red"
        fontFamily="Helvetica Neue"
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
