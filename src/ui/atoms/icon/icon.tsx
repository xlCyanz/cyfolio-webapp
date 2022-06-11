import { ComponentProps, FC } from "react";

import iconBundle from "./icon.bundle";

interface IIconProps extends ComponentProps<"svg"> {
  name: keyof typeof iconBundle;
}

const Icon: FC<IIconProps> = ({ name, ...props }) => {
  const IconComponent = name ? iconBundle[name] : undefined;

  return IconComponent ? <IconComponent {...props} /> : null;
};

export default Icon;
