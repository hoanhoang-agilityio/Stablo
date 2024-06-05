type QueryParam = Record<string, string | boolean | number | undefined>;

export const getQueryParams = (queryParam: QueryParam) =>
  Object.keys(queryParam).reduce(
    (prev, next) =>
      `${prev}${
        queryParam[next]
          ? `${!prev ? '?' : '&'}${next}=${queryParam[next]}` // Add ? at the first param and & at other next ones.
          : ''
      }`,
    '',
  );
