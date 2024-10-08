import Image from "next/image";
import { Box, Heading, Paragraph, useThemeUI } from "theme-ui";

import { Routes } from "@core";
import { IProject } from "@interfaces";
import { Utilities } from "@utils";
import { I18nContext } from "@contexts";
import { Skeleton, Flex } from "@atoms";

import ButtonLink from "../button-link";

export interface IProjectCardProps {
  project: IProject;
}

const ProjectCard = ({ project }: IProjectCardProps) => {
  const { locale } = I18nContext.useI8nContext();
  const { theme, colorMode } = useThemeUI();

  return (
    <Flex
      sx={{
        flexDirection: "column",
        justifyContent: "center",
        boxShadow:
          colorMode === "light"
            ? `0px 0px 10px 5px ${theme.colors?.muted}`
            : "",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "200px",
        }}
      >
        <Image
          src={project.banner}
          layout="fill"
          objectFit="cover"
          style={{ borderRadius: "5px 5px 0 0" }}
        />
      </Box>
      <Box
        bg={colorMode === "light" ? "white" : "darkGray"}
        p={3}
        sx={{ borderRadius: "0 0 5px 5px" }}
      >
        <Heading as="h2" mb={2}>
          {project?.title}
        </Heading>
        <Paragraph mb={3}>
          {`${project?.description.substring(0, 70)}...`}
        </Paragraph>
        <ButtonLink
          href={`${Routes.PROJECTS}/${Utilities.titleToSlug(project.title)}`}
          text={locale?.messages.projectspage.buttonReadMore || ""}
          buttonProps={{ px: 3, "aria-label": "read-more-project" }}
        />
      </Box>
    </Flex>
  );
};

ProjectCard.Skeleton = () => (
  <Flex mt={-1} sx={{ flexDirection: "column" }}>
    <Box sx={{ width: "100%" }}>
      <Skeleton
        height={200}
        width="100%"
        sx={{ borderRadius: "5px 5px 0 0" }}
      />
    </Box>
    <Box py={3} sx={{ borderRadius: "0 0 5px 5px" }}>
      <Skeleton height={24} width="90%" mb={3} />
      <Skeleton height={12} count={2} width="90%" />
      <Skeleton height={12} width="70%" />
      <Skeleton height={40} width="50%" mt={2} />
    </Box>
  </Flex>
);

export default ProjectCard;
