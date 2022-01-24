import {WorkState} from '../../__generated__/globalTypes';
import {getWorks_getWorks_works} from '../../__generated__/getWorks';

/**
 * 별도로 정의해서 사용 중인 타입 - 작업 관련
 */

export const CalendarWorkState = [
  WorkState.RESERVE,
  WorkState.DONE,
  WorkState.CANCEL,
];

export interface CalendarWorkCount {
  year: number;
  month: number;
  day: number;
  data: WorkCountData[];
}

export interface WorkCountData {
  state: WorkState;
  count: number;
}

export interface ScheduleData {
  time: string;
  data: getWorks_getWorks_works[];
}
