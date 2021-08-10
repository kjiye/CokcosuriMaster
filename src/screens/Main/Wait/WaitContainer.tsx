import React, {useLayoutEffect} from 'react';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {GET_WORKS} from '../main.queries';
import WaitPresenter from './WaitPresenter';
import {WorkState} from '../../../../__generated__/globalTypes';
import {useQuery} from '@apollo/client';

function WaitContaienr({
  route: {
    params: {sideRadiusType},
  },
}: any): JSX.Element {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const {data, loading, error} = useQuery(GET_WORKS, {
    variables: {
      state: [WorkState.WAIT],
    },
  });

  useLayoutEffect(() => {
    if (isFocused) {
      sideRadiusType('left');
    }
  }, [isFocused]);

  const props = {
    loading,
    works: data?.getWorks?.works || [],
    goDetail: () => {
      navigation.navigate('WorkDetail');
    },
  };
  return <WaitPresenter {...props} />;
}

export default WaitContaienr;
