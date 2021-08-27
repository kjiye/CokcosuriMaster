import {gql} from '@apollo/client';

export const GET_PAYMENT_CATEGORIES = gql`
  query getPaymentCategories($name: CategoryName) {
    getCategories(name: $name) {
      success
      categories {
        code
        name
      }
    }
  }
`;

export const SET_PAYMENT = gql`
  mutation updatePayment($workId: Int!, $paymentId: Int, $data: PaymentInput) {
    updatePayment(workId: $workId, paymentId: $paymentId, data: $data) {
      success
    }
  }
`;
