
import gql from 'graphql-tag';

export const GET_ORDERS = gql`
  query GetUserOrders($id: String!) {
    getUserOrders(id: $id) {
      id
      customer_id
      contact_number
      datetime
      delivery_address
      payment_method
      payment_status
      status
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