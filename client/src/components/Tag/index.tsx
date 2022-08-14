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
} from "styled-system";

interface Props extends SpaceProps, ColorProps, TypographyProps {
  children?: React.ReactNode;
  label?: string;
  bg?: string;
  border?: boolean;
}

export const _Tag = styled.span<Props>`
  ${space};
  ${color};
  ${typography};
  display: inline;
  color: ${({ bg }) => (bg ? contrastPicker(bg) : "")};
  border-radius: 50%;
  border: ${({ border }) => (border ? "solid 0.1rem black" : "none")};

  &:hover {
    border-radius: 50%;
  }
`;

const Tag: FC<Props> = ({ label, color, ...props }) => {
  return (
    <_Tag fontSize={TYPE} padding={TAG_PADDING} {...props}>
      {label?.toUpperCase()}
    </_Tag>
  );
};

export { Tag };
