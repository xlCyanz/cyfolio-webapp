import { IAboutpageGQL } from "@types";

import MediaModel from "./media";
import TimeLineModel from "./timeline";

const AboutPageModel = (data: IAboutpageGQL) => {
  if (!data) {
    return null;
  }

  const { attributes } = data;

  return {
    description: attributes.description,
    birthday: attributes.birthday,
    telephone: attributes.telephone,
    curriculumVitae: MediaModel(attributes.curriculumVitae),
    educationTimeline: attributes.educationTimeline.map(TimeLineModel),
    experienceTimeline: attributes.experienceTimeline.map(TimeLineModel),
  };
};

export default AboutPageModel;
