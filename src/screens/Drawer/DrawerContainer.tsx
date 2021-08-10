import DrawerPresenter from './DrawerPresenter';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

function DrawerContainer(): JSX.Element {
  const navigation = useNavigation();
  const props = {
    goUpdateUserInfo: () => {
      navigation.navigate('UpdateUserInfo');
    },
    goUpdatePassword: () => {
      navigation.navigate('UpdatePassword');
    },
    goUpdatePhone: () => {
      navigation.navigate('UpdatePhone');
    },
    goQnA: () => {
      navigation.navigate('QnA');
    },
    goAlarm: () => {
      navigation.navigate('Alarm');
    },
    goNotice: () => {
      navigation.navigate('Notice');
    },
    goGuide: () => {
      navigation.navigate('Guide');
    },
    goTerms: () => {
      navigation.navigate('TermsMenu');
    },
  };
  return <DrawerPresenter {...props} />;
}

export default DrawerContainer;
