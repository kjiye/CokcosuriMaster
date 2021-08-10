import React, {useState} from 'react';
import UpdatePhonePresenter from './UpdatePhonePresenter';
import {callBackAlert} from '../../../utils/alert';
import {useNavigation} from '@react-navigation/native';

function UpdatePhoneContainer(): JSX.Element {
  const navigation = useNavigation();
  const [requested, setRequested] = useState<boolean>(false);
  const props = {
    requested,
    requestPress: () => {
      callBackAlert(
        '인증번호가 발송되었습니다',
        () => {
          setRequested(true);
          return;
        },
        false,
      );
    },
    confirmPress: () => {
      callBackAlert(
        '휴대폰 인증이 완료되었습니다',
        () => {
          return;
        },
        false,
      );
    },
    updatePress: () => {
      callBackAlert(
        '전화번호가 변경되었습니다',
        () => {
          setRequested(false);
          navigation.goBack();
        },
        false,
      );
    },
  };
  return <UpdatePhonePresenter {...props} />;
}

export default UpdatePhoneContainer;
