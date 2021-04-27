/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getReactNativePureWebSocket = /* GraphQL */ `
  query GetReactNativePureWebSocket($id: ID!) {
    getReactNativePureWebSocket(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listReactNativePureWebSockets = /* GraphQL */ `
  query ListReactNativePureWebSockets(
    $filter: ModelReactNativePureWebSocketFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReactNativePureWebSockets(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
