import React, {useLayoutEffect} from 'react';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import CancelPresenter from './CancelPresenter';
import {WorkState} from '../../../../__generated__/globalTypes';

function CancelContainer({
  route: {
    params: {loading, works, sideRadiusType, setWorkState},
  },
}: any): JSX.Element {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  useLayoutEffect(() => {
    if (isFocused) {
      setWorkState([WorkState.CANCEL]);
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
