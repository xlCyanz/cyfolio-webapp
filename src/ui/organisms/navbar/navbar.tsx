import { useRouter } from "next/router";
import { Container, Flex } from "theme-ui";

import { Routes } from "@core";
import { MenuLink } from "@atoms";
import { I18nContext } from "@contexts";

import iconBundle from "../../atoms/icon/icon.bundle";

type Links = {
  name: string;
  link: string;
  iconName: keyof typeof iconBundle;
  active: boolean;
};

const Navbar = () => {
  const router = useRouter();
  const { locale } = I18nContext.useI8nContext();

  const isActive = (route: string) => router?.pathname.includes(route);

  const links: Links[] = [
    {
      name: locale?.messages.navigation.home || "Home",
      link: Routes.HOME,
      iconName: "home",
      active: isActive(Routes.HOME),
    },
    {
      name: locale?.messages.navigation.about || "About",
      link: Routes.ABOUT,
      iconName: "user",
      active: isActive(Routes.ABOUT),
    },
    {
      name: locale?.messages.navigation.projects || "Projects",
      link: Routes.PROJECTS,
      iconName: "briefcase",
      active: isActive(Routes.PROJECTS),
    },
    {
      name: locale?.messages.navigation.contact || "Contact",
      link: Routes.CONTACT,
      iconName: "chatAlt",
      active: isActive(Routes.CONTACT),
    },
  ];

  return (
    <Container py={4} px={[20, null, 65]}>
      <Flex
        sx={{
          flex: "1 1 auto",
          flexDirection: "column",
        }}
      >
        {links.map((link) => (
          <MenuLink key={link.name} {...link} />
        ))}
      </Flex>
    </Container>
  );
};

export default Navbar;
