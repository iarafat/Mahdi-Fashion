import gql from 'graphql-tag';

export const GET_LOGGED_IN_USER = gql`
  query GetUser($id: String) {
    getUser(id: $id) {
      id
      name
      phones {
        number
      }
    }
  }
`;

