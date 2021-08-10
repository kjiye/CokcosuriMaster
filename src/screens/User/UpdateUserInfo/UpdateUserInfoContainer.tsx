import React from 'react';
import UpdateUserInfoPresenter from './UpdateUserInfoPresenter';
import {callBackAlert} from '../../../utils/alert';
import {useNavigation} from '@react-navigation/native';

function UpdateUserInfoContainer(): JSX.Element {
  const navigation = useNavigation();
  const props = {
    logout: () => {
      callBackAlert(
        '로그아웃을 하시겠습니까?',
        () => {
          navigation.navigate('LoginScreen');
        },
        true,
      );
    },
    withdrawal: () => {
      callBackAlert(
        '정말로 회원탈퇴를 하시겠습니까?',
        () => {
          callBackAlert('탈퇴가 완료됐습니다', () => {
            navigation.navigate('LoginScreen');
          });
        },
        true,
      );
    },
    update: () => {
      callBackAlert(
        '개인정보를 수정하시겠습니까?',
        () => {
          callBackAlert('수정이 완료됐습니다', () => {
            navigation.goBack();
          });
        },
        false,
      );
    },
  };
  return <UpdateUserInfoPresenter {...props} />;
}

export default UpdateUserInfoContainer;
