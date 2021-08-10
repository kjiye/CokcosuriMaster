import React from 'react';
import WorkingImpossiblePresenter from './WorkingImpossiblePresenter';
import {callBackAlert} from '../../../utils/alert';
import {useNavigation} from '@react-navigation/native';

function WorkingImpossibleContainer(): JSX.Element {
  const navigation = useNavigation();
  const props = {
    okPress: () => {
      callBackAlert(
        '작업 불가 처리되었습니다',
        () => {
          navigation.navigate('MainTab');
        },
        false,
      );
    },
  };
  return <WorkingImpossiblePresenter {...props} />;
}

export default WorkingImpossibleContainer;
