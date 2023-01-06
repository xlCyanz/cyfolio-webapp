import React from "react";

import Image from "next/image";
import Typewriter from "typewriter-effect";
import { Box, Flex, Text, Heading, Paragraph, Container } from "theme-ui";

import { Routes } from "@core";
import { jsxUtil } from "@utils";
import { Queries } from "@graphql-client";
import { NextPage } from "next";
import { Skeleton } from "@atoms";
import { MainLayout } from "@templates";
import { ButtonLink } from "@molecules";
import { I18nContext } from "@contexts";
import { HomePageModel } from "@models";
import { IHomepageResponseGQL } from "@types";
import { useGetConfigGeneral, useQueryExpiration } from "@hooks";

const HOMEPAGE_INFO_EXPIRATION_TIME = 12 * 60 * 60; // 1 day

const Home: NextPage = () => {
  const { locale, lang } = I18nContext.useI8nContext();

  const { configGeneral, loading: loadingConfigGeneral } = useGetConfigGeneral({
    locale: lang,
  });

  const { data: homePageData, loading: loadingHomePage } =
    useQueryExpiration<IHomepageResponseGQL>(
      Queries.GET_HOMEPAGE_INFO,
      HOMEPAGE_INFO_EXPIRATION_TIME,
      "homepage_information",
      {
        variables: {
          locale: lang,
        },
      },
    );

  const homePageInfo = React.useMemo(() => {
    if (loadingHomePage || !homePageData) return null;
    return HomePageModel(homePageData.homepage.data);
  }, [homePageData, loadingHomePage]);

  return (
    <MainLayout title="Home" container={false}>
      <Container
        px={[3, 4, null, 5]}
        py={[5, 0]}
        sx={{ height: [null, "100%"] }}
      >
        <Flex
          className="home-flex"
          sx={{
            height: "100%",
            flexDirection: ["column", "row"],
            alignItems: "center",
          }}
        >
          <Box sx={{ flex: "1 1 auto", width: "100%" }}>
            <Box mb={3}>
              <Heading as="h1" mb={1}>
                {locale?.messages.homepage.title}
              </Heading>

              {jsxUtil.renderLoader(
                loadingConfigGeneral,
                <Box sx={{ width: ["95%", "70%"] }}>
                  <Skeleton height={32} />
                </Box>,
              )(
                <Text
                  color="primary"
                  sx={{
                    fontSize: 5,
                    fontWeight: "bold",
                    fontFamily: "clicker",
                  }}
                >
                  {configGeneral?.fullname || "My fullname"}
                </Text>,
              )}
            </Box>

            {jsxUtil.renderLoader(
              loadingConfigGeneral,
              <Box sx={{ width: ["90%", "80%"] }}>
                <Skeleton height={32} mb={2} />
              </Box>,
            )(
              <Heading as="h2" mt={2} mb={3}>
                <Flex
                  sx={{
                    flexDirection: ["column", "row"],
                    gap: 2,
                  }}
                >
                  <Text>{locale?.messages.homepage.subtitle}</Text>

                  <Text color="primary">
                    <Typewriter
                      options={{
                        strings: [`${configGeneral?.jobTitle || "Programmer"}`],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </Text>
                </Flex>
              </Heading>,
            )}

            {jsxUtil.renderLoader(
              loadingHomePage,
              <>
                <Skeleton height={13} width="90%" />
                <Skeleton height={13} width="70%" />
                <Skeleton height={13} width="60%" />
              </>,
            )(<Paragraph mb={3}>{homePageInfo?.description}</Paragraph>)}

            <ButtonLink
              href={Routes.ABOUT}
              text={locale?.messages.homepage.buttonAboutMe || ""}
              buttonProps={{
                mt: 3,
                "aria-label": "about-me",
              }}
            />
          </Box>

          <Flex
            sx={{
              flex: "1 1 auto",
              display: ["none", null, "flex"],
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Box className="home-image" p={40}>
              <Box
                sx={{
                  height: 350,
                  width: 200,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {jsxUtil.renderLoader(
                  loadingHomePage,
                  <Skeleton height={350} />,
                )(
                  homePageInfo?.profilePic && (
                    <Image
                      src={homePageInfo?.profilePic.url}
                      layout="fill"
                      alt="profile-pic-home"
                      objectFit="cover"
                      objectPosition="center"
                      priority
                    />
                  ),
                )}
              </Box>
            </Box>
          </Flex>
        </Flex>
      </Container>
    </MainLayout>
  );
};

export default Home;
