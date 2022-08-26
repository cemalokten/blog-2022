import styled from "styled-components";
import {
  space,
  SpaceProps,
  border,
  BorderProps,
  flexbox,
  FlexboxProps,
  position,
  PositionProps,
  layout,
  LayoutProps,
  color,
  ColorProps,
} from "styled-system";

interface Props
  extends SpaceProps,
    BorderProps,
    FlexboxProps,
    PositionProps,
    ColorProps,
    LayoutProps {
  children: React.ReactNode;
  hover?: string;
}

const Box = styled.div<Props>`
  ${border};
  ${space};
  ${flexbox};
  ${position};
  ${layout};
  ${color};
`;

export type { Props };
export { Box };
