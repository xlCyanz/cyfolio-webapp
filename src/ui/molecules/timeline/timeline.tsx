import ReactMarkdown from "react-markdown";
import { Box, Flex, Heading, Paragraph, Text, useThemeUI } from "theme-ui";

import { Icon, Skeleton } from "@atoms";
import { TimeLineModel } from "@models";

export type TimelineProps = {
  items: ReturnType<typeof TimeLineModel>[];
};

const Timeline = ({ items }: TimelineProps) => {
  const { theme, colorMode } = useThemeUI();

  if (!items || !items.length) return null;

  return (
    <Box
      className="timeline"
      bg={colorMode === "light" ? "white" : "darkGray"}
      mt={4}
      pl={4}
      p={3}
      sx={{
        boxShadow:
          colorMode === "light"
            ? `0px 0px 10px 5px ${theme.colors?.muted}`
            : "",
        borderRadius: "10px",
        position: "relative",
      }}
    >
      {items?.map((item) => (
        <Box
          key={`${item?.id}-${item?.title}`}
          className="timeline-item"
          mb={4}
          sx={{
            positon: "relative",
            width: "100%",
            px: 2,
          }}
        >
          <Flex mb={2} sx={{ gap: "4px", alignItems: "center" }}>
            <Icon name="calendar" width={18} />
            <Text sx={{ fontSize: "15px" }}>
              {`${new Date(item?.fromDate || "").getFullYear()} - ${
                new Date(item?.toDate || "").getFullYear() || ""
              }`}
            </Text>
          </Flex>
          <Heading as="h3" my={3}>
            {item?.title}
          </Heading>
          <Paragraph as={ReactMarkdown} sx={{ textAlign: "justify" }}>
            {item?.description}
          </Paragraph>
        </Box>
      ))}
    </Box>
  );
};

Timeline.Skeleton = () => (
  <Box
    className="timeline"
    bg="white"
    mt={4}
    pl={4}
    p={3}
    sx={{
      boxShadow: "10px 10px 20px var(--theme-ui-colors-silver)",
      borderRadius: "10px",
      position: "relative",
    }}
  >
    <Box
      className="timeline-item"
      mb={4}
      sx={{
        positon: "relative",
        width: "100%",
        px: 2,
      }}
    >
      <Box mb={2} sx={{ width: "100%" }}>
        <Skeleton height={16} width="30%" />
      </Box>
      <Skeleton height={28} my={3} width="90%" />
      <Skeleton height={12} count={4} width="100%" />
      <Skeleton height={12} width="70%" />
    </Box>
  </Box>
);

export default Timeline;
