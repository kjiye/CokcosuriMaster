import React from 'react';
import UpdatePasswordPresenter from './UpdatePasswordPresenter';
import {callBackAlert} from '../../../../utils/alert';
import {useNavigation} from '@react-navigation/native';

function UpdatePasswordContainer(): JSX.Element {
  const navigation = useNavigation();
  const props = {
    update: () => {
      callBackAlert(
        '비밀번호가 변경됐습니다',
        () => {
          navigation.navigate('LoginScreen');
        },
        false,
      );
    },
  };
  return <UpdatePasswordPresenter {...props} />;
}

export default UpdatePasswordContainer;
