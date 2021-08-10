import {GET_WORKS, SET_WORKING} from './main.queries';
import React, {useEffect} from 'react';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {useLazyQuery, useMutation, useQuery} from '@apollo/client';
// import {GET_USERS} from './main.queries';
import MainPresenter from './MainPresenter';

function WaitContaienr({
  route: {
    params: {state},
  },
}: any): JSX.Element {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const [getWorks, {data, error}] = useLazyQuery(GET_WORKS, {
    variables: {
      state,
    },
  });

  const [setWorking] = useMutation(SET_WORKING, {
    onCompleted: () => {
      getWorks();
    },
  });

  useEffect(() => {
    if (isFocused) {
      getWorks();
    }
  }, [isFocused]);

  const props = {
    works: data?.getWorks?.works || [],
    goDetail: () => {
      navigation.navigate('WorkDetail');
    },
    onLeftPress: (item: any) => {
      console.log('주소 복사');
    },
    onRightPress: (item: any) => {
      if (item.state === 'WAIT') {
        setWorking({
          variables: {
            workId: item.id,
            state: 'RESERVE',
          },
        });
      }
    },
  };
  return <MainPresenter {...props} />;
}

export default WaitContaienr;
