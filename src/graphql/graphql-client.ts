import fetch from "cross-fetch";
import { StorageUtil } from "@utils";
import { CachePersistor, LocalStorageWrapper } from "apollo3-cache-persist";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const GRAPHQL_URL = process.env.NEXT_PUBLIC_GRAPHQL_SERVER_URL;

if (!GRAPHQL_URL) {
  throw new Error("Please add your Server URL to enviroment variables.");
}

const cache = new InMemoryCache();

export const initialize = async () => {
  let client = null;

  try {
    const persistor = new CachePersistor({
      cache,
      storage: new LocalStorageWrapper(StorageUtil()),
      debug: true,
      trigger: "write",
    });
    await persistor.restore();
  } finally {
    client = new ApolloClient({
      cache,
      link: new HttpLink({
        uri: GRAPHQL_URL,
        fetch,
      }),
      connectToDevTools: true,
    });
  }
  return { client };
};

export default {};
