import React from "react";
import { FC } from "react";
import styled from "styled-components";
import { TYPE } from "../../constants/theme";
import { space, SpaceProps, typography, TypographyProps } from "styled-system";

interface Props extends SpaceProps, TypographyProps {
  children?: React.ReactNode;
}

export const _Paragraph = styled.p<Props>`
  ${space};
  ${typography};
  line-height: 1.4em;
`;

const Paragraph: FC<Props> = ({ children, ...props }) => {
  return (
    <_Paragraph fontSize={TYPE} {...props}>
      {children}
    </_Paragraph>
  );
};

export { Paragraph };
