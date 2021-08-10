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
  phone?: string;
  password?: string;
  name?: string;
}
