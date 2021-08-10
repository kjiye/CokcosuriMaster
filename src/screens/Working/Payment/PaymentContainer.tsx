import PaymentPresenter from './PaymentPresenter';
import React from 'react';
import {callBackAlert} from '../../../utils/alert';
import {useNavigation} from '@react-navigation/native';

function PaymentContainer(): JSX.Element {
  const navigation = useNavigation();
  const props = {
    showSelectionModal: () => {
      navigation.navigate('SelectionModal', {
        title: '현장결제',
        typeList: [
          {name: '후불 결제'},
          {name: '자재부족으로 인한 추가자재 구입'},
          {name: '추가인력 투입'},
          {name: '추가 작업 발생 (작업 위치에 새 작업 진행)'},
          {name: '추가 작업 발생 (작업 위치 외 새로운 시공작업 진행)'},
        ],
      });
    },
    okPress: () => {
      callBackAlert('현장결제 정보가 등록되었습니다', () => {
        navigation.goBack();
      });
    },
  };
  return <PaymentPresenter {...props} />;
}

export default PaymentContainer;
