import styled from "styled-components";
import { grid, GridProps, flexbox, FlexboxProps } from "styled-system";

import { Box, Props as BoxProps } from "../Box";

interface Props extends GridProps, FlexboxProps, BoxProps {
  children: React.ReactNode;
  hover?: string;
}

const Flex = styled(Box)<Props>`
  display: flex;
  ${flexbox};
  ${grid};
`;

Flex.displayName = "Flex";

export { Flex };
