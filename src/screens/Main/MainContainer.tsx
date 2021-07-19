import {GET_USERS} from './main.queries';
import {useMutation, useQuery} from '@apollo/client';
import {Alert} from 'react-native';
import MainPresenter from './MainPresenter';
import React from 'react';

function MainContainer(): JSX.Element {
  const {data} = useQuery(GET_USERS);

  // const [joinMutation, {loading}] = useMutation(JOIN_USER, {
  //   onCompleted: (data: any) => {
  //     const {
  //       join: {ok, user, error},
  //     } = data;

  //     console.log(ok);
  //     console.log(user);
  //     console.log(error);

  //     if (error) {
  //       Alert.alert(error.message);
  //     } else if (user) {
  //       Alert.alert(user.name);
  //     }
  //   },
  // });

  console.log(data)

  const props = {
    loading: false,
    users: data?.getUsers?.users,
    join: () => {
      // if (!loading) {
      //   joinMutation({
      //     variables: {
      //       data: {
      //         phone: '01041891129',
      //         password: '1234kkk!',
      //         name: '신동석',
      //       },
      //     },
      //   });
      // }
    },
  };

  return <MainPresenter {...props} />;
}

export default MainContainer;
