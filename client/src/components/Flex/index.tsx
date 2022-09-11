import styled from "@emotion/styled";
import { Flex as _Flex, Box as _Box } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
  hover?: string;
  gap?: string;
}

const Flex = styled(_Flex)<Props>`
  display: flex;
  gap: ${({ gap }) => (gap ? `${gap}` : 0)};
`;

const Grid = styled(_Box)<Props>`
  display: grid;
`;

Flex.displayName = "Flex";

export { Flex, Grid };
