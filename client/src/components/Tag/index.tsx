import React from "react";
import { FC } from "react";
import styled from "@emotion/styled";
import { TYPE, TAG_PADDING } from "../../constants/theme";
import { contrastPicker } from "../../helpers/contrast-picker";

interface Props {
  children?: React.ReactNode;
  label?: string;
  bg?: string;
  border?: boolean;
  rotation?: number;
  opacity?: number;
  color?: string;
  fontSize?: string[];
  padding?: string[];
  top?: string;
  left?: string;
  backgroundColor?: string;
  radius?: number;
  height?: number;
}

export const _Tag = styled.span<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  left: ${({ left }) => left};
  top: ${({ top }) => top};
  position: absolute;
  background-color: ${({ backgroundColor }) => backgroundColor};
  font-family: "Akkurat-Mono";
  transform: ${({ rotation }) => `rotate(${rotation}deg)`};
  border-radius: 0.3em;
  color: ${({ bg }) => (bg ? contrastPicker(bg) : "")};
  border: ${({ border }) => (border ? "solid 0.2rem black" : "none")};
  pointer-events: none;
  opacity: ${({ opacity }) => opacity};
  transition: opacity 0.25s ease-in-out;
  padding: ${({ padding }) => padding};
  font-size: ${({ fontSize }) => fontSize};
  height: ${({ height }) => height + "em"};
`;

const Tag: FC<Props> = ({ label, color, ...props }) => {
  return (
    <_Tag fontSize={TYPE} padding={TAG_PADDING} {...props}>
      {label}
    </_Tag>
  );
};

export { Tag };
