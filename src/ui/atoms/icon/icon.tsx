import React from "react";

import iconBundle from "./icon.bundle";

export interface IIconProps extends React.ComponentProps<"svg"> {
  name: keyof typeof iconBundle;
}

const Icon = ({ name, ...props }: IIconProps) => {
  const IconComponent = name ? iconBundle[name] : undefined;
  return IconComponent ? <IconComponent {...props} /> : null;
};

export default Icon;
