import DrawerPresenter from './DrawerPresenter';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

function DrawerContainer(): JSX.Element {
  const navigation = useNavigation();
  const props = {
    goUpdateUserInfo: () => {
      navigation.navigate('UpdateUserInfoScreen');
    },
    goUpdatePassword: () => {
      navigation.navigate('UpdatePasswordScreen');
    },
    goUpdatePhone: () => {
      navigation.navigate('UpdatePhoneScreen');
    },
    goQnA: () => {
      navigation.navigate('QnAScreen');
    },
    goAlarm: () => {
      navigation.navigate('AlarmScreen');
    },
    goNotice: () => {
      navigation.navigate('NoticeScreen');
    },
    goGuide: () => {
      navigation.navigate('GuideScreen');
    },
    goTerms: () => {
      navigation.navigate('TermsMenuScreen');
    },
  };
  return <DrawerPresenter {...props} />;
}

export default DrawerContainer;
