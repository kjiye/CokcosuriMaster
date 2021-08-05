import {useIsFocused, useNavigation} from '@react-navigation/native';
import React, {useLayoutEffect} from 'react';
import WorkingPresenter from './WorkingPresenter';

function WorkingContainer({route}: any): JSX.Element {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  useLayoutEffect(() => {
    if (isFocused) {
      const {sideRadiusType} = route.params;
      sideRadiusType(undefined);
    }
  }, [isFocused, route?.params]);

  return <WorkingPresenter />;
}

export default WorkingContainer;
