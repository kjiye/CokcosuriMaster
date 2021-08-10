import React from 'react';
import WorkingDonePresenter from './WorkingDonePresenter';
import {callBackAlert} from '../../../utils/alert';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';

function WorkingDoneContainer(): JSX.Element {
  const navigation = useNavigation();
  const props = {
    goPayment: () => {
      navigation.navigate('Payment');
    },
    okPress: () => {
      callBackAlert('작업 완료 처리되었습니다', () => {
        navigation.goBack();
      });
    },
  };
  return <WorkingDonePresenter {...props} />;
}

export default WorkingDoneContainer;
