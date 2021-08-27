import {gql} from '@apollo/client';

export const GET_QNA_CATEGORIES = gql`
  query getQnACategories($name: CategoryName) {
    getCategories(name: $name) {
      success
      categories {
        code
        name
      }
    }
  }
`;

export const REG_QNA = gql`
  mutation regQnA($data: QnAInput!, $files: [Upload!]) {
    regQnA(data: $data, files: $files) {
      success
    }
  }
`;

export const GET_QNA = gql`
  query getQnA($page: PaginationInput) {
    getQnA(page: $page) {
      success
      qnas {
        id
        title
        content
        category {
          code
          name
        }
        reply {
          id
          title
          content
        }
        createAt
        updateAt
      }
    }
  }
`;
