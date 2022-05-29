import styled from "styled-components";
import { space, SpaceProps } from 'styled-system'

interface Props extends SpaceProps {
    children: React.ReactNode;
  }

const Box = styled.div<Props>`
    ${space};
`;

export { Box };
