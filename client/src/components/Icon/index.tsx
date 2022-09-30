import React, { FC } from "react";
import styled from "@emotion/styled";
import { Box, BoxProps } from "@chakra-ui/react";
import { Icon as IconType } from "../../constants/Types";
import { Post1 } from "./icons/Post1";

export const IconMap = {
  post1: Post1,
};

export const _Icon = styled.div<IconType>``;

interface General extends IconType, BoxProps {}

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
