import {GET_NOTICE} from './notice.queries';
import NoticePresenter from './NoticePresenter';
import React from 'react';
import {useQuery} from '@apollo/client';

function NoticeContainer(): JSX.Element {
  const {loading, data} = useQuery(GET_NOTICE);
  const props = {
    loading,
    list: data?.getNotices?.notices || [],
  };

  return <NoticePresenter {...props} />;
}

export default NoticeContainer;
