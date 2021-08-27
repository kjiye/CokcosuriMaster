import React, {useEffect, useState} from 'react';
import DrawerPresenter from './DrawerPresenter';
import {GET_USER_NAME} from './drawer.queries';
import {getUserAppId} from '../../utils/storageUtils';
import {useIsDrawerOpen} from '@react-navigation/drawer';
import {useLazyQuery} from '@apollo/client';
import {useNavigation} from '@react-navigation/native';

function DrawerContainer(): JSX.Element {
  const navigation = useNavigation();
  const isOpened = useIsDrawerOpen();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [userName, setUserName] = useState<string>('');

  const [getUserName] = useLazyQuery(GET_USER_NAME, {
    onError: () => {
      setUserName('');
      setIsLoading(false);
    },
    onCompleted: (data: any) => {
      setUserName(data?.getMaster?.master?.name);
      setIsLoading(false);
    },
  });

  useEffect(() => {
    if (isOpened) {
      const userData = async () => {
        getUserName({
          variables: {
            phone: await getUserAppId(),
          },
        });
      };
      userData();
    }
  }, [isOpened]);

  const props = {
    isLoading,
    userName,
    goUpdateUserInfo: () => {
      navigation.navigate('UpdateUserInfo');
    },
    goUpdatePassword: () => {
      navigation.navigate('UpdatePassword');
    },
    goUpdatePhone: () => {
      navigation.navigate('UpdatePhone');
    },
    goQnA: () => {
      navigation.navigate('QnA');
    },
    goAlarm: () => {
      navigation.navigate('Alarm');
    },
    goNotice: () => {
      navigation.navigate('Notice');
    },
    goGuide: () => {
      navigation.navigate('Guide');
    },
    goTerms: () => {
      navigation.navigate('TermsMenu');
    },
  };
  return <DrawerPresenter {...props} />;
}

export default DrawerContainer;
