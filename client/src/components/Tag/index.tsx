import React from "react";
import { FC } from "react";
import styled from "styled-components";
import { SIZE } from "../../constants/theme";
import { contrastPicker } from "../../helpers/contrast-picker";
import { space, SpaceProps, color, ColorProps } from "styled-system";

interface Props extends SpaceProps, ColorProps {
  children?: React.ReactNode;
  label?: string;
  bg?: string;
  border?: boolean;
  sm?: boolean;
}

export const _Tag = styled.span<Props>`
  ${space};
  ${color};
  font-size: ${({ sm }) => (sm ? SIZE[1] : "")};
  color: ${({ bg }) => (bg ? contrastPicker(bg) : "")};
  padding: 1vw 2vw 0.7vw 2vw;
  border-radius: 50%;
  border: ${({ border }) => (border ? "solid 0.1rem black" : "none")};
`;

const Tag: FC<Props> = ({ label, color, ...props }) => {
  return <_Tag {...props}>{label?.toUpperCase()}</_Tag>;
};

export { Tag };
