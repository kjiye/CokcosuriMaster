import {gql} from '@apollo/client';

export const GET_WORK_DETAIL_DATA = gql`
  query getWorkDetailData($workId: Int!) {
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
        }
        beforeImage {
          id
          path
        }
        afterImage {
          id
          path
        }
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
