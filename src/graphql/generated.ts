import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Board = {
  __typename?: 'Board';
  groups?: Maybe<Array<Group>>;
  icon: Scalars['String'];
  name: Scalars['String'];
};

export type Card = {
  __typename?: 'Card';
  description: Scalars['String'];
  tags?: Maybe<Array<Tag>>;
};

export type Group = {
  __typename?: 'Group';
  cards?: Maybe<Array<Card>>;
  name: Scalars['String'];
};

export type Menu = {
  __typename?: 'Menu';
  boards?: Maybe<Array<Board>>;
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  board?: Maybe<Board>;
  boardMenus: Array<Menu>;
};

export type QueryBoardArgs = {
  name: Scalars['String'];
};

export type Tag = {
  __typename?: 'Tag';
  color?: Maybe<Scalars['String']>;
  text: Scalars['String'];
};

export type GetBoardIconQueryVariables = Exact<{
  boardName: Scalars['String'];
}>;

export type GetBoardIconQuery = {
  __typename?: 'Query';
  board?: { __typename?: 'Board'; icon: string } | null;
};

export type GetBoardsNameQueryVariables = Exact<{ [key: string]: never }>;

export type GetBoardsNameQuery = {
  __typename?: 'Query';
  boardMenus: Array<{
    __typename?: 'Menu';
    name: string;
    boards?: Array<{ __typename?: 'Board'; name: string; icon: string }> | null;
  }>;
};

export const GetBoardIconDocument = gql`
  query getBoardIcon($boardName: String!) {
    board(name: $boardName) {
      icon
    }
  }
`;

/**
 * __useGetBoardIconQuery__
 *
 * To run a query within a React component, call `useGetBoardIconQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBoardIconQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBoardIconQuery({
 *   variables: {
 *      boardName: // value for 'boardName'
 *   },
 * });
 */
export function useGetBoardIconQuery(
  baseOptions: Apollo.QueryHookOptions<GetBoardIconQuery, GetBoardIconQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetBoardIconQuery, GetBoardIconQueryVariables>(
    GetBoardIconDocument,
    options,
  );
}
export function useGetBoardIconLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetBoardIconQuery,
    GetBoardIconQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetBoardIconQuery, GetBoardIconQueryVariables>(
    GetBoardIconDocument,
    options,
  );
}
export type GetBoardIconQueryHookResult = ReturnType<typeof useGetBoardIconQuery>;
export type GetBoardIconLazyQueryHookResult = ReturnType<typeof useGetBoardIconLazyQuery>;
export type GetBoardIconQueryResult = Apollo.QueryResult<
  GetBoardIconQuery,
  GetBoardIconQueryVariables
>;
export const GetBoardsNameDocument = gql`
  query getBoardsName {
    boardMenus {
      name
      boards {
        name
        icon
      }
    }
  }
`;

/**
 * __useGetBoardsNameQuery__
 *
 * To run a query within a React component, call `useGetBoardsNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBoardsNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBoardsNameQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetBoardsNameQuery(
  baseOptions?: Apollo.QueryHookOptions<GetBoardsNameQuery, GetBoardsNameQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetBoardsNameQuery, GetBoardsNameQueryVariables>(
    GetBoardsNameDocument,
    options,
  );
}
export function useGetBoardsNameLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetBoardsNameQuery,
    GetBoardsNameQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetBoardsNameQuery, GetBoardsNameQueryVariables>(
    GetBoardsNameDocument,
    options,
  );
}
export type GetBoardsNameQueryHookResult = ReturnType<typeof useGetBoardsNameQuery>;
export type GetBoardsNameLazyQueryHookResult = ReturnType<
  typeof useGetBoardsNameLazyQuery
>;
export type GetBoardsNameQueryResult = Apollo.QueryResult<
  GetBoardsNameQuery,
  GetBoardsNameQueryVariables
>;
