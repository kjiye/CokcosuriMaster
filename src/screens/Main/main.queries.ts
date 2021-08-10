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
          id
          code
          name
        }
        content
        requestImage {
          path
        }
        state
        workCategory {
          id
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
  mutation ($workId: Int!, $state: WorkState!) {
    updateWorkState(workId: $workId, state: $state) {
      success
      work {
        id
        title
      }
    }
  }
`;
