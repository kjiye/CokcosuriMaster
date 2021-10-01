import ContentViewModal from '../../../components/Modal/ContentViewModal/ContentViewModal';
import {GestureResponderEvent} from 'react-native';
import React from 'react';

interface Props {
  title: string;
  content: string;
  close: (event: GestureResponderEvent) => void;
}

function ContentViewModalPresenter({
  title,
  content,
  close,
}: Props): JSX.Element {
  return <ContentViewModal title={title} content={content} close={close} />;
}

export default ContentViewModalPresenter;
