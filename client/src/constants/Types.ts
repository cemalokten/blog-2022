import { PositionProps } from "styled-system";

export type Props = {
  children?: any;
  color?: string;
  pl?: number;
  pr?: number;
  width?: string;
  height?: number;
  colors?: string[];
  icon?: string;
};

export type IconProps = {
  color?: string;
  width?: string;
  height?: number;
  colors?: string[];
};

export interface TagProps extends PositionProps {
  left: string;
  top: string;
  backgroundColor: string;
  rotation: number;
  label: string;
  key: string;
}
