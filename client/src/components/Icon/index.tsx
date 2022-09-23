import React from "react";
import { FC } from "react";
import { IconProps } from "../../constants/Types";
import styled from "@emotion/styled";
import { Post1 } from "./icons/Post1";
import { Box, BoxProps } from "@chakra-ui/react";

export const IconMap = {
  post1: Post1,
};

interface General extends IconProps, BoxProps {}

export const _Icon = styled.div<IconProps>``;

const Icon: FC<General> = ({
  iconWidth,
  height,
  iconColor,
  icon,
  ...props
}) => {
  const StyledIcon = IconMap[icon as keyof typeof IconMap];

  return (
    <Box {...props}>
      <StyledIcon iconWidth={iconWidth} iconColor={iconColor} />
    </Box>
  );
};

export { Icon };
