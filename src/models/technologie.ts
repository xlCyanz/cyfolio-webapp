import { ITechnologiesGQL } from "@types";

const TechnologieModel = (data: ITechnologiesGQL) => {
  if (!data) {
    return null;
  }

  const { attributes } = data;

  return {
    title: attributes.title,
  };
};

export default TechnologieModel;
