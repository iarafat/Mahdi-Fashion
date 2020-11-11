import gql from 'graphql-tag';

export const GET_TYPE= gql`
  query Types($searchText: String) {
    types(searchText: $searchText) {
      totalCount
        items{
            home_title
            image
            home_subtitle
        }
    }
  }
`;
