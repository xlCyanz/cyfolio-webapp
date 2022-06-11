import { DateUtil, StorageUtil } from "@utils";
import {
  FetchPolicy,
  OperationVariables,
  QueryHookOptions,
  useQuery,
} from "@apollo/client";

const LocalStorage = StorageUtil();

const getExpirationFetchPolicy = (
  expiration: number,
  key: string,
): FetchPolicy => {
  const lastFetch = LocalStorage.getItem(key);

  if (
    lastFetch === null ||
    DateUtil().diff(DateUtil(lastFetch), "second") > expiration
  ) {
    LocalStorage.setItem(
      key,
      DateUtil().set("second", expiration).toISOString(),
    );
    return "network-only";
  }

  return "cache-first";
};

/**
 * This is a function to help to create a expiration date for useQuery.
 * @param query Query
 * @param expiration Expiration value in seconds.
 * @param key Key for storage
 * @param options Query hook options
 * @returns Query results
 */
const useQueryExpiration = <T, U = OperationVariables>(
  query: any,
  expiration: number,
  key: string,
  options?: Omit<QueryHookOptions<T, U>, "fetchPolicy" | "nextFetchPolicy">,
) => {
  const fetchPolicy = getExpirationFetchPolicy(expiration, key);
  return useQuery(query, {
    ...options,
    fetchPolicy,
  });
};

export default useQueryExpiration;
