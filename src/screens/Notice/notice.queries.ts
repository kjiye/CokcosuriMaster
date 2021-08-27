import {gql} from '@apollo/client';

export const GET_NOTICE = gql`
  query getNotices($page: PaginationInput) {
    getNotices(page: $page) {
      success
      notices {
        id
        title
        content
        createAt
        updateAt
      }
    }
  }
`;
