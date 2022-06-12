import Swal from "sweetalert2";
import Image from "next/image";
import { JsxUtil } from "@utils";
import { Queries } from "@graphql-client";
import { NextPage } from "next";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MainLayout } from "@templates";
import { I18nContext } from "@contexts";
import { ProjectModel } from "@models";
import { TechnologieCard } from "@molecules";
import { useEffect, useMemo } from "react";
import { IProjectsResponseGQL } from "@types";
import { ButtonLink, Skeleton } from "@atoms";
import { Box, Flex, Heading, Paragraph, useThemeUI } from "theme-ui";

const AboutProject: NextPage = () => {
  const router = useRouter();
  const { theme } = useThemeUI();
  const { locale, lang } = I18nContext.useI8nContext();

  const { slug } = router.query;

  const { data, error, loading } = useQuery<IProjectsResponseGQL>(
    Queries.GET_PROJECT,
    {
      variables: {
        slug,
        locale: lang,
      },
      skip: !slug,
      fetchPolicy: "cache-and-network",
    },
  );

  useEffect(() => {
    if (error && data === null) {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, error]);

  const project = useMemo(() => {
    if (loading || !data) return null;
    return ProjectModel(data.projects.data[0]);
  }, [data, loading]);

  return (
    <MainLayout title={`${project?.title || "Loading project..."}`}>
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

        {JsxUtil.renderLoader(
          loading,
          <Box
            mb={[1, 2]}
            sx={{
              width: "100%",
              height: ["30vh", "40vh"],
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <Skeleton width="100%" height="40vh" />,
          </Box>,
        )(
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
            {project?.banner && (
              <Image
                src={project?.banner.url}
                alt="about"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            )}
          </Box>,
        )}

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
          {JsxUtil.renderLoader(
            loading,
            <Box sx={{ width: ["100%", "40%"] }}>
              <Skeleton height={40} />
            </Box>,
          )(<Heading as="h1">{project?.title}</Heading>)}

          {JsxUtil.renderLoader(
            loading,
            <Flex
              sx={{
                width: ["100%", "50%"],
                gap: 2,
              }}
            >
              <Box sx={{ width: "70%" }}>
                <Skeleton height={40} />
              </Box>
              <Box sx={{ width: "70%" }}>
                <Skeleton height={40} />
              </Box>
              <Box sx={{ width: "70%" }}>
                <Skeleton height={40} />
              </Box>
            </Flex>,
          )(
            <Flex
              mx={-1}
              mt={[2, 0]}
              sx={{
                flexWrap: "wrap",
                flexDirection: "row",
              }}
            >
              {project?.technologies.map((tech) => (
                <TechnologieCard
                  key={`tech-${tech?.title}`}
                  title={`${tech?.title}`}
                />
              ))}
            </Flex>,
          )}
        </Flex>

        {JsxUtil.renderLoader(
          loading,
          <>
            <Skeleton count={2} height={16} />
            <Skeleton height={16} width="70%" />
          </>,
        )(
          <Paragraph sx={{ flex: "1 1 auto" }}>
            {project?.description}
          </Paragraph>,
        )}

        <Flex
          mt={4}
          sx={{
            flexDirection: ["column", "row"],
            gap: "10px",
            width: "100%",
          }}
        >
          {JsxUtil.renderLoader(
            loading,
            <Box sx={{ width: ["50%", "20%"] }}>
              <Skeleton height={40} />
            </Box>,
          )(
            project?.urlRepository !== null && (
              <ButtonLink
                href={project?.urlRepository || "#soon"}
                text={
                  locale?.messages.projectspage.dynamicPage.buttonRepository ||
                  "Visit repository"
                }
                buttonProps={{
                  "aria-label": "visit-repository",
                }}
              />
            ),
          )}

          {JsxUtil.renderLoader(
            loading,
            <Box sx={{ width: ["70%", "30%"] }}>
              <Skeleton height={40} />
            </Box>,
          )(
            project?.urlDeployed !== null && (
              <ButtonLink
                href={project?.urlDeployed || "#soon"}
                text={
                  locale?.messages.projectspage.dynamicPage.buttonOnline ||
                  "Visit online application"
                }
                buttonProps={{
                  "aria-label": "visit-app-online",
                }}
              />
            ),
          )}
        </Flex>
      </Box>
    </MainLayout>
  );
};

export default AboutProject;
