import CancelPresenter from './CancelPresenter';
import React, {useLayoutEffect} from 'react';
import {useIsFocused, useNavigation} from '@react-navigation/native';

function CancelContainer({route}: any): JSX.Element {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  useLayoutEffect(() => {
    if (isFocused) {
      const {sideRadiusType} = route.params;
      sideRadiusType('right');
    }
  }, [isFocused]);
  return <CancelPresenter />;
}

export default CancelContainer;
