import React, {useLayoutEffect} from 'react';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import DonePresenter from './DonePresenter';
import {GET_WORKS} from '../main.queries';
import {WorkState} from '../../../../__generated__/globalTypes';
import {useQuery} from '@apollo/client';

function DoneContainer({
  route: {
    params: {sideRadiusType},
  },
}: any): JSX.Element {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const {data, loading, error} = useQuery(GET_WORKS, {
    variables: {
      state: [WorkState.DONE],
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
  return <DonePresenter />;
}

export default DoneContainer;
