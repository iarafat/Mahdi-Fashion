import gql from 'graphql-tag';

export const GET_LOGGED_IN_CUSTOMER = gql`
  query GetUser{
    getUser{
      id
      name
      phones{
        number
      }
    }
  }
`;
