import {gql} from '@apollo/client';

export const GET_USER_NAME = gql`
  query getUserName($phone: String!) {
    getMaster(phone: $phone) {
      success
      master {
        id
        name
      }
    }
  }
`;
