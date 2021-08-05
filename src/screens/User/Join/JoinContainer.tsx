import {REQ_VERIFICATION_CODE, VERIFY_CODE} from './join.queries';
import React, {useLayoutEffect, useState} from 'react';
import JoinPresenter from './JoinPresenter';
import {checkRegex} from '../../../utils/commonUtils';
import {useMutation} from '@apollo/client';

function JoinContainer(): JSX.Element {
  const [user, setUser] = useState<any>({});
  const [sendId, setSendId] = useState<string>('');

  // useLayoutEffect(() => {}, []);

  const [reqVerificationCode, {loading}] = useMutation(REQ_VERIFICATION_CODE, {
    onError: (e: any) => {
      console.log('통신 에러 ', e);
    },
    onCompleted: (data: any) => {
      console.log('성공 ', data);
    },
  });

  const props = {
    onChangePhone: (text: string) => {
      setUser({
        ...user,
        phone: text,
      });
    },
    reqVerifyBtnDisabled: !checkRegex('phone', user.phone) || loading,
    reqVerifyBtnPress: () => {
      if (!loading) {
        reqVerificationCode({
          variables: {
            target: '01064173203',
          },
        });
      }
    },
    verifyCodeBtnPress: () => {
      const [verifyCode, {error, data, loading}] = useMutation(VERIFY_CODE);
      if (!loading) {
        verifyCode({
          variables: {
            sendId: sendId,
            target: user.phone,
            code: '',
          },
        });
      }
    },
  };

  return <JoinPresenter {...props} />;
}

export default JoinContainer;
