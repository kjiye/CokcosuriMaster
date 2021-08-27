import React, {useState} from 'react';
import I18n from '../../../../utils/i18nHelpers';
import {PasswordRegex} from '../../../../models/user';
import {SET_PASSWORD} from './updatePassword.queries';
import UpdatePasswordPresenter from './UpdatePasswordPresenter';
import {callBackAlert} from '../../../../utils/alert';
import {checkRegex} from '../../../../utils/commonUtils';
import {removeToken} from '../../../../apollo';
import {useMutation} from '@apollo/client';

function UpdatePasswordContainer(): JSX.Element {
  const [password, setPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [rePassword, setRePassword] = useState<string>('');
  const [regexResult, setRegexResult] = useState<PasswordRegex>({});

  const [updatePassword] = useMutation(SET_PASSWORD, {
    onError: (error: any) => {
      callBackAlert(I18n.t('Error.update_password'), () => {
        return;
      });
    },
    onCompleted: () => {
      callBackAlert(I18n.t('Alert.update_password'), async () => {
        await removeToken();
      });
    },
  });

  const props = {
    password,
    newPassword,
    rePassword,
    regexResult,
    btnDisabled: !(
      password.length > 0 &&
      regexResult?.password &&
      regexResult?.rePassword
    ),
    onChangePassword: (text: string) => {
      setPassword(text.toLowerCase());
    },
    onChangeNewPassword: (text: string) => {
      setNewPassword(text.toLowerCase());
      if (text.length > 0) {
        setRegexResult({
          ...regexResult,
          password: checkRegex('password', text.toLowerCase()),
        });
      } else {
        setRegexResult({
          ...regexResult,
          password: undefined,
        });
      }
    },
    onChangeRePassword: (text: string) => {
      setRePassword(text.toLowerCase());
      if (text.length > 0) {
        setRegexResult({
          ...regexResult,
          rePassword: newPassword === text.toLowerCase(),
        });
      } else {
        setRegexResult({...regexResult, rePassword: undefined});
      }
    },
    updatePress: () => {
      updatePassword({
        variables: {
          oldPassword: password.trim(),
          newPassword: newPassword.trim(),
        },
      });
    },
  };
  return <UpdatePasswordPresenter {...props} />;
}

export default UpdatePasswordContainer;
