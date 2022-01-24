import ContentViewModalPresenter from './ContentViewModalPresenter';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

/**
 * 줄글 형태의 내용을 조회 시 사용하는 모달 화면
 */
function ContentViewModalContainer({route}: any): JSX.Element {
  const navigation = useNavigation();
  const props = {
    title: route.params.title,
    content: route.params.content,
    close: () => {
      navigation.goBack();
    },
  };
  return <ContentViewModalPresenter {...props} />;
}

export default ContentViewModalContainer;
