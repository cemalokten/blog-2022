import React from "react";
import { FC } from "react";
import { Text, Box } from "@chakra-ui/react";
import { P } from "../../constants/theme";

interface Props {
  children?: React.ReactNode;
  fontSize?: string[];
}

const Paragraph: FC<Props> = ({ children, ...props }) => {
  return (
    <Text
      letterSpacing="0.02em"
      lineHeight="45px"
      fontStyle="normal"
      fontWeight="400"
      fontSize={P}
      {...props}
    >
      {children}
    </Text>
  );
};

export { Paragraph };
