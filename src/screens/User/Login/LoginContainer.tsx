import React, {useLayoutEffect, useState} from 'react';
import {removeToken, saveToken} from '../../../apollo';
import I18n from '../../../utils/i18nHelpers';
import {Login} from './login.queries';
import LoginPresenter from './LoginPresenter';
import {LoginRegex} from '../../../models/user';
import {callBackAlert} from '../../../utils/alert';
import {checkRegex} from '../../../utils/commonUtils';
import {initCheckPermissions} from '../../../utils/permissionUtils';
import {inventActionModal} from '../../../utils/modalUtils';
import {useMutation} from '@apollo/client';
import {useNavigation} from '@react-navigation/native';

function LoginContainer(): JSX.Element {
  const navigation = useNavigation();

  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [regexResult, setRegexResult] = useState<LoginRegex>({});

  const [login] = useMutation(Login, {
    onError: async (error: any) => {
      inventActionModal(navigation, {isShow: false});
      await removeToken();
      const message =
        error?.message && error.message.includes('해당 아이디')
          ? I18n.t('Error.forced_withdrawal')
          : I18n.t('Error.login');
      callBackAlert(
        message,
        () => {
          setId('');
          setPassword('');
          return;
        },
        false,
        I18n.t('Title.login_failed'),
      );
    },
    onCompleted: async (data: any) => {
      const {
        loginMaster: {success, token, master},
      } = data;
      inventActionModal(navigation, {isShow: false});
      if (success) {
        await saveToken(token, master.phone);
      }
    },
  });

  useLayoutEffect(() => {
    const checkPermission = async () => {
      if (!(await initCheckPermissions())) {
        navigation.navigate('PermissionModal');
      }
    };
    setTimeout(() => {
      checkPermission();
    }, 100);
  }, []);

  const props = {
    id,
    password,
    regexResult,
    loginBtnDisabled: !(regexResult.phone && regexResult.password),
    onChangeId: (text: string) => {
      setId(text);
      if (text.length > 0) {
        setRegexResult({
          ...regexResult,
          phone: checkRegex('phone', text),
        });
      } else {
        setRegexResult({...regexResult, phone: undefined});
      }
    },
    onChangePassword: (text: string) => {
      setPassword(text.toLowerCase());
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
    login: () => {
      inventActionModal(navigation, {isShow: true});
      login({
        variables: {
          phone: id.replace(/-/gi, ''),
          password: password,
        },
      });
    },
    goJoin: () => {
      navigation.navigate('TermsAgreementScreen');
    },
    goFindPassword: () => {
      navigation.navigate('FindPasswordScreen');
    },
  };
  return <LoginPresenter {...props} />;
}

export default LoginContainer;
