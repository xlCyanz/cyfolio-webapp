import React from "react";
import Swal from "sweetalert2";
import Image from "next/image";
import { GetStaticPaths } from "next";
import { Box, Heading, Paragraph, useThemeUI } from "theme-ui";

import fs from "fs";
import matter from "gray-matter";
import path from "path";

import { Flex } from "@atoms";
import { Utilities } from "@utils";
import { MainLayout } from "@templates";
import { I18nContext } from "@contexts";
import { IProjectResponse } from "@interfaces";
import { TechnologieCard, ButtonLink } from "@molecules";

interface ProjectDetailsPageProps {
  project: IProjectResponse;
}

const ProjectDetailsPage = ({ project }: ProjectDetailsPageProps) => {
  const { theme } = useThemeUI();
  const { locale, lang } = I18nContext.useI8nContext();

  React.useEffect(() => {
    if (project === null) {
      Swal.mixin({
        customClass: {
          confirmButton: "poppins",
          cancelButton: "poppins",
          input: "",
        },
      }).fire({
        title: locale?.messages.alertErrorFetch.title,
        text: locale?.messages.alertErrorFetch.message,
        icon: "error",
        confirmButtonText: locale?.messages.alertErrorFetch.buttonAccept,
        confirmButtonColor: `${theme.colors?.primary}`,
      });
    }
  }, [locale, project, theme]);

  const projectDetails = React.useMemo(() => {
    if (lang === "en") return project.englishVersion;
    return project.spanishVersion;
  }, [lang, project.englishVersion, project.spanishVersion]);

  return (
    <MainLayout title={`${projectDetails?.title || "Loading project..."}`}>
      <Box>
        <Box mb={4}>
          <Heading as="h1">
            {locale?.messages.projectspage.dynamicPage.title}
          </Heading>
          <Box
            bg="primary"
            mt={2}
            mb={1}
            sx={{ height: "5px", width: "50px" }}
          />
          <Box bg="primary" sx={{ height: "5px", width: "20px" }} />
        </Box>
        <Box
          mb={[1, 2]}
          sx={{
            width: "100%",
            height: ["30vh", "40vh"],
            position: "relative",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          {projectDetails?.banner && (
            <Image
              src={projectDetails?.banner}
              alt="about"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          )}
        </Box>
        <Flex
          my={3}
          sx={{
            flexDirection: ["column", null, "row"],
            width: "100%",
            alignItems: ["flex-start", null, "center"],
            justifyContent: ["flex-start", "space-between"],
            gap: [0, 3, 0],
          }}
        >
          <Heading as="h1">{projectDetails?.title}</Heading>
          <Flex
            mx={-1}
            mt={[2, 0]}
            sx={{
              flexWrap: "wrap",
              flexDirection: "row",
            }}
          >
            {projectDetails?.technologies.map((tech) => (
              <TechnologieCard key={`technologie-${tech}`} title={tech} />
            ))}
          </Flex>
        </Flex>
        <Paragraph sx={{ flex: "1 1 auto" }}>
          {projectDetails?.description}
        </Paragraph>
        <Flex
          mt={4}
          sx={{
            flexDirection: ["column", "row"],
            gap: "10px",
            width: "100%",
          }}
        >
          {projectDetails?.urlRepository !== null && (
            <ButtonLink
              href={projectDetails?.urlRepository || "#soon"}
              text={`${locale?.messages.projectspage.dynamicPage.buttonRepository}`}
              buttonProps={{
                "aria-label": "visit-repository",
              }}
            />
          )}
          {projectDetails?.urlDeployed !== null && (
            <ButtonLink
              href={projectDetails?.urlDeployed || "#soon"}
              text={`${locale?.messages.projectspage.dynamicPage.buttonOnline}`}
              buttonProps={{
                "aria-label": "visit-app-online",
              }}
            />
          )}
        </Flex>
      </Box>
    </MainLayout>
  );
};

export const getStaticProps = async (context: { params: { slug: any } }) => {
  const { slug } = context.params;

  const projectPath = path.join(process.cwd(), "public", "projects", slug);
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

  const banner = projectImage ? `/projects/${slug}/${projectImage}` : null;

  return {
    props: {
      project: {
        spanishVersion: { ...dataSpanish, banner, description: contentSpanish },
        englishVersion: {
          ...dataEnglish,
          banner,
          description: contentEnglish,
        },
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const projectsPath = path.join(process.cwd(), "public", "projects");
  const projectsFolder = fs.readdirSync(projectsPath);

  const paths = projectsFolder.map((project) => ({
    params: { slug: Utilities.titleToSlug(project) },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default ProjectDetailsPage;
