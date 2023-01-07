import React from "react";
import { NextPage } from "next";
import { Box, Text, Heading, Paragraph } from "theme-ui";

import { Queries } from "@graphql-client";
import { MainLayout } from "@templates";
import { I18nContext } from "@contexts";
import { fetchPdf, JsxUtil } from "@utils";
import { Skeleton, Flex, Button } from "@atoms";
import { AboutPageModel, TechnologieModel } from "@models";
import { useGetConfigGeneral, useQueryExpiration } from "@hooks";
import { SectionDataPersonal, TechnologieCard, Timeline } from "@molecules";
import { IAboutpageResponseGQL, ITechnologiesResponseGQL } from "@types";

const TextStyled = (text: string) => (
  <Text key={text} color="primary">
    {text}
  </Text>
);

const ABOUT_INFORMATION_EXPIRATION_TIME = 24 * 60 * 60; // 1 day
const TECHNOLOGIES_EXPIRATION_TIME = 48 * 60 * 60; // 2 day

const About: NextPage = () => {
  const { locale, lang } = I18nContext.useI8nContext();

  const { configGeneral, loading: loadingConfigGeneral } = useGetConfigGeneral({
    locale: lang,
  });

  const { data: aboutPageData, loading: loadingAboutPage } =
    useQueryExpiration<IAboutpageResponseGQL>(
      Queries.GET_ABOUTPAGE_INFO,
      ABOUT_INFORMATION_EXPIRATION_TIME,
      "aboutpage-information",
      {
        variables: {
          locale: lang,
        },
      },
    );

  const { data: technologiesData, loading: loadingTechnologies } =
    useQueryExpiration<ITechnologiesResponseGQL>(
      Queries.GET_TECHNOLOGIES,
      TECHNOLOGIES_EXPIRATION_TIME,
      "tecnologies-information",
    );

  const technologies = React.useMemo(() => {
    if (loadingTechnologies || !technologiesData) return null;
    return technologiesData.technologies.data.map(TechnologieModel);
  }, [loadingTechnologies, technologiesData]);

  const aboutPageInfo = React.useMemo(() => {
    if (loadingAboutPage || !aboutPageData) return null;
    return AboutPageModel(aboutPageData.aboutpage.data);
  }, [aboutPageData, loadingAboutPage]);

  const handleDownloadPdf = async () => {
    await fetchPdf(`${aboutPageInfo?.curriculumVitae.url}`);
  };

  return (
    <MainLayout title={locale?.messages.aboutpage.title}>
      <Box>
        <Box mb={4}>
          <Heading as="h1">{locale?.messages.aboutpage.title}</Heading>
          <Box
            bg="primary"
            mt={2}
            mb={1}
            sx={{
              height: "5px",
              width: "50px",
            }}
          />
          <Box bg="primary" sx={{ height: "5px", width: "20px" }} />
        </Box>
        {JsxUtil.renderLoader(
          loadingConfigGeneral,
          <Skeleton height={30} mb={3} width="100%" />,
        )(
          <Heading as="h2" mb={3}>
            {JsxUtil.replaceString(`${locale?.messages.aboutpage.subtitle}`, {
              name: TextStyled(configGeneral?.fullname || "fullname"),
              job: TextStyled(configGeneral?.jobTitle || "programmer"),
            })}
          </Heading>,
        )}
        {JsxUtil.renderLoader(
          loadingAboutPage,
          <>
            <Skeleton height={12} width="90%" />
            <Skeleton height={12} width="80%" />
            <Skeleton height={12} width="70%" />
          </>,
        )(<Paragraph>{aboutPageInfo?.description}</Paragraph>)}
        <Flex
          mt={4}
          sx={{
            flexDirection: ["column", "row"],
            alignItems: "flex-start",
            gap: [1, 4],
          }}
        >
          <Box sx={{ width: ["100%", "50%"] }}>
            {JsxUtil.renderLoader(
              loadingAboutPage,
              <SectionDataPersonal.Skeleton />,
            )(
              <SectionDataPersonal
                birthday={`${aboutPageInfo?.birthday}`}
                email={`${configGeneral?.email}`}
                telephone={`${aboutPageInfo?.telephone}`}
              />,
            )}
            {JsxUtil.renderLoader(
              loadingAboutPage,
              <Skeleton height={40} mt={4} width="50%" />,
            )(
              <Flex mt={4} sx={{ flexDirection: "row" }}>
                <Button
                  type="button"
                  aria-label="button-download-cv"
                  onClick={handleDownloadPdf}
                >
                  {locale?.messages.aboutpage.buttonDownloadCV}
                </Button>
              </Flex>,
            )}
          </Box>
          <Flex
            mt={[4, 0]}
            sx={{
              flexWrap: "wrap",
              flexDirection: ["row", "row-reverse"],
              width: ["100%", "50%"],
            }}
          >
            {JsxUtil.renderLoader(
              loadingTechnologies,
              <>
                <Box sx={{ width: ["100%", "50%"], m: 1 }}>
                  <Skeleton height={30} />
                </Box>
                <Box sx={{ width: ["100%", "50%"], m: 1 }}>
                  <Skeleton height={30} />
                </Box>
                <Box sx={{ width: ["100%", "50%"], m: 1 }}>
                  <Skeleton height={30} />
                </Box>
              </>,
            )(
              technologies?.map((tech) => (
                <TechnologieCard
                  key={`tech-${tech?.title}`}
                  title={`${tech?.title}`}
                />
              )),
            )}
          </Flex>
        </Flex>
        <Flex mt={5} sx={{ flexDirection: ["column", "row"], gap: "30px" }}>
          <Box sx={{ height: "100%", width: ["100%", "50%"] }}>
            {aboutPageInfo?.educationTimeline.length !== 0 && (
              <Heading as="h2">
                {locale?.messages.aboutpage.timelineEducation}
              </Heading>
            )}
            {JsxUtil.renderLoader(
              loadingAboutPage,
              <Timeline.Skeleton />,
            )(<Timeline items={aboutPageInfo?.educationTimeline || []} />)}
          </Box>
          <Box sx={{ height: "100%", width: ["100%", "50%"] }}>
            {aboutPageInfo?.experienceTimeline.length !== 0 && (
              <Heading as="h2">
                {locale?.messages.aboutpage.timelineExperience}
              </Heading>
            )}
            {JsxUtil.renderLoader(
              loadingAboutPage,
              <Timeline.Skeleton />,
            )(<Timeline items={aboutPageInfo?.experienceTimeline || []} />)}
          </Box>
        </Flex>
      </Box>
    </MainLayout>
  );
};

export default About;
