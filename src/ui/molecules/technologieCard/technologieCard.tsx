import { Flex, Text, useThemeUI } from "theme-ui";

export type TechnologieCardProps = {
  title: string;
};

const TechnologieCard = ({ title }: TechnologieCardProps) => {
  const { colorMode } = useThemeUI();

  return (
    <Flex
      key={`tech-${title}`}
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
