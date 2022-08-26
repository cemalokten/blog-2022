import React from "react";
import { FC } from "react";
import styled from "styled-components";
import { P } from "../../constants/theme";
import { space, SpaceProps, typography, TypographyProps } from "styled-system";

interface Props extends SpaceProps, TypographyProps {
  children?: React.ReactNode;
}

export const _Paragraph = styled.p<Props>`
  ${space};
  ${typography};
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
