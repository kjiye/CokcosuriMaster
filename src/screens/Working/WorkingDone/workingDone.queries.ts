import {gql} from '@apollo/client';

export const GET_WORK_DONE_DETAIL = gql`
  query getWorkDoneDetail($workId: Int!) {
    getWorkDetail(workId: $workId) {
      success
      work {
        id
        title
        hasParts {
          code
          name
        }
        state
        workCategory {
          code
          name
        }
        payment {
          id
          price
          desc
          state
          reason {
            code
            name
          }
        }
      }
    }
  }
`;

export const SET_WORKING_DONE = gql`
  mutation updateWorkingDone(
    $workId: Int!
    $state: WorkState!
    $files: [Upload!]
  ) {
    updateWorkState(workId: $workId, state: $state, files: $files) {
      success
    }
  }
`;
