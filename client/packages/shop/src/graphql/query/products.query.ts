import gql from 'graphql-tag';

export const GET_PRODUCTS = gql`
query GetProducts {
  products {
    items {
    	id
      	name
    	slug
      description
      type {
        id
        slug
      }
      categories {
        id
        slug
      }      
    }
    totalCount
    hasMore
  }
}

`;
