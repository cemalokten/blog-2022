import React from "react";
import styled from "styled-components";
import { Cell as _Cell, Grid } from "styled-css-grid";

import { space, SpaceProps, position, PositionProps } from "styled-system";

interface Props extends SpaceProps, PositionProps {
  children: React.ReactNode;
}

const Cell = styled(_Cell)<Props>`
  ${space};
  ${position};
`;

export { Cell };
