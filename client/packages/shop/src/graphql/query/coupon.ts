import gql from 'graphql-tag';

export const GET_COUPON = gql`
query GetCoupon( $code: String! ){
    getCoupon( code: $code ) {
        title
        code
        percentage
        maximum_discount_amount
        expiration_date
        status
    }
  }
`;
