import {REQ_VERIFICATION_CODE, VERIFY_CODE} from './join.queries';
import React, {useState} from 'react';
import {JoinFormInput} from '../../../models/user';
import {JoinMasterInput} from '../../../../__generated__/globalTypes';
import JoinPresenter from './JoinPresenter';
import {checkRegex} from '../../../utils/commonUtils';
import {useMutation} from '@apollo/client';
import {useNavigation} from '@react-navigation/native';

function JoinContainer(): JSX.Element {
  const navigation = useNavigation();
  const [user, setUser] = useState<JoinFormInput>();

  const [reqVerificationCode, {loading: reqVerifyLoading}] = useMutation(
    REQ_VERIFICATION_CODE,
    {
      onError: (error: any) => {
        console.log(error);
      },
      onCompleted: (data: any) => {
        console.log('성공 ', data);
      },
    },
  );

  const [verifyCode, {loading: verifyCodeLoading}] = useMutation(VERIFY_CODE, {
    onCompleted: (data: any) => {
      console.log(data);
    },
  });

  const props = {
    onChangePhone: (text: string) => {
      setUser({...user, phone: text});
    },
    reqVerifyBtnDisabled:
      !checkRegex('phone', user?.phone || '') || reqVerifyLoading,
    reqVerifyBtnPress: () => {
      if (!reqVerifyLoading) {
        reqVerificationCode({
          variables: {
            target: '01064173203',
          },
        });
      }
    },
    verifyCodeBtnPress: () => {
      if (!verifyCodeLoading) {
        verifyCode({
          variables: {},
        });
      }
    },
    join: () => {
      // callBackAlert(
      //   '회원가입이 완료되었습니다',
      //   () => {
      //     navigation.navigate('LoginScreen');
      //   },
      //   false,
      // );
    },
  };

  return <JoinPresenter {...props} />;
}

export default JoinContainer;
