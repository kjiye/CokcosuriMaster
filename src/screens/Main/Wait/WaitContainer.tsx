import React, {useLayoutEffect} from 'react';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import Toast from 'react-native-simple-toast';
import WaitPresenter from './WaitPresenter';
import {callBackAlert} from '../../../utils/alert';

function WaitContaienr({route}: any): JSX.Element {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  useLayoutEffect(() => {
    if (isFocused) {
      const {sideRadiusType} = route.params;
      sideRadiusType('left');
    }
  }, [isFocused]);

  const props = {
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
      navigation.navigate('WorkDetail', {status: 'wait'});
    },
  };
  return <WaitPresenter {...props} />;
}

export default WaitContaienr;
