import {GET_WORKS, SET_WORKING} from './main.queries';
import React, {useCallback, useState} from 'react';
import {
  useFocusEffect,
  useNavigation,
  useNavigationState,
} from '@react-navigation/native';
import {useMutation, useQuery} from '@apollo/client';
import Clipboard from '@react-native-community/clipboard';
import I18n from '../../utils/i18nHelpers';
import {Linking} from 'react-native';
import MainPresenter from './MainPresenter';
import Toast from 'react-native-simple-toast';
import {WorkState} from '../../../__generated__/globalTypes';
import {callBackAlert} from '../../utils/alert';
import {getWorks_getWorks_works} from '../../../__generated__/getWorks';
import {lastStayMainTab} from '../../apollo';
import {paymentText} from '../../utils/workUtils';

function MainContainer({
  route: {
    params: {state},
  },
}: any): JSX.Element {
  const navigation = useNavigation();
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  const routes = useNavigationState(state => state);

  const {loading, data, refetch} = useQuery(GET_WORKS, {
    variables: {
      state,
    },
  });

  const [setWorking] = useMutation(SET_WORKING, {
    onError: (error: any) => {
      if (error.message) {
        callBackAlert(error.message, () => {
          refetch();
        });
      }
    },
    onCompleted: () => {
      callBackAlert(I18n.t('Alert.common'), () => {
        refetch();
      });
    },
  });

  useFocusEffect(
    useCallback(() => {
      const currentRoute = routes.routeNames[routes.index];
      lastStayMainTab(currentRoute);
      refetch();
    }, [routes]),
  );

  const props = {
    loading,
    isRefreshing,
    onRefreshing: async () => {
      setIsRefreshing(true);
      await refetch();
      setIsRefreshing(false);
    },
    works: data?.getWorks?.works || [],
    goDetail: (item: getWorks_getWorks_works) => {
      navigation.navigate('WorkDetail', {state: item.state, id: item.id});
    },
    leftBtnPress: async (item: getWorks_getWorks_works) => {
      const {
        address: {postalCode, roadAddress, detail},
      }: any = item;
      Clipboard.setString(`(${postalCode}) ${roadAddress} ${detail}`);
      await Clipboard.getString();
      Toast.show(I18n.t('Alert.copy_address'));
    },
    rightBtnPress: (item: getWorks_getWorks_works) => {
      if (item.state === WorkState.WAIT) {
        const message = `${item.title} / ${
          item.workCategory.name
        } / ${paymentText(item.payment)}${I18n.t('Alert.accept')}`;
        callBackAlert(
          message,
          () => {
            setWorking({
              variables: {
                workId: item.id,
                state: WorkState.RESERVE,
              },
            });
          },
          true,
        );
      } else {
        Linking.openURL(`tel:${item.customer.phone}`);
      }
    },
    writeCaseBtnPress: (id: number) => {
      navigation.navigate('WorkCase', {id: id});
    },
  };
  return <MainPresenter {...props} />;
}

export default MainContainer;
