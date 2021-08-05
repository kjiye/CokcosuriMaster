import {gql} from '@apollo/client';

// export const GET_USERS = gql`
//   query getMaster {
//     getMaster {
//       success
//       master {
//         id
//         phone
//         name
//         company {
//           id
//           licenseNo
//           licenseImage {
//             path
//           }
//         }
//         createAt
//         updateAt
//       }
//     }
//   }
// `;

// export const JOIN_USER = gql`
//   mutation join($data: JoinInput!) {
//     join(data: $data) {
//       success
//       user {
//         id
//         phone
//         name
//         createAt
//         updateAt
//       }
//       error {
//         code
//         message
//       }
//     }
//   }
// `;
