import I18n from '../utils/i18nHelpers';
import {WorkState} from '../../__generated__/globalTypes';

/**
 * 작업 상태값에 매칭되는 텍스트 반환 함수 관리 파일
 */

export const stateBottomButtonName = (state: WorkState) => {
  switch (state) {
    case 'WAIT':
      return I18n.t('Button.bottom.wait');
    case 'RESERVE':
      return I18n.t('Button.bottom.reserve');
    case 'WORKING':
      return I18n.t('Button.bottom.working');
    default:
      return '';
  }
};

export const scheduleStateName = (state: WorkState) => {
  switch (state) {
    case 'RESERVE':
      return I18n.t('Schedule.reserve');
    case 'DONE':
      return I18n.t('Schedule.done');
    case 'CANCEL':
      return I18n.t('Schedule.cancel');
    default:
      return '';
  }
};

export const workStateName = (state: WorkState) => {
  switch (state) {
    case WorkState.WAIT:
      return I18n.t('Status.wait');
    case WorkState.RESERVE:
      return I18n.t('Status.reserve');
    case WorkState.WORKING:
      return I18n.t('Status.working');
    case WorkState.DONE:
      return I18n.t('Status.done');
    case WorkState.CANCEL:
      return I18n.t('Status.cancel');
    case WorkState.CANCEL_ADMIN:
      return I18n.t('Status.cancel_admin');
  }
};

export const paymentText = (payment?: any) => {
  return payment && payment !== null
    ? I18n.t('pay_later')
    : I18n.t('pay_first');
};
