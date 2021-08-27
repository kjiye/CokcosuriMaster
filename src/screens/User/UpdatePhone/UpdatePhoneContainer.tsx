import {REQ_VERIFICATION_CODE, VERIFY_CODE} from '../Join/join.queries';
import React, {useLayoutEffect, useState} from 'react';
import I18n from '../../../utils/i18nHelpers';
import {SET_PHONE} from './updatePhone.queries';
import UpdatePhonePresenter from './UpdatePhonePresenter';
import {VerifyInput} from '../../../../__generated__/globalTypes';
import {callBackAlert} from '../../../utils/alert';
import {checkRegex} from '../../../utils/commonUtils';
import {getUserAppId} from '../../../utils/storageUtils';
import {removeToken} from '../../../apollo';
import {useMutation} from '@apollo/client';

function UpdatePhoneContainer(): JSX.Element {
  const [currentPhone, setCurrentPhone] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [requested, setRequested] = useState<boolean>(false);
  const [verifyInfo, setVerifyInfo] = useState<VerifyInput>();
  const [verified, setVerified] = useState<boolean>(false);

  const [reqVerificationCode] = useMutation(REQ_VERIFICATION_CODE, {
    onError: () => {
      callBackAlert(I18n.t('Error.common'), () => {
        return;
      });
    },
    onCompleted: (data: any) => {
      if (data?.reqVerificationCode?.success) {
        callBackAlert(I18n.t('Alert.req_verification_code'), () => {
          setRequested(true);
          const {sendId} = data.reqVerificationCode;
          setVerifyInfo({
            sendId: sendId,
            target: phone.replace(/-/gi, ''),
            code: '',
          });
        });
      } else {
        callBackAlert(I18n.t('Error.req_verification_code'), () => {
          return;
        });
      }
    },
  });

  const [verifyCode] = useMutation(VERIFY_CODE, {
    onError: () => {
      callBackAlert(I18n.t('Error.common'), () => {
        return;
      });
    },
    onCompleted: (data: any) => {
      const message = data?.verifyCode?.success
        ? I18n.t('Alert.verify_code')
        : I18n.t('Error.verif_code');
      const result = data?.verifyCode?.success ? true : false;
      setVerified(result);
      callBackAlert(
        message,
        () => {
          return;
        },
        result,
      );
    },
  });

  const [updateMasterPhone] = useMutation(SET_PHONE, {
    onError: () => {
      callBackAlert(I18n.t('Error.common'), () => {
        return;
      });
    },
    onCompleted: () => {
      callBackAlert(I18n.t('Alert.update_phone'), async () => {
        await removeToken();
      });
    },
  });

  useLayoutEffect(() => {
    const initData = async () => {
      const phone = await getUserAppId();
      setCurrentPhone(phone || '');
    };
    initData();
  }, []);

  const props = {
    verifyInfo,
    currentPhone,
    phone,
    requested,
    reqVerifyBtnDisabled: !checkRegex('phone', phone),
    verifyCodeBtnDisabled: !(verifyInfo?.code && verifyInfo.code.length > 0),
    updateBtnDisabled: !verified,
    onChangePhone: (text: string) => {
      setPhone(text);
    },
    onChangeVerificationCode: (text: string) => {
      if (verifyInfo?.sendId && verifyInfo?.target) {
        setVerifyInfo({
          ...verifyInfo,
          code: text,
        });
      }
    },
    reqVerifyBtnPress: () => {
      reqVerificationCode({
        variables: {
          target: phone.replace(/-/gi, ''),
        },
      });
    },
    verifyCodeBtnPress: () => {
      verifyCode({
        variables: {
          data: verifyInfo,
        },
      });
    },
    updatePress: () => {
      updateMasterPhone({
        variables: {
          phone: phone.replace(/-/gi, ''),
          sendId: verifyInfo?.sendId,
        },
      });
    },
  };
  return <UpdatePhonePresenter {...props} />;
}

export default UpdatePhoneContainer;
