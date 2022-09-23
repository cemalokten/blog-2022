import React from "react";
import { IconProps } from "../../../constants/Types";

const Post1 = ({ iconWidth, iconColor, ...props }: IconProps) => (
  <svg
    width={iconWidth || "449"}
    viewBox="0 0 449 518"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
  >
    <rect width="449" height="518" rx="15" fill={iconColor || "#27792F"} />
    <ellipse
      cx="208.441"
      cy="260.44"
      rx="95.3693"
      ry="99"
      transform="rotate(45 208.441 260.44)"
      fill="#643B98"
    />
    <ellipse
      cx="242.441"
      cy="231.44"
      rx="95.3693"
      ry="99"
      transform="rotate(45 242.441 231.44)"
      fill="#D2AEFF"
    />
  </svg>
);

export { Post1 };
