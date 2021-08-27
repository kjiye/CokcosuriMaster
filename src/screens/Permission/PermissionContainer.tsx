import PermissionPresenter from './PermissionPresenter';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

function PermissionContainer(): JSX.Element {
  const navigation = useNavigation();

  const props = {
    okPress: () => {
      navigation.goBack();
    },
  };
  return <PermissionPresenter {...props} />;
}

export default PermissionContainer;
