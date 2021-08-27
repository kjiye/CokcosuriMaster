import {GET_QNA} from '../qna.queries';
import QnAListPresenter from './QnAListPresenter';
import React from 'react';
import {useQuery} from '@apollo/client';

function QnAListContainer(): JSX.Element {
  const {loading, data} = useQuery(GET_QNA);

  const props = {
    loading,
    list: data?.getQnA.qnas || [],
  };

  return <QnAListPresenter {...props} />;
}

export default QnAListContainer;
