import { Fetchp, FetchpHookType, FetchpStatus, useFetchpBuilder } from "./fetchp/mod";

const fetcher = new Fetchp();

const useFetcher = useFetchpBuilder(fetcher);

export {
  fetcher,
  fetcher as default,
  FetchpHookType,
  FetchpStatus,
  useFetcher,
};
