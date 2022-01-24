import {GestureResponderEvent} from 'react-native';

/**
 * 별도로 정의해서 사용 중인 타입 - 화면 무관 범용적 사용
 */

export type ImageSelectorOption = 'picker' | 'camera';
export type RegexType = 'email' | 'password' | 'phone' | 'licenseNo';

export const APIDateFormatMonth = 'YYYY/MM';
export const APIDateFormatDay = 'YYYY/MM/DD';

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

export const MonthNames = [
  '1월',
  '2월',
  '3월',
  '4월',
  '5월',
  '6월',
  '7월',
  '8월',
  '9월',
  '10월',
  '11월',
  '12월',
];

export const DayNames = [
  '일요일',
  '월요일',
  '화요일',
  '수요일',
  '목요일',
  '금요일',
  '토요일',
];

export const DayNamesShort = ['일', '월', '화', '수', '목', '금', '토'];

export interface CategoryType {
  id?: number;
  code?: string;
  name: string;
  active?: boolean;
}

export interface Coords {
  lat?: string;
  lon?: string;
}

export interface ImageData {
  id: number;
  path: string;
}

export interface RestResponse {
  result: boolean;
}

// TextLineCheckGroup 컴포넌트에서 props 타입 정의 용도로 사용 중
export interface ItemType {
  name: string;
  content: string;
  textPress?: (title: string, content: string) => void;
  onPress?: (event: GestureResponderEvent) => void;
  checked?: boolean;
}
