import { Flex, Text } from "theme-ui";

import Icon, { IIconProps } from "../icon";
import Link from "../link";

export interface IMenuLinkProps {
  name: string;
  link: string;
  iconName?: IIconProps["name"];
  active?: boolean;
}

const MenuLink = ({
  name,
  link,
  iconName = "home",
  active = false,
}: IMenuLinkProps) => (
  <Link href={link} variant={active ? "navActive" : "nav"} p={2} my={3}>
    <Flex sx={{ justifyContent: "left" }}>
      {iconName && (
        <Icon
          name={iconName}
          height={24}
          width={24}
          style={{ marginRight: "15px" }}
        />
      )}
      <Text sx={{ fontSize: 2, textTransform: "capitalize" }}>{name}</Text>
    </Flex>
  </Link>
);

export default MenuLink;
