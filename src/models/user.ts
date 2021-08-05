export interface User {
  id: number;
  phone: string;
  name: string;
  createAt: string;
  updateAt: string;
}

export interface JoinFormInput {
  phone: string;
  password: string;
  name: string;
}
