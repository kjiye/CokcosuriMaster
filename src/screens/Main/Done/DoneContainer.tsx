import React, {useLayoutEffect} from 'react';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import DonePresenter from './DonePresenter';

function DoneContainer({route}: any): JSX.Element {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  useLayoutEffect(() => {
    if (isFocused) {
      const {sideRadiusType} = route.params;
      sideRadiusType(undefined);
    }
  }, [isFocused]);

  const props = {
    goDetail: () => {
      navigation.navigate('WorkDetail', {status: 'done'});
    },
  };

  return <DonePresenter {...props} />;
}

export default DoneContainer;
