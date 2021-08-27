import {gql} from '@apollo/client';

export const SET_WORKING_CANCEL = gql`
  mutation updateWorkingImpossible(
    $workId: Int!
    $state: WorkState!
    $cancelReason: String
    $files: [Upload!]
  ) {
    updateWorkState(
      workId: $workId
      state: $state
      cancelReason: $cancelReason
      files: $files
    ) {
      success
    }
  }
`;
