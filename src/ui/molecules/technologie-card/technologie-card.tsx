import { Text, useThemeUI } from "theme-ui";

import { Flex } from "@atoms";

export interface ITechnologieCardProps {
  title: string;
}

const TechnologieCard = ({ title }: ITechnologieCardProps) => {
  const { colorMode } = useThemeUI();

  return (
    <Flex
      bg={colorMode === "dark" ? "darkGray" : "muted"}
      m={1}
      py={2}
      px={3}
      sx={{
        flexDirection: "row",
        flexWrap: "wrap",
        borderRadius: "5px",
        opacity: colorMode === "light" ? 0.9 : 1,
      }}
    >
      <Text
        color="text"
        sx={{
          borderRadius: "5px",
          fontWeight: "500",
        }}
      >
        {title}
      </Text>
    </Flex>
  );
};

export default TechnologieCard;
