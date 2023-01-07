import { Box, Container, Heading, useThemeUI } from "theme-ui";

import { Flex } from "@atoms";
import { Routes } from "@core";
import { I18nContext } from "@contexts";
import { INavbarProps, Navbar } from "@molecules";

export type SidebarProps = {
  show?: boolean;
};

const Sidebar = ({ show = false }: SidebarProps) => {
  const { theme, colorMode } = useThemeUI();
  const { locale } = I18nContext.useI8nContext();

  const links: INavbarProps["links"] = [
    {
      name: `${locale?.messages.navigation.home}`,
      link: Routes.HOME,
      iconName: "home",
    },
    {
      name: `${locale?.messages.navigation.about}`,
      link: Routes.ABOUT,
      iconName: "user",
    },
    {
      name: `${locale?.messages.navigation.projects}`,
      link: Routes.PROJECTS,
      iconName: "briefcase",
    },
    {
      name: `${locale?.messages.navigation.contact}`,
      link: Routes.CONTACT,
      iconName: "chatAlt",
    },
  ];

  return (
    <Flex
      sx={{
        width: show ? [180, null, 270] : [0, 180, 270],
        flexDirection: "column",
        flexShrink: 0,
        transition: "0.3s",
        bg: colorMode === "light" ? "white" : theme.rawColors?.darkGray,
        borderRight: "2px solid",
        borderRightColor: colorMode === "light" ? "#eaeaea" : "#302E30",
      }}
    >
      <Box
        sx={{
          display: [!show && "none", "block"],
        }}
      >
        <Container px={[20, null, 50]} py={4} mb={2}>
          <Flex
            className="logo-addons"
            py={3}
            sx={{
              justifyContent: "center",
              position: "relative",
            }}
          >
            <Heading
              as="h1"
              sx={{ fontFamily: "Clicker Script Regular", mr: 1 }}
            >
              Cy
            </Heading>
            <Heading as="h1">Folio</Heading>
          </Flex>
        </Container>
        <Navbar links={links} />
      </Box>
    </Flex>
  );
};

export default Sidebar;
