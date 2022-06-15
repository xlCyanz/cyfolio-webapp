import { FormatGQL, IUploadFileGQL } from "@types";

const GRAPHQL_URL = process.env.NEXT_PUBLIC_SERVER_URL;

if (!GRAPHQL_URL) {
  throw new Error("Please add your Server URL to enviroment variables.");
}

const MediaModel = ({ data }: FormatGQL<IUploadFileGQL>) => {
  const rawFormats = data?.attributes?.formats ?? {};
  const keys = Object.keys(rawFormats) as (keyof typeof rawFormats)[];
  const formats = keys.reduce<IUploadFileGQL["attributes"]["formats"]>(
    (acc, key) => {
      return {
        ...acc,
        [key]: {
          name: rawFormats[key]?.name,
          hash: rawFormats[key]?.hash,
          url: rawFormats[key]?.url.includes("http")
            ? rawFormats[key]?.url
            : `${GRAPHQL_URL}${rawFormats[key]?.url}`,
        },
      };
    },
    {
      thumbnail: {
        name: "",
        hash: "",
        url: "",
      },
      large: {
        name: "",
        hash: "",
        url: "",
      },
      medium: {
        name: "",
        hash: "",
        url: "",
      },
      small: {
        name: "",
        hash: "",
        url: "",
      },
    },
  );

  return {
    name: data?.attributes.name,
    hash: data?.attributes.hash,
    alternativeText: data?.attributes.alternativeText,
    url: data?.attributes.url.includes("http")
      ? data?.attributes.url
      : `${GRAPHQL_URL}${data?.attributes.url}`,
    formats,
  };
};

export default MediaModel;
