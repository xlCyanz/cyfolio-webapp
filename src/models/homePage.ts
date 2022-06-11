import { IHomepageGQL } from "@types";

import Media from "./media";

const HomePageModel = (data: IHomepageGQL) => {
  if (!data) {
    return null;
  }

  const { attributes } = data;

  return {
    description: attributes.description,
    profilePic: Media(attributes.profilePic),
  };
};

export default HomePageModel;
