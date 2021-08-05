import React, {useLayoutEffect} from 'react';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import WaitPresenter from './WaitPresenter';

function WaitContaienr({route}: any): JSX.Element {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  useLayoutEffect(() => {
    if (isFocused) {
      const {sideRadiusType} = route.params;
      sideRadiusType('left');
    }
  }, [isFocused]);

  const props = {
    goDetail: () => {
      navigation.navigate('WorkDetail');
    },
  };
  return <WaitPresenter {...props} />;
}

export default WaitContaienr;
