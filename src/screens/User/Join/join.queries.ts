import {gql} from '@apollo/client';

export const GET_CATEGORIES = gql`
  query getCategories($name: CategoryName) {
    getCategories(name: $name) {
      success
      categories {
        code
        name
      }
    }
  }
`;

export const REQ_VERIFICATION_CODE = gql`
  mutation reqVerificationCode($target: String!) {
    reqVerificationCode(target: $target) {
      success
      sendId
    }
  }
`;

export const VERIFY_CODE = gql`
  mutation verifyCode($data: VerifyInput!) {
    verifyCode(data: $data) {
      success
      sendId
    }
  }
`;

export const JOIN_MASTER = gql`
  mutation joinMaster(
    $data: JoinMasterInput!
    $sendId: String!
    $file: Upload!
  ) {
    joinMaster(data: $data, sendId: $sendId, file: $file) {
      success
    }
  }
`;
