import { gql } from "@apollo/client";

export const UPLOAD_FILE_FIELDS = gql`
  fragment UploadFileFields on UploadFile {
    name
    hash
    alternativeText
    url
    formats
  }
`;

export const TIMELINE_FIELDS = gql`
  fragment TimelineField on ComponentTimelineLineaDeTiempo {
    id
    title
    description
    fromDate
    toDate
  }
`;

export const TECHNOLOGIES_FIELDS = gql`
  fragment TechnologiesFields on TechnologieEntity {
    id
    attributes {
      title
    }
  }
`;
