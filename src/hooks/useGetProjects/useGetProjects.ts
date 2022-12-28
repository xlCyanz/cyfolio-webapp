import React from "react";
import { Queries } from "@graphql-client";
import { useQuery } from "@apollo/client";

import { ProjectModel } from "@models";
import { IProjectsResponseGQL } from "@types";

interface IUseGetProjectsProps {
  locale: string;
}

const useGetProjects = ({ locale }: IUseGetProjectsProps) => {
  const { loading, data } = useQuery<IProjectsResponseGQL>(
    Queries.GET_PROJECTS,
    {
      variables: {
        locale,
      },
      fetchPolicy: "cache-first",
      nextFetchPolicy: "cache-and-network",
    },
  );

  const projects = React.useMemo(() => {
    if (loading || !data) return null;
    return data.projects.data.map(ProjectModel);
  }, [data, loading]);

  return {
    loading,
    projects,
  };
};

export default useGetProjects;
