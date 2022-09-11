import React from "react";
import { FC } from "react";
import { Text } from "@chakra-ui/react";
import { P } from "../../constants/theme";

interface Props {
  children?: React.ReactNode;
  fontSize?: string[];
}

const Paragraph: FC<Props> = ({ children, ...props }) => {
  return (
    <Text
      fontFamily="Akkurat-Mono"
      lineHeight="40px"
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
