import { FC, ReactNode, useEffect, useState } from "react";

import { Client } from "@graphql-client";
import {
  ApolloClient,
  ApolloProvider,
  NormalizedCacheObject,
} from "@apollo/client";

interface IApolloClientContextProps {
  children: ReactNode;
}

const ApolloClientContext: FC<IApolloClientContextProps> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [apolloClient, setApolloClient] =
    useState<ApolloClient<NormalizedCacheObject> | null>(null);

  useEffect(() => {
    Client.initialize()
      .then(({ client }) => {
        setApolloClient(client);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return null;

  if (!apolloClient) return null;

  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};

export default ApolloClientContext;
