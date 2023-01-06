import { useColorMode } from "theme-ui";

import { Icon, Button, Flex } from "@atoms";

const ButtonTheme = () => {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <Button
      p={2}
      onClick={() => {
        setColorMode((prev) => (prev === "light" ? "dark" : "light"));
      }}
      sx={{
        bg: "primary",
        color: "white",
        textAlign: "center",
        borderRadius: "50%",
      }}
      aria-label="change-theme"
    >
      <Flex>
        {colorMode === "light" ? (
          <Icon name="moon" height={26} width={26} />
        ) : (
          <Icon name="sun" height={26} width={26} />
        )}
      </Flex>
    </Button>
  );
};

export default ButtonTheme;
