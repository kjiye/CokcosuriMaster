import React from 'react';
import WaitPresenter from './WaitPresenter';
import {useNavigation} from '@react-navigation/native';

function WaitContaienr(): JSX.Element {
  const navigation = useNavigation();

  const props = {
    goDetail: () => {
      // navigation.navigate('WorkDetai ');
    },
  };
  return <WaitPresenter {...props} />;
}

export default WaitContaienr;
