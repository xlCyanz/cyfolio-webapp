export type FormatGQL<T> = {
  data: T;
};

export interface IUploadFileGQL {
  attributes: {
    name: string;
    hash: string;
    alternativeText: string;
    url: string;
    formats: {
      thumbnail: {
        name: string;
        hash: string;
        url: string;
      };
      large?: {
        name: string;
        hash: string;
        url: string;
      };
      medium?: {
        name: string;
        hash: string;
        url: string;
      };
      small?: {
        name: string;
        hash: string;
        url: string;
      };
    };
  };
}

export interface IHomepageGQL {
  attributes: {
    description: string;
    profilePic: FormatGQL<IUploadFileGQL>;
  };
}

export interface ITimeLineGQL {
  id: string;
  title: string;
  description: string;
  fromDate: string;
  toDate: string;
}

export interface IHomepageResponseGQL {
  homepage: FormatGQL<IHomepageGQL>;
}

export interface IConfigGeneralGQL {
  attributes: {
    fullname: string;
    jobTitle: string;
    email: string;
  };
}

export interface IConfigGeneralResponseGQL {
  configGeneral: FormatGQL<IConfigGeneralGQL>;
}

export interface IAboutpageGQL {
  attributes: {
    description: string;
    birthday: string;
    telephone: string;
    curriculumVitae: FormatGQL<IUploadFileGQL>;
    educationTimeline: ITimeLineGQL[];
    experienceTimeline: ITimeLineGQL[];
  };
}

export interface IAboutpageResponseGQL {
  aboutpage: FormatGQL<IAboutpageGQL>;
}

export interface ITechnologiesGQL {
  attributes: {
    title: string;
  };
}

export interface ITechnologiesResponseGQL {
  technologies: FormatGQL<ITechnologiesGQL[]>;
}

export interface IProjectGQL {
  id: string;
  attributes: {
    title: string;
    description: string;
    banner: FormatGQL<IUploadFileGQL>;
    urlRepository?: string;
    urlDeployed?: string;
    development: boolean;
    production: boolean;
    technologies: FormatGQL<ITechnologiesGQL[]>;
    slug: string;
  };
}

export interface IProjectsResponseGQL {
  projects: FormatGQL<IProjectGQL[]>;
}

export interface IProjectResponseGQL {
  project: FormatGQL<IProjectGQL>;
}
