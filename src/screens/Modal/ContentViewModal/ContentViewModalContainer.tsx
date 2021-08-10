import ContentViewModalPresenter from './ContentViewModalPresenter';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

function ContentViewModalContainer({route}: any): JSX.Element {
  const navigation = useNavigation();
  const props = {
    // 레이아웃용 임시 처리
    title: route.params.title,
    content: route.params.content,
    close: () => {
      navigation.goBack();
    },
  };
  return <ContentViewModalPresenter {...props} />;
}

export default ContentViewModalContainer;
