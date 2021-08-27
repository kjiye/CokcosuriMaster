import I18n from '../utils/i18nHelpers';
import {WorkState} from '../../__generated__/globalTypes';

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

export const paymentText = (payment?: any) => {
  return payment && payment !== null
    ? I18n.t('pay_later')
    : I18n.t('pay_first');
};
