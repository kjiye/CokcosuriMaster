import React, {useLayoutEffect} from 'react';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {GET_WORKS} from '../main.queries';
import {WorkState} from '../../../../__generated__/globalTypes';
import WorkingPresenter from './WorkingPresenter';
import {useQuery} from '@apollo/client';

function WorkingContainer({
  route: {
    params: {sideRadiusType},
  },
}: any): JSX.Element {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const {data, loading, error} = useQuery(GET_WORKS, {
    variables: {
      state: [WorkState.RESERVE, WorkState.WORKING],
    },
  });

  useLayoutEffect(() => {
    if (isFocused) {
      sideRadiusType(undefined);
    }
  }, [isFocused]);

  const props = {
    loading,
    works: data?.getWorks?.works || [],
    goDetail: () => {
      navigation.navigate('WorkDetail');
    },
  };

  return <WorkingPresenter />;
}

export default WorkingContainer;
