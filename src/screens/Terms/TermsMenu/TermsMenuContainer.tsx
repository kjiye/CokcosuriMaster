import React, {useState} from 'react';
import {GET_TERMS} from '../terms.queries';
import I18n from '../../../utils/i18nHelpers';
import TermsMenuPresenter from './TermsMenuPresenter';
import {TermsType} from '../../../../__generated__/globalTypes';
import {useNavigation} from '@react-navigation/native';
import {useQuery} from '@apollo/client';

function TermsMenuContainer(): JSX.Element {
  const navigation = useNavigation();
  const [type, setType] = useState<string>('');
  const {loading, data, refetch} = useQuery(GET_TERMS, {
    variables: {
      type: type,
    },
  });

  // PRIVACY_POLICY 개인정보 처리방침
  // USE_OF_INFOMATION 개인정보 수집 이용
  // TERMS 앱 이용약관
  // PROVIDE 3자 제공
  const props = {
    privacyPolicy: async () => {
      // setType(TermsType.PRIVACY_POLICY);
      // await refetch();
      navigation.navigate('ContentViewModal', {
        title: I18n.t('Terms.privacy_policy'),
        content: I18n.t('TempTerms.privacy_policy'),
        // content: data?.getTerms?.terms,
      });
    },
    privacyThird: async () => {
      // setType(TermsType.PROVIDE_INFOMATION);
      // await refetch();
      navigation.navigate('ContentViewModal', {
        title: I18n.t('Terms.privacy_third'),
        content: I18n.t('TempTerms.privacy_third'),
        // content: data?.getTerms?.terms,
      });
    },
    privacyUsage: async () => {
      // setType(TermsType.USE_OF_INFOMATION);
      // await refetch();
      navigation.navigate('ContentViewModal', {
        title: I18n.t('Terms.privacy_usage'),
        content: I18n.t('TempTerms.privacy_usage'),
        // content: data?.getTerms.terms,
      });
    },
    appCondition: async () => {
      // setType(TermsType.TERMS);
      // await refetch();
      navigation.navigate('ContentViewModal', {
        title: I18n.t('Terms.app_condition'),
        content: I18n.t('TempTerms.app_condition'),
      });
    },
  };
  return <TermsMenuPresenter {...props} />;
}

export default TermsMenuContainer;
