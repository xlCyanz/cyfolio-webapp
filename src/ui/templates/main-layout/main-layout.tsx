import React from "react";
import { motion } from "framer-motion";
import { NextSeo } from "next-seo";
import { Box, Container } from "theme-ui";

import { Sidebar } from "@organisms";
import { Icon, Flex, Button } from "@atoms";
import { ButtonLang, ButtonTheme } from "@molecules";

export interface IMainLayoutProps {
  children: React.ReactElement;
  container?: boolean;
  title?: string;
}

const variantsAnimation = {
  hidden: { opacity: 0, x: -500, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 100 },
};

const ChildrenWithAnimation = ({
  children,
}: Pick<IMainLayoutProps, "children">) => (
  <motion.main
    initial="hidden"
    animate="enter"
    exit="exit"
    variants={variantsAnimation}
    transition={{ type: "linear" }}
    style={{ height: "100%" }}
  >
    {children}
  </motion.main>
);

const MainLayout = ({
  children,
  title = "",
  container = true,
}: IMainLayoutProps) => {
  const [showSidebar, setShowSidebar] = React.useState(false);

  return (
    <>
      <NextSeo title={`CyFolio ~ ${title}`} />
      <Flex sx={{ flexDirection: "row", height: "100vh", width: "100vw" }}>
        <Sidebar show={showSidebar} />
        <Box
          sx={{
            flex: "1 1 auto",
            position: ["relative", "static"],
            overflowY: "auto",
          }}
        >
          <Flex
            m={3}
            sx={{
              position: "fixed",
              alignItems: "center",
              zIndex: 2,
            }}
          >
            <Button
              p={2}
              sx={{
                bg: "primary",
                color: "white",
                borderRadius: "10%",
                zIndex: 1,
                display: ["block", "none"],
              }}
              aria-label="change-theme"
              onClick={() => setShowSidebar((prev) => !prev)}
            >
              <Flex>
                <Icon name="menu" height={24} width={24} />
              </Flex>
            </Button>
            <Flex
              sx={{
                flexDirection: ["row", "column"],
                gap: 3,
                position: "fixed",
                right: [3],
                top: [null, 0],
                mx: [3],
                my: [null, 4],
              }}
            >
              <ButtonTheme />
              <ButtonLang />
            </Flex>
          </Flex>
          {container ? (
            <Container px={[3, 4, null, 5]} py={5}>
              <ChildrenWithAnimation>{children}</ChildrenWithAnimation>
            </Container>
          ) : (
            <ChildrenWithAnimation>{children}</ChildrenWithAnimation>
          )}
        </Box>
      </Flex>
    </>
  );
};

export default MainLayout;
