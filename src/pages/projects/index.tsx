import React from "react";
import { Box, Button, Grid, Heading } from "theme-ui";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { Flex } from "@atoms";
import { MainLayout } from "@templates";
import { I18nContext } from "@contexts";
import { ProjectCard } from "@molecules";
import { IProjectResponse } from "@interfaces";

interface ProjectsPageProps {
  projects: IProjectResponse[];
}

const ProjectsPage = ({ projects }: ProjectsPageProps) => {
  const { locale, lang } = I18nContext.useI8nContext();

  const [limitProjects, setLimitProjects] = React.useState(3);

  const loadMoreProjects = () => {
    setLimitProjects(limitProjects + 3);
  };

  return (
    <MainLayout title={locale?.messages.projectspage.title}>
      <Box>
        <Box mb={4}>
          <Heading as="h1">{locale?.messages.projectspage.title}</Heading>
          <Box
            bg="primary"
            mt={2}
            mb={1}
            sx={{ height: "5px", width: "50px" }}
          />
          <Box bg="primary" sx={{ height: "5px", width: "20px" }} />
        </Box>
        <Heading as="h2" mb={4}>
          {locale?.messages.projectspage.subtitle}
        </Heading>
        <Box>
          <Grid columns={[1, 2, null, 3, 4]} gap={3}>
            {projects?.map((project) => {
              if (lang === "en") {
                return (
                  <ProjectCard
                    key={project.englishVersion.title}
                    project={project.englishVersion}
                  />
                );
              }

              return (
                <ProjectCard
                  key={project.spanishVersion.title}
                  project={project.spanishVersion}
                />
              );
            })}
          </Grid>
          {projects?.length === 0 ||
            (!projects.length && (
              <Flex
                mt={[5, 6]}
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Heading as="h4">
                  {locale?.messages.projectspage.noprojects}
                </Heading>
              </Flex>
            ))}
          {(projects?.length || 0) > limitProjects && (
            <Flex mt={5} sx={{ justifyContent: "center" }}>
              <Button onClick={loadMoreProjects} aria-label="load-more-projecs">
                {locale?.messages.projectspage.buttonLoadMore}
              </Button>
            </Flex>
          )}
        </Box>
      </Box>
    </MainLayout>
  );
};

export async function getStaticProps() {
  const projectsPath = path.join(process.cwd(), "public", "projects");
  const projectsFolder = fs.readdirSync(projectsPath);

  const projects = projectsFolder.map((folderName) => {
    const projectPath = `${projectsPath}/${folderName}`;
    const files = fs.readdirSync(projectPath);

    const projectEnglish = files.filter((value) => value.endsWith("en.md"));
    const projectSpanish = files.filter((value) => value.endsWith("es.md"));
    const projectImage = files.find((value) =>
      value.match(/\.(jpg|jpeg|png|gif)$/),
    );

    const fileContentEnglish = fs.readFileSync(
      `${projectPath}/${projectEnglish}`,
      "utf-8",
    );
    const { data: dataEnglish, content: contentEnglish } =
      matter(fileContentEnglish);

    const fileContentSpanish = fs.readFileSync(
      `${projectPath}/${projectSpanish}`,
      "utf-8",
    );

    const { data: dataSpanish, content: contentSpanish } =
      matter(fileContentSpanish);

    const banner = projectImage
      ? `/projects/${folderName}/${projectImage}`
      : null;

    return {
      spanishVersion: { ...dataSpanish, banner, description: contentSpanish },
      englishVersion: {
        ...dataEnglish,
        banner,
        description: contentEnglish,
      },
    };
  });

  return {
    props: {
      projects,
    },
  };
}

export default ProjectsPage;
