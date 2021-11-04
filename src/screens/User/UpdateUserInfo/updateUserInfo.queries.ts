import {gql} from '@apollo/client';

export const GET_USER = gql`
  query getMaster($phone: String!) {
    getMaster(phone: $phone) {
      success
      master {
        id
        phone
        name
        company {
          id
          licenseNo
          licenseImage {
            id
            path
          }
        }
        workCategories {
          code
          name
        }
        area {
          code
          name
        }
        store {
          id
          area {
            code
            name
          }
          name
        }
      }
    }
  }
`;

export const GET_CATEGORIES = gql`
  query getWorkTypeCategories($name: CategoryName) {
    getCategories(name: $name) {
      success
      categories {
        code
        name
      }
    }
  }
`;

export const GET_STORES = gql`
  query getStoreList($search: StoreSearchInput) {
    getStores(search: $search) {
      success
      stores {
        id
        area {
          code
          name
        }
        name
      }
      count
    }
  }
`;

export const SET_MASTER_INFO = gql`
  mutation updateMasterInfo($data: UpdateMasterInput, $file: Upload) {
    updateMasterInfo(data: $data, file: $file) {
      success
    }
  }
`;

export const WITHDRAWAL = gql`
  mutation withdraw {
    withdraw {
      success
    }
  }
`;

export const LOGOUT = gql`
  mutation logoutMaster {
    logoutMaster {
      success
    }
  }
`;
