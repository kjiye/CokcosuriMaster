import {gql} from '@apollo/client';

export const GET_WORKS = gql`
  query getWorks($state: [WorkState!]) {
    getWorks(state: $state) {
      success
      count
      works {
        id
        title
        customer {
          id
          name
          phone
          address {
            postalCode
            roadAddress
            detail
            coordinate {
              lat
              lon
            }
          }
        }
        visitDate
        hasParts {
          code
          name
        }
        content
        requestImage {
          path
        }
        state
        workCategory {
          code
          name
        }
        payment {
          price
        }
        remark
      }
    }
  }
`;

export const SET_WORKING = gql`
  mutation updateWorkState(
    $workId: Int!
    $state: WorkState!
    $files: [Upload!]
  ) {
    updateWorkState(workId: $workId, state: $state, files: $files) {
      success
      work {
        id
        title
      }
    }
  }
`;
