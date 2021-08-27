import {gql} from '@apollo/client';

export const SET_WORKING_BEFORE = gql`
  mutation updateWorkingBefore(
    $workId: Int!
    $state: WorkState!
    $files: [Upload!]
  ) {
    updateWorkState(workId: $workId, state: $state, files: $files) {
      success
    }
  }
`;
