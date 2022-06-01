import React from "react";
import { FC } from "react";
import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

interface Props extends SpaceProps {
  children?: React.ReactNode;
}

export const _Paragraph = styled.p<Props>`
  ${space};
  line-height: 1.4em;
`;

const Paragraph: FC<Props> = ({ children, ...props }) => {
  return <_Paragraph {...props}>{children}</_Paragraph>;
};

export { Paragraph };
