import React from "react";
import styled from "@emotion/styled";

import { space, SpaceProps, position, PositionProps } from "styled-system";

interface Props extends SpaceProps, PositionProps {
  children: React.ReactNode;
}

const Cell = styled.div<Props>`
  ${space};
  ${position};
`;

export { Cell };
