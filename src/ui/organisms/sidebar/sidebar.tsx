import { Box, Container, Flex, Heading, useThemeUI } from "theme-ui";

import Navbar from "../navbar";

export type SidebarProps = {
  show?: boolean;
};

const Sidebar = ({ show = false }: SidebarProps) => {
  const { theme, colorMode } = useThemeUI();

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
        <Navbar />
      </Box>
    </Flex>
  );
};

export default Sidebar;
