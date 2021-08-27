import {gql} from '@apollo/client';

export const FIND_PASSWORD = gql`
  mutation resetMasterPassword(
    $name: String!
    $phone: String!
    $licenseNo: String!
  ) {
    resetMasterPassword(name: $name, phone: $phone, licenseNo: $licenseNo) {
      success
    }
  }
`;
