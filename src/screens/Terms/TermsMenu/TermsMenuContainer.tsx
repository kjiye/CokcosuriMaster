import I18n from '../../../utils/i18nHelpers';
import React from 'react';
import TermsMenuPresenter from './TermsMenuPresenter';
import {useNavigation} from '@react-navigation/native';

function TermsMenuContainer(): JSX.Element {
  const navigation = useNavigation();
  const props = {
    privacyPolicy: () => {
      navigation.navigate('ContentViewModal', {
        title: I18n.t('Terms.privacy_policy'),
        content: I18n.t('TempTerms.privacy_policy'),
      });
    },
    privacyThird: () => {
      navigation.navigate('ContentViewModal', {
        title: I18n.t('Terms.privacy_third'),
        content: I18n.t('TempTerms.privacy_third'),
      });
    },
    privacyUsage: () => {
      navigation.navigate('ContentViewModal', {
        title: I18n.t('Terms.privacy_usage'),
        content: I18n.t('TempTerms.privacy_usage'),
      });
    },
    appCondition: () => {
      navigation.navigate('ContentViewModal', {
        title: I18n.t('Terms.app_condition'),
        content: I18n.t('TempTerms.app_condition'),
      });
    },
  };
  return <TermsMenuPresenter {...props} />;
}

export default TermsMenuContainer;
