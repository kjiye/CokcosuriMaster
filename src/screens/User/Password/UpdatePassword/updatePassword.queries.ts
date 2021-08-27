import {gql} from '@apollo/client';

export const SET_PASSWORD = gql`
  mutation updateMasterPassword($oldPassword: String!, $newPassword: String!) {
    updateMasterPassword(oldPassword: $oldPassword, newPassword: $newPassword) {
      success
    }
  }
`;
