import QnARegPresenter from './QnARegPresenter';
import React from 'react';
import {callBackAlert} from '../../../utils/alert';
import {useNavigation} from '@react-navigation/native';

function QnARegContainer(): JSX.Element {
  const navigation = useNavigation();
  const props = {
    showSelectionModal: () => {
      navigation.navigate('SelectionModal', {
        title: '문의 사유',
        typeList: [
          {name: '회원탈퇴'},
          {name: '결제'},
          {name: '수리 업무'},
          {name: '기타'},
        ],
      });
    },
    ok: () => {
      callBackAlert(
        '문의가 등록되었습니다.\n답변이 달릴 시 문자로 알려드리겠습니다',
        () => {
          return;
        },
        false,
      );
    },
  };
  return <QnARegPresenter {...props} />;
}
export default QnARegContainer;
