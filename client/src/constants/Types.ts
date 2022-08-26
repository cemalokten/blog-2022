import { PositionProps } from "styled-system";

export type Props = {
  children?: any;
  color?: string;
  pl?: number;
  pr?: number;
};

export interface TagProps extends PositionProps {
  left: string;
  top: string;
  backgroundColor: string;
  rotation: number;
  label: string;
  key: string;
}
