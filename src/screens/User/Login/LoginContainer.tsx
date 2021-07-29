import {Login} from './login.queries';
import LoginPresenter from './LoginPresenter';
import React from 'react';
import {isLoggedInVar} from '../../../apollo';
import {useMutation} from '@apollo/client';

function LoginContainer(): JSX.Element {
  const [login, {loading}] = useMutation(Login, {
    onError: (error: any) => {
      console.log('에러');
      isLoggedInVar(true);
    },
    onCompleted: (data: any) => {
      console.log('성공');
      isLoggedInVar(true);
      // const {
      //   loginUser: {success, token, user},
      // } = data;

      // if (success) {
      //   isLoggedInVar(true);
      // }
      // console.log(success, token);
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
  };
  return <LoginPresenter {...props} />;
}

export default LoginContainer;
