import { motion } from "framer-motion";
import { NextSeo } from "next-seo";
import { Sidebar } from "@organisms";
import { ButtonLang, ButtonTheme } from "@molecules";
import { FC, ReactNode, useState } from "react";
import { Box, Container, Flex, MenuButton } from "theme-ui";

interface IMainLayoutProps {
  children: ReactNode;
  container?: boolean;
  title?: string;
}

const variantsAnimation = {
  hidden: { opacity: 0, x: -500, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 100 },
};

const ChildrenWithAnimation: FC<Pick<IMainLayoutProps, "children">> = ({
  children,
}) => (
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

const MainLayout: FC<IMainLayoutProps> = ({ children, title, container }) => {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <>
      <NextSeo title={`CyFolio ~ ${title}`} />

      <Flex sx={{ flexDirection: "row", height: "100vh", width: "100vw" }}>
        <Sidebar show={isShowing} />

        <Box
          sx={{
            flex: "1 1 auto",
            position: ["relative", "static"],
            overflowY: "auto",
          }}
        >
          <Box sx={{ position: "fixed", margin: 2, zIndex: 2 }}>
            <MenuButton
              aria-label="Toggle Sidebar"
              onClick={() => setIsShowing((prev) => !prev)}
              sx={{
                bg: "primary",
                color: "white",
                width: "40px",
                height: "35px",
                display: [null, "none"],
              }}
            />
          </Box>

          <Flex
            sx={{
              flexDirection: "column",
              gap: 3,
              position: "fixed",
              margin: 4,
              right: 0,
              zIndex: 2,
            }}
          >
            <ButtonTheme />
            <ButtonLang />
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

MainLayout.defaultProps = {
  title: "",
  container: true,
};

export default MainLayout;
