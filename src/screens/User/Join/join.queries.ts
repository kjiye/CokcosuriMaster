import {DocumentNode, gql} from '@apollo/client';

// API 변경
// export const GET_WORKTYPE_ALL: DocumentNode = gql`
//   query getWorkTypeAll {
//     getWorkTypeAll {
//       success
//       workCategories {
//         id
//         code
//         name
//       }
//       count
//     }
//   }
// `;

export const REQ_VERIFICATION_CODE: DocumentNode = gql`
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
      master {
        id
        phone
        name
        push
        used
        createAt
        updateAt
      }
    }
  }
`;
