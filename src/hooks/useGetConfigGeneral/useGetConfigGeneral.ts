import { useMemo } from "react";
import { Queries } from "@graphql-client";
import { ConfigGeneralModel } from "@models";
import { IConfigGeneralResponseGQL } from "@types";

import useQueryExpiration from "../useQueryExpiration";

interface IUseGetConfigGeneralProps {
  locale: string;
}

const CONFIG_GENERAL_EXPIRATION_TIME = 24 * 60 * 60; // 1 day

const useGetConfigGeneral = ({ locale }: IUseGetConfigGeneralProps) => {
  const { loading, data } = useQueryExpiration<IConfigGeneralResponseGQL>(
    Queries.GET_CONFIG_GENERAL,
    CONFIG_GENERAL_EXPIRATION_TIME,
    "config_general_infomation",
    {
      variables: {
        locale,
      },
    },
  );

  const configGeneral = useMemo(() => {
    if (loading || !data) return null;
    return ConfigGeneralModel(data.configGeneral.data);
  }, [data, loading]);

  return {
    loading,
    configGeneral,
  };
};

export default useGetConfigGeneral;
