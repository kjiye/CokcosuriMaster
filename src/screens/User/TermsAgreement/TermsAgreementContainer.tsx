import React, {useState} from 'react';
import {TermsAgreement} from '../../../models/user';
import TermsAgreementPresenter from './TermsAgreementPresenter';
import {useNavigation} from '@react-navigation/native';

function TermsAgreementContainer(): JSX.Element {
  const navigation = useNavigation();
  const [agreements, setAgreements] = useState<TermsAgreement>({
    terms_privacy_policy: false,
    terms_privacy_third: false,
    terms_privacy_usage: false,
    terms_condition: false,
  });
  const props = {
    showPolicy: (title: string, content: string) => {
      navigation.navigate('ContentViewModal', {
        title: title,
        content: content,
      });
    },
    agreements,
    btnDisabled: !(
      agreements.terms_privacy_policy &&
      agreements.terms_privacy_third &&
      agreements.terms_privacy_usage &&
      agreements.terms_condition
    ),
    checkAll: () => {
      if (
        !agreements.terms_privacy_policy ||
        !agreements.terms_privacy_third ||
        !agreements.terms_privacy_usage ||
        !agreements.terms_condition
      ) {
        setAgreements({
          terms_privacy_policy: true,
          terms_privacy_third: true,
          terms_privacy_usage: true,
          terms_condition: true,
        });
      } else {
        setAgreements({
          terms_privacy_policy: false,
          terms_privacy_third: false,
          terms_privacy_usage: false,
          terms_condition: false,
        });
      }
    },
    checkPrivacyPolicy: () => {
      setAgreements({
        ...agreements,
        terms_privacy_policy: !agreements.terms_privacy_policy,
      });
    },
    checkPrivacyThird: () => {
      setAgreements({
        ...agreements,
        terms_privacy_third: !agreements.terms_privacy_third,
      });
    },
    checkPrivacyUsage: () => {
      setAgreements({
        ...agreements,
        terms_privacy_usage: !agreements.terms_privacy_usage,
      });
    },
    checkCondition: () => {
      setAgreements({
        ...agreements,
        terms_condition: !agreements.terms_condition,
      });
    },
    next: () => {
      navigation.navigate('JoinScreen');
    },
  };
  return <TermsAgreementPresenter {...props} />;
}

export default TermsAgreementContainer;
