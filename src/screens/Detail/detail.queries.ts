import {gql} from '@apollo/client';

export const GET_WORK_DETAIL = gql`
  query getWorkDetail($workId: Int!) {
    getWorkDetail(workId: $workId) {
      success
      work {
        id
        title
        customer {
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
        address {
          postalCode
          roadAddress
          detail
          coordinate {
            lat
            lon
          }
        }
        requestImage {
          id
          path
        }
        beforeImage {
          id
          path
        }
        afterImage {
          id
          path
        }
        cancelImage {
          id
          path
        }
        cancelReason
        state
        workCategory {
          code
          name
        }
        payment {
          id
          price
        }
      }
    }
  }
`;
