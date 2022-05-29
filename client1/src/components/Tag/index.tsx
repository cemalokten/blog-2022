import React from "react";
import { FC } from "react";
import styled from "styled-components";
import { contrastPicker } from "../../helpers/contrast-picker";
import { space, SpaceProps, color, ColorProps } from "styled-system";

interface Props extends SpaceProps, ColorProps {
  children?: React.ReactNode;
  label?: string;
  bg?: string;
}

export const _Tag = styled.span<Props>`
  ${space};
  ${color};
  color: ${({ bg }) => (bg ? contrastPicker(bg) : "")};
  padding: 1vw 2vw 0.7vw 2vw;
  border-radius: 50%;
`;

const Tag: FC<Props> = ({ label, color, ...props }) => {
  return <_Tag {...props}>{label?.toUpperCase()}</_Tag>;
};

export { Tag };
