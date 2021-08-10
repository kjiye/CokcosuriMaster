import React, {useLayoutEffect} from 'react';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import Toast from 'react-native-simple-toast';
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

  const props = {
    goDetail: () => {
      navigation.navigate('WorkDetail', {status: 'working'});
    },
    copyAddress: () => {
      Toast.show('주소가 복사되었습니다');
    },
  };

  return <WorkingPresenter {...props} />;
}

export default WorkingContainer;
