import React from "react";
import { IconProps } from "../../../constants/Types";

const Post1 = ({ width, height, colors, ...props }: IconProps) => (
  <svg
    width={width || "449"}
    height={height || "518"}
    viewBox="0 0 449 518"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="449" height="518" rx="15" fill={colors?.[0] || "#FF5252"} />
    <circle cx="225" cy="259" r="156" fill={colors?.[1] || "#7000FF"} />
  </svg>
);

export { Post1 };
