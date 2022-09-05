import React from "react";
import { FC } from "react";
import styled from "styled-components";
import { TYPE, TAG_PADDING } from "../../constants/theme";
import { contrastPicker } from "../../helpers/contrast-picker";
import {
  space,
  SpaceProps,
  color,
  ColorProps,
  typography,
  TypographyProps,
  position,
  PositionProps,
} from "styled-system";

interface Props extends SpaceProps, ColorProps, TypographyProps, PositionProps {
  children?: React.ReactNode;
  label?: string;
  bg?: string;
  border?: boolean;
  rotation?: number;
}

export const _Tag = styled.span<Props>`
  ${space};
  ${color};
  ${typography};
  ${position};
  font-family: "Akkurat-Mono";
  transform: ${({ rotation }) => `rotate(${rotation}deg)`};
  border-radius: 0.2em;
  display: inline;
  color: ${({ bg }) => (bg ? contrastPicker(bg) : "")};
  border: ${({ border }) => (border ? "solid 0.2rem black" : "none")};
  pointer-events: none;
  opacity: ${({ opacity }) => opacity};
  transition: opacity 0.25s ease-in-out;
`;

const Tag: FC<Props> = ({ label, color, ...props }) => {
  return (
    <_Tag fontSize={TYPE} padding={TAG_PADDING} {...props}>
      {label}
    </_Tag>
  );
};

export { Tag };
