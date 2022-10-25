export type General = {
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

export type Icon = {
  iconColor?: string;
  iconWidth?: string;
  iconHeight?: string;
  icon?: string;
};

export type Tag = {
  children?: React.ReactNode;
  label?: string;
  bg?: string;
  border?: boolean;
  rotation?: number;
  opacity?: number;
  color?: string;
  fontSize?: string;
  padding?: string[];
  top?: string;
  left?: string;
  backgroundColor?: string;
  radius?: number;
  height?: number;
  width?: number;
};

export type TagProps = {
  left: string;
  top: string;
  backgroundColor: string;
  rotation: number;
  label: string;
  key: string;
};

export type Post = {
  title?: string;
  date?: string;
  body?: string;
  iconColor?: string;
};

export type Syntax = {
  node?: any;
  inline?: any;
  className?: any;
  children?: any;
};

export type Fm = {
  title: string;
  date: string;
  body: string;
  iconColor?: string;
  key?: string;
  filename?: string;
};
