import {gql} from '@apollo/client';

export const GET_ALARM = gql`
  query getAlarm($page: PaginationInput) {
    getAlarm(page: $page) {
      success
      alarm {
        requestId
        reserveTime
        message
        createAt
      }
    }
  }
`;

export const DELETE_ALARM = gql`
  mutation deleteAlarm($alarmIds: [String!]) {
    deleteAlarm(alarmIds: $alarmIds) {
      success
    }
  }
`;
