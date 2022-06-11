import { IConfigGeneralGQL } from "@types";

const ConfigGeneralModel = (data: IConfigGeneralGQL) => {
  if (!data) {
    return null;
  }

  const { attributes } = data;

  return {
    fullname: attributes.fullname,
    jobTitle: attributes.jobTitle,
    email: attributes.email,
  };
};

export default ConfigGeneralModel;
