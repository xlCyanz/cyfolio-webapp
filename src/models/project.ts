import { IProjectGQL } from "@types";

import MediaModel from "./media";
import TechnologieModel from "./technologie";

const ProjectModel = (data: IProjectGQL) => {
  if (!data) {
    return null;
  }

  const { attributes } = data;

  return {
    title: attributes.title,
    banner: MediaModel(attributes.banner),
    urlRepository: attributes.urlRepository,
    urlDeployed: attributes.urlDeployed,
    development: attributes.development,
    production: attributes.production,
    description: attributes.description,
    technologies: attributes.technologies.data.map(TechnologieModel),
    slug: attributes.slug,
  };
};

export default ProjectModel;
