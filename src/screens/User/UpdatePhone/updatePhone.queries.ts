import {gql} from '@apollo/client';

export const SET_PHONE = gql`
  mutation updateMasterPhone($phone: String!, $sendId: String!) {
    updateMasterPhone(phone: $phone, sendId: $sendId) {
      success
    }
  }
`;
