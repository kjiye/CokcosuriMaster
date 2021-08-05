import DonePresenter from './DonePresenter';
import React, {useLayoutEffect} from 'react';
import {useIsFocused, useNavigation} from '@react-navigation/native';

function DoneContainer({route}: any): JSX.Element {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  useLayoutEffect(() => {
    if (isFocused) {
      const {sideRadiusType} = route.params;
      sideRadiusType(undefined);
    }
  }, [isFocused]);

  return <DonePresenter />;
}

export default DoneContainer;
