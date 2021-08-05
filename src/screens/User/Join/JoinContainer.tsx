import {REQ_VERIFICATION_CODE, VERIFY_CODE} from './join.queries';
import React, {useLayoutEffect, useState} from 'react';
import JoinPresenter from './JoinPresenter';
import {checkRegex} from '../../../utils/commonUtils';
import {useMutation} from '@apollo/client';

function JoinContainer(): JSX.Element {
  const [user, setUser] = useState<any>({});

  // useLayoutEffect(() => {}, []);

  const [reqVerificationCode, {loading: reqVerifyLoading}] = useMutation(
    REQ_VERIFICATION_CODE,
    {
      onError: (error: any) => {
        console.log('통신 에러 ', error);
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
      setUser({
        ...user,
        phone: text,
      });
    },
    reqVerifyBtnDisabled: !checkRegex('phone', user.phone) || reqVerifyLoading,
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
  };

  return <JoinPresenter {...props} />;
}

export default JoinContainer;
