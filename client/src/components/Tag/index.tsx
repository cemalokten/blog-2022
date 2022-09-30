import React, { FC } from "react";
import styled from "@emotion/styled";
import { Tag as TagType } from "../../constants/Types";

export const _Tag = styled.span<TagType>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: ${({ rotation }) => `rotate(${rotation}deg)`};
  left: ${({ left }) => left};
  top: ${({ top }) => top};
  background-color: ${({ backgroundColor }) => backgroundColor};
  opacity: ${({ opacity }) => opacity};
  transition: opacity 0.25s ease-in-out;
  border-radius: ${({ radius = 0.3 }) => radius + "em"};
  border: ${({ border }) => (border ? "solid 0.2rem black" : "none")};
  font-size: ${({ fontSize }) => fontSize};
  font-family: "Lab Mono";
  font-weight: 400;
  pointer-events: none;
  padding: ${({ padding }) => padding + "px"};
  height: ${({ height }) => height + "em"};
  white-space: pre;
  z-index: 1;
`;

const Tag: FC<TagType> = ({ label, color, ...props }) => {
  return <_Tag {...props}>{label}</_Tag>;
};

export { Tag };
