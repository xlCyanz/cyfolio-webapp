import React from "react";

import { Client } from "@graphql-client";
import {
  ApolloClient,
  ApolloProvider,
  NormalizedCacheObject,
} from "@apollo/client";

interface IApolloClientContextProps {
  children: React.ReactElement;
}

const ApolloClientContext = ({ children }: IApolloClientContextProps) => {
  const [loading, setLoading] = React.useState(true);
  const [apolloClient, setApolloClient] =
    React.useState<ApolloClient<NormalizedCacheObject> | null>(null);

  React.useEffect(() => {
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
