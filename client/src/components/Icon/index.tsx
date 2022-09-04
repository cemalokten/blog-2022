import React from "react";
import { FC } from "react";
import { Props } from "../../constants/Types";
import styled from "styled-components";
import { Post1 } from "./icons/Post1";

export const IconMap = {
  post1: Post1,
};

export const _Icon = styled.div<Props>``;

const Icon: FC<Props> = ({ width, height, colors, icon }) => {
  const StyledIcon = IconMap[icon as keyof typeof IconMap];

  return (
    <_Icon>
      <StyledIcon width={width} />
    </_Icon>
  );
};

export { Icon };
