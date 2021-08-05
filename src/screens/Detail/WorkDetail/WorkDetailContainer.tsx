import React from 'react';
import WorkDetailPresenter from './WorkDetailPresenter';
import {callBackAlert} from '../../../utils/alert';
import {useNavigation} from '@react-navigation/native';

function WorkDetailContainer(): JSX.Element {
  const navigation = useNavigation();
  const props = {
    nextPress: () => {
      callBackAlert(
        '진행 선택 시 변경불가합니다.\n작업을 진행하시겠습니까?',
        () => {
          navigation.navigate('WorkingBefore');
        },
        true,
      );
    },
  };
  return <WorkDetailPresenter {...props} />;
}

export default WorkDetailContainer;
