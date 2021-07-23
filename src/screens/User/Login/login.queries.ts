import {DocumentNode} from 'graphql';
import {gql} from '@apollo/client';

export const Login: DocumentNode = gql`
  mutation loginUser($phone: String!, $password: String!) {
    loginUser(phone: $phone, password: $password) {
      success
      token
      user {
        id
        phone
        name
        company {
          licenseNo
        }
        workTypes {
          id
          code
          name
        }
      }
    }
  }
`;
