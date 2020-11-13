import gql from 'graphql-tag';

export const GET_LOGGED_IN_USER = gql`
query GetUser{
  getUser{
    id
    name
    email
    created_at
    delivery_address{
      title
      address
      division
      district
      region
      is_primary
    }
    phones{
      number
    }
  }
}
`;

