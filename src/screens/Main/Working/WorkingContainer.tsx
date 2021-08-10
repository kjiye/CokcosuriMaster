import React, {useLayoutEffect} from 'react';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {GET_WORKS} from '../main.queries';
import Toast from 'react-native-simple-toast';
import {WorkState} from '../../../../__generated__/globalTypes';
import WorkingPresenter from './WorkingPresenter';
import {useQuery} from '@apollo/client';

function WorkingContainer(): JSX.Element {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const {data, loading, error} = useQuery(GET_WORKS, {
    variables: {
      state: [WorkState.RESERVE, WorkState.WORKING],
    },
  });

  // useLayoutEffect(() => {
  //   if (isFocused) {
  //     sideRadiusType(undefined);
  //   }
  // }, [isFocused]);

  const props = {
    loading,
    works: data?.getWorks?.works || [],
    goDetail: () => {
      // navigation.navigate('WorkDetail', {status: 'working'});
      // navigation.navigate('WorkDetail');
    },
    copyAddress: () => {
      Toast.show('주소가 복사되었습니다');
    },
  };

  return <WorkingPresenter {...props} />;
}

export default WorkingContainer;
