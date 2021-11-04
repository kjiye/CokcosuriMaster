import {gql} from '@apollo/client';

export const GET_WORK_COUNT = gql`
  query getWorkCount(
    $visitDate: String!
    $workCategories: [CategoryInput]
    $state: [WorkState!]
  ) {
    getWorkCount(
      visitDate: $visitDate
      workCategories: $workCategories
      state: $state
    ) {
      success
      worksCount {
        year
        month
        day
        data {
          state
          count
        }
      }
    }
  }
`;

export const GET_DATE_WORKS = gql`
  query getDateWorks($visitDate: String, $state: [WorkState!]) {
    getWorks(visitDate: $visitDate, state: $state) {
      success
      works {
        id
        title
        customer {
          name
        }
        visitDate
        address {
          roadAddress
          detail
        }
        state
        workCategory {
          code
          name
        }
      }
    }
  }
`;
