import {useNavigation} from '@react-navigation/native';
import React from 'react';
import TermsAgreementPresenter from './TermsAgreementPresenter';

function TermsAgreementContainer(): JSX.Element {
  const navigation = useNavigation();
  const props = {
    next: () => {
      navigation.navigate('JoinScreen');
    },
  };
  return <TermsAgreementPresenter {...props} />;
}

export default TermsAgreementContainer;
