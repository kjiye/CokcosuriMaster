import React, {useLayoutEffect} from 'react';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import CancelPresenter from './CancelPresenter';

function CancelContainer({route}: any): JSX.Element {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  useLayoutEffect(() => {
    if (isFocused) {
      const {sideRadiusType} = route.params;
      sideRadiusType('right');
    }
  }, [isFocused]);

  const props = {
    goDetail: () => {
      navigation.navigate('WorkDetail', {status: 'cancel'});
    },
  };
  return <CancelPresenter {...props} />;
}

export default CancelContainer;
