import {GestureResponderEvent} from 'react-native';

export type ImageSelectorOption = 'picker' | 'camera';
export type RegexType = 'email' | 'password' | 'phone' | 'licenseNo';

export const MaskInputPhone = [
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];
export const MaskInputLicenseNo = [
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

export interface CategoryType {
  code?: string;
  name: string;
  active?: boolean;
}

// 추후 삭제
export interface ItemType {
  name: string;
  content: string;
  textPress?: (title: string, content: string) => void;
  onPress?: (event: GestureResponderEvent) => void;
  checked?: boolean;
}
