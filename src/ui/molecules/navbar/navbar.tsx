import { Container } from "theme-ui";
import { useRouter } from "next/router";

import { MenuLink, Flex, IIconProps } from "@atoms";

type Links = {
  name: string;
  link: string;
  iconName: IIconProps["name"];
};

export interface INavbarProps {
  links: Links[];
}

const Navbar = ({ links }: INavbarProps) => {
  const router = useRouter();

  return (
    <Container py={4} px={[20, null, 65]}>
      <Flex
        sx={{
          flex: "1 1 auto",
          flexDirection: "column",
        }}
      >
        {links.map((item) => (
          <MenuLink
            key={item.name}
            active={router?.pathname.includes(item.link)}
            {...item}
          />
        ))}
      </Flex>
    </Container>
  );
};

export default Navbar;
