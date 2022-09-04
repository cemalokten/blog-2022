import styled from "styled-components";
import { grid, GridProps, flexbox, FlexboxProps, width } from "styled-system";

import { Box, Props as BoxProps } from "../Box";

interface Props extends GridProps, FlexboxProps, BoxProps {
  children: React.ReactNode;
  hover?: string;
  gap?: number;
}

const Flex = styled(Box)<Props>`
  display: flex;
  gap: ${({ gap }) => (gap ? `${gap}%` : 0)} ${flexbox};
  ${width}
  ${grid};
`;

Flex.displayName = "Flex";

export { Flex };
