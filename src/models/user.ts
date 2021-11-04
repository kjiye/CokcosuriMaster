import {CategoryType, ImageData} from './common';
import {CategoryInput} from '../../__generated__/globalTypes';
import {Image} from 'react-native-image-crop-picker';

export type UserSelectionModalType = 'area' | 'store';

export interface User {
  id: number;
  phone: string;
  name: string;
  createAt: string;
  updateAt: string;
}

export interface TermsAgreement {
  terms_privacy_policy: boolean;
  terms_privacy_third: boolean;
  terms_privacy_usage: boolean;
  terms_condition: boolean;
}

export interface JoinFormInput {
  name?: string;
  phone?: string;
  password?: string;
  rePassword?: string;
  workCategories?: (CategoryInput | null)[] | null;
  licenseNo?: string;
  storeId?: number;
}

export interface JoinRegex {
  password?: boolean;
  rePassword?: boolean;
  licenseNo?: boolean;
}

export interface LoginRegex {
  phone?: boolean;
  password?: boolean;
}

export interface PasswordRegex {
  password?: boolean;
  newPassword?: boolean;
  rePassword?: boolean;
  phone?: boolean;
  licenseNo?: boolean;
}

export interface CompanyInfo {
  licenseImage?: ImageData | Image;
  licenseNo: string;
}

export interface UpdateUser {
  name: string;
  phone: string;
  workCategories: CategoryType[];
  company: CompanyInfo;
  store: Store;
  storeId: number;
  area: CategoryType[];
}

export interface Store {
  id?: number;
  name?: string;
  area?: CategoryType;
}
