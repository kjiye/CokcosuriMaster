import React, {useState} from 'react';
import {GET_QNA} from '../qna.queries';
import QnAListPresenter from './QnAListPresenter';
import {useQuery} from '@apollo/client';

function QnAListContainer(): JSX.Element {
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const {loading, data, refetch} = useQuery(GET_QNA);

  const props = {
    loading,
    isRefreshing,
    list: data?.getQnA.qnas || [],
    onRefreshing: async () => {
      setIsRefreshing(true);
      await refetch();
      setIsRefreshing(false);
    },
  };

  return <QnAListPresenter {...props} />;
}

export default QnAListContainer;
