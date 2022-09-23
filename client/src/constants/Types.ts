import { PositionProps } from "styled-system";

export type Props = {
  children?: any;
  color?: string;
  pl?: number;
  pr?: number;
  width?: string;
  height?: string;
  colors?: string[];
  icon?: string;
  heading?: string;
};

export type IconProps = {
  iconColor?: string;
  iconWidth?: string;
  iconHeight?: string;
  icon?: string;
};

export interface TagProps extends PositionProps {
  left: string;
  top: string;
  backgroundColor: string;
  rotation: number;
  label: string;
  key: string;
}

export type Props2 = {
  children?: any;
  color?: string;
  pl?: number;
  pr?: number;
  iconWidth?: string;
  height?: string;
  colors?: string[];
  icon?: string;
};
