import gql from 'graphql-tag';

export const GET_CATEGORIES = gql`
query GetCategories {
  categories {
    items {
      id
      name
      slug
      banner
      icon
    }
    totalCount
    hasMore
  }
}
`;