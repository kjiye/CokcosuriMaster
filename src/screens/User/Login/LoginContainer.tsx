import {Login} from './login.queries';
import LoginPresenter from './LoginPresenter';
import React from 'react';
import {useMutation} from '@apollo/client';

function LoginContainer(): JSX.Element {
  const [login, {loading}] = useMutation(Login, {
    onError: (error: any) => {
      console.log('에러 처리');
    },
    onCompleted: (data: any) => {
      const {
        loginUser: {success, token, user},
      } = data;

      console.log(success, token);
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
