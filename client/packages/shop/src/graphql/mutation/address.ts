import gql from 'graphql-tag';

export const UPDATE_ADDRESS = gql`
  mutation AddDeliveryAddress(
      $id: ID!, 
      $title: String!,
      $address: String!,
      $division: String,
      $district: String,
      $region: String
     ){
    addDeliveryAddress(
        id: $id, 
        title: $title, 
        address: $address, 
        division: $division,
        district: $district,
        region: $region
    ){
      message
      status
    }
  }

`;
export const DELETE_ADDRESS = gql`
  mutation DeleteDeliveryAddress( $id: ID!, $index:  Int!) {
    deleteDeliveryAddress(
      id: $id,
      index: $index,
    ) {
     status
      message
    }
  }
`;
