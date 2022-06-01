import styled from "styled-components";
import { space, SpaceProps, border, BorderProps } from "styled-system";

interface Props extends SpaceProps, BorderProps {
  children: React.ReactNode;
}

const Box = styled.div<Props>`
  ${border};
  ${space};
`;

export { Box };
