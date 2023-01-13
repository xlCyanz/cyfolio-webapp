export interface IProject {
  title: string;
  banner: string;
  urlRepository: string;
  urlDeployed: string;
  development: boolean;
  production: boolean;
  description: string;
  technologies: string[];
  englishVersion: IProject;
}

export interface IProjectResponse {
  spanishVersion: IProject;
  englishVersion: IProject;
}
