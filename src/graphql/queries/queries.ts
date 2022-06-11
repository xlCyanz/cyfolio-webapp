import { gql } from "@apollo/client";
import {
  TECHNOLOGIES_FIELDS,
  TIMELINE_FIELDS,
  UPLOAD_FILE_FIELDS,
} from "./fragment";

export const GET_HOMEPAGE_INFO = gql`
  ${UPLOAD_FILE_FIELDS}
  query GET_HOMEPAGE_INFO($locale: I18NLocaleCode!) {
    homepage(locale: $locale) {
      data {
        __typename
        attributes {
          __typename
          profilePic {
            __typename
            data {
              __typename
              attributes {
                __typename
                ...UploadFileFields
              }
            }
          }
          description
        }
      }
    }
  }
`;

export const GET_CONFIG_GENERAL = gql`
  query GET_CONFIG_GENERAL($locale: I18NLocaleCode!) {
    configGeneral(locale: $locale) {
      __typename
      data {
        __typename
        attributes {
          fullname
          jobTitle
          email
        }
      }
    }
  }
`;

export const GET_ABOUTPAGE_INFO = gql`
  ${TIMELINE_FIELDS}
  ${UPLOAD_FILE_FIELDS}
  query GET_ABOUTPAGE($locale: I18NLocaleCode!) {
    aboutpage(locale: $locale) {
      __typename
      data {
        __typename
        attributes {
          description
          birthday
          telephone
          curriculumVitae {
            __typename
            data {
              attributes {
                ...UploadFileFields
              }
            }
          }
          educationTimeline {
            ...TimelineField
          }
          experienceTimeline {
            ...TimelineField
          }
        }
      }
    }
  }
`;

export const GET_TECHNOLOGIES = gql`
  ${TECHNOLOGIES_FIELDS}
  query GET_TECHNOLOGIES {
    technologies(pagination: { limit: 30 }) {
      __typename
      data {
        ...TechnologiesFields
      }
    }
  }
`;

export const GET_PROJECTS = gql`
  ${UPLOAD_FILE_FIELDS}
  ${TECHNOLOGIES_FIELDS}
  query GET_PROJECTS($locale: I18NLocaleCode!) {
    projects(locale: $locale) {
      __typename
      data {
        __typename
        id
        attributes {
          title
          banner {
            __typename
            data {
              attributes {
                ...UploadFileFields
              }
            }
          }
          urlRepository
          urlDeployed
          development
          production
          description
          technologies {
            __typename
            data {
              ...TechnologiesFields
            }
          }
          slug
        }
      }
      meta {
        pagination {
          page
          pageSize
          pageCount
        }
      }
    }
  }
`;

export const GET_PROJECT = gql`
  ${UPLOAD_FILE_FIELDS}
  ${TECHNOLOGIES_FIELDS}
  query GET_PROJECT($slug: String!, $locale: I18NLocaleCode) {
    projects(locale: $locale, filters: { slug: { eq: $slug } }) {
      __typename
      data {
        __typename
        id
        attributes {
          title
          banner {
            __typename
            data {
              attributes {
                ...UploadFileFields
              }
            }
          }
          urlRepository
          urlDeployed
          development
          production
          description
          technologies {
            __typename
            data {
              ...TechnologiesFields
            }
          }
          slug
        }
      }
    }
  }
`;
