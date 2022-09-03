import Link from "next/link";
import { Flex, Text, Link as LinkA } from "theme-ui";

import Icon from "../icon";

interface IMenuLinkProps {
  name: string;
  link: string;
  iconName?: string | any;
  active?: boolean;
}

const MenuLink = ({ name, link, iconName, active }: IMenuLinkProps) => {
  return (
    <Link href={link} passHref scroll={false}>
      <LinkA variant={active ? "navActive" : "nav"} p={2} my={3}>
        <Flex sx={{ justifyContent: "left" }}>
          {iconName && (
            <Icon
              name={iconName || "home"}
              style={{ height: 24, width: 24, marginRight: "15px" }}
            />
          )}
          <Text sx={{ fontSize: 2, textTransform: "capitalize" }}>{name}</Text>
        </Flex>
      </LinkA>
    </Link>
  );
};

MenuLink.defaultProps = {
  iconName: undefined,
  active: false,
};

export default MenuLink;
