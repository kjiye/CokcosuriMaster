import React from 'react';
import Toast from 'react-native-simple-toast';
import WorkDetailPresenter from './WorkDetailPresenter';
import {callBackAlert} from '../../../utils/alert';
import {useNavigation} from '@react-navigation/native';

function WorkDetailContainer({route}: any): JSX.Element {
  const navigation = useNavigation();
  const props = {
    nextPress: () => {
      // 레이아웃 보여주기용 처리
      const {status} = route.params;
      if (status === 'wait') {
        callBackAlert(
          '진행 선택 시 변경불가합니다.\n작업을 진행하시겠습니까?',
          () => {
            navigation.navigate('WorkingBefore');
          },
          true,
        );
      } else if (status === 'working') {
        navigation.navigate('WorkingDone');
      } else if (status === 'done') {
        //
      } else {
        //
      }
    },
    copyAddress: () => {
      Toast.show('주소가 복사되었습니다');
    },
    status: route.params.status,
  };
  return <WorkDetailPresenter {...props} />;
}

export default WorkDetailContainer;
