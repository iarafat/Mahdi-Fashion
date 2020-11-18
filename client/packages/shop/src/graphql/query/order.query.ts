
import gql from 'graphql-tag';

export const GET_ORDERS = gql`
  query GetUserOrders {
    getUserOrders {
      id
      customer_id
      contact_number
      datetime
      delivery_address
      payment_method
      payment_status
      status
      discount_amount
      sub_total
      total
      delivery_method {
        name
        details
      }
      order_tracking {
        status
        ordering
        is_current
        step_competed
      }
    }
  }
`;