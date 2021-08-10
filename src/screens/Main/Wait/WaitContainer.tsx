import React, {useLayoutEffect} from 'react';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {GET_WORKS} from '../main.queries';
import Toast from 'react-native-simple-toast';
import WaitPresenter from './WaitPresenter';
import {WorkState} from '../../../../__generated__/globalTypes';
import {callBackAlert} from '../../../utils/alert';
import {useQuery} from '@apollo/client';

function WaitContaienr(): JSX.Element {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const {data, loading, error} = useQuery(GET_WORKS, {
    variables: {
      state: [WorkState.WAIT],
    },
  });

  const props = {
    loading,
    works: data?.getWorks?.works || [],
    okPress: () => {
      callBackAlert(
        '[고양] 전등 갈아주세요 / 후 결제\n를 수락하시겠습니까?',
        () => {
          return;
        },
        true,
      );
    },
    copyAddress: () => {
      Toast.show('주소가 복사되었습니다');
    },
    goDetail: () => {
      // navigation.navigate('WorkDetail', {status: 'wait'});
    },
  };
  return <WaitPresenter {...props} />;
}

export default WaitContaienr;
