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

export const _Pixel = styled.div<Props>`
  display: grid;
  grid-template-columns: 200px 200px 200px;
  ${space};
  ${color};
  ${typography};
  color: ${({ bg }) => (bg ? contrastPicker(bg) : "")};
  border: ${({ border }) => (border ? "solid 0.1rem black" : "none")};

  &:hover {
  }
`;

const Pixel: FC<Props> = ({ label, color, ...props }) => {
  return (
    <_Pixel fontSize={TYPE} padding={TAG_PADDING} {...props}>
      <div>One</div>
      <div>Two</div>
      <div>Three</div>
      <div>Four</div>
      <div>Five</div>
    </_Pixel>
  );
};

export { Pixel };
