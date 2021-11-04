import {DocumentNode} from 'graphql';
import {gql} from '@apollo/client';

export const Login: DocumentNode = gql`
  mutation loginMaster($phone: String!, $password: String!) {
    loginMaster(phone: $phone, password: $password) {
      success
      token
      master {
        id
        phone
        name
        state
      }
    }
  }
`;
