import {gql} from '@apollo/client';

export const GET_TERMS = gql`
  query getTerms($type: TermsType) {
    getTerms(type: $type) {
      success
      terms
    }
  }
`;
