import {removeToken, saveToken} from '../../../apollo';
import {Login} from './login.queries';
import LoginPresenter from './LoginPresenter';
import React from 'react';
import {useMutation} from '@apollo/client';
import {useNavigation} from '@react-navigation/native';

function LoginContainer(): JSX.Element {
  const navigation = useNavigation();
  const [login, {loading}] = useMutation(Login, {
    onError: async (error: any) => {
      await removeToken();
    },
    onCompleted: async (data: any) => {
      const {
        loginMaster: {success, token},
      } = data;

      if (success) {
        await saveToken(token);
      }
    },
  });

  const props = {
    login: () => {
      if (!loading) {
        login({
          variables: {
            phone: '01041891121',
            password: '1234kkk!',
          },
        });
      }
    },
    // tempLogin: () => {
    //   navigation.navigate('MainDrawer');
    // },
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
