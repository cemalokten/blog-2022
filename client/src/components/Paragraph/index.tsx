import React from "react";
import { FC } from "react";
import styled from "@emotion/styled";
import { P } from "../../constants/theme";

interface Props {
  children?: React.ReactNode;
  fontSize?: string[];
}

export const _Paragraph = styled.p<Props>`
  font-family: "Akkurat-Mono";
  line-height: 40px;
  font-style: normal;
  font-weight: 400;
`;

const Paragraph: FC<Props> = ({ children, ...props }) => {
  return (
    <_Paragraph fontSize={P} {...props}>
      {children}
    </_Paragraph>
  );
};

export { Paragraph };
