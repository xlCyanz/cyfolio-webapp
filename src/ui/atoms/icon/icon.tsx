import React from "react";

import iconBundle from "./icon.bundle";

export type IconProps = {
  name: keyof typeof iconBundle;
} & React.ComponentProps<"svg">;

const Icon = ({ name, ...props }: IconProps) => {
  const IconComponent = name ? iconBundle[name] : undefined;
  return IconComponent ? <IconComponent {...props} /> : null;
};

export default Icon;
