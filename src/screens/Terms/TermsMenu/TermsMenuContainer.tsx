import React, {useEffect, useState} from 'react';
import {GET_TERMS} from '../terms.queries';
import I18n from '../../../utils/i18nHelpers';
import TermsMenuPresenter from './TermsMenuPresenter';
import {TermsType} from '../../../../__generated__/globalTypes';
import {useNavigation} from '@react-navigation/native';

function TermsMenuContainer(): JSX.Element {
  const navigation = useNavigation();
  // const [type, setType] = useState<string>('');
  // const [getTerms, {called, loading, data}] = useLazyQuery(GET_TERMS);

  const props = {
    privacyPolicy: async () => {
      // setType(TermsType.PRIVACY_POLICY);
      navigation.navigate('ContentViewModal', {
        title: I18n.t('Terms.privacy_policy'),
        content: I18n.t('TempTerms.privacy_policy'),
      });
    },
    privacyThird: async () => {
      // setType(TermsType.PROVIDE_INFOMATION);
      navigation.navigate('ContentViewModal', {
        title: I18n.t('Terms.privacy_third'),
        content: I18n.t('TempTerms.privacy_third'),
      });
    },
    privacyUsage: async () => {
      // setType(TermsType.USE_OF_INFOMATION);
      navigation.navigate('ContentViewModal', {
        title: I18n.t('Terms.privacy_usage'),
        content: I18n.t('TempTerms.privacy_usage'),
      });
    },
    appCondition: async () => {
      // setType(TermsType.TERMS);
      navigation.navigate('ContentViewModal', {
        title: I18n.t('Terms.app_condition'),
        content: I18n.t('TempTerms.app_condition'),
      });
    },
  };
  return <TermsMenuPresenter {...props} />;
}

export default TermsMenuContainer;
