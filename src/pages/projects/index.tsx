import { JsxUtil } from "@utils";
import { NextPage } from "next";
import { useState } from "react";
import { MainLayout } from "@templates";
import { I18nContext } from "@contexts";
import { ProjectCard } from "@molecules";
import { useGetProjects } from "@hooks";
import { Box, Button, Flex, Grid, Heading } from "theme-ui";

const Projects: NextPage = () => {
  const { locale, lang } = I18nContext.useI8nContext();
  const { loading, projects } = useGetProjects({ locale: lang });

  const [limitProjects, setLimitProjects] = useState(3);

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
            {JsxUtil.renderLoader(
              loading,
              <>
                <ProjectCard.Skeleton />
                <ProjectCard.Skeleton />
                <ProjectCard.Skeleton />
              </>,
            )(
              projects?.map((project) => (
                <ProjectCard key={project?.slug} project={project} />
              )),
            )}
          </Grid>

          {projects?.length === 0 ||
            (projects === null && !loading && (
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

export default Projects;
