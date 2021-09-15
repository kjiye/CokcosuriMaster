import {DELETE_ALARM, GET_ALARM} from './alarm.queries';
import React, {useState} from 'react';
import {useMutation, useQuery} from '@apollo/client';
import AlarmPresenter from './AlarmPresenter';
import I18n from '../../utils/i18nHelpers';
import {basicHeader} from '../../components/Header/HeaderOption';
import {callBackAlert} from '../../utils/alert';
import {useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from 'styled-components';

function AlarmContainer(): JSX.Element {
  const navigation = useNavigation();
  const theme: any = useTheme();

  const [isDelete, setIsDelete] = useState<boolean>(false);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  useLayoutEffect(() => {
    navigation.setOptions(
      basicHeader({
        title: I18n.t('Header.alarm'),
        isRight: true,
        buttonType: 'text',
        buttonText: isDelete
          ? I18n.t('Header.button.view_list')
          : I18n.t('Header.button.delete_alarm'),
        buttonTextColor: theme.colors.black[1],
        buttonPress: () => {
          setIsDelete(!isDelete);
        },
      }),
    );
  }, [isDelete]);

  const {loading, data, refetch} = useQuery(GET_ALARM);

  const [deleteAlarm] = useMutation(DELETE_ALARM, {
    onError: (error: any) => {
      callBackAlert(I18n.t('Error.common'), () => {
        return;
      });
    },
    onCompleted: () => {
      refetch();
    },
  });

  const props = {
    loading,
    isDelete,
    isRefreshing,
    alarm: data?.getAlarm?.alarm,
    onRefreshing: async () => {
      setIsRefreshing(true);
      await refetch();
      setIsRefreshing(false);
    },
    onDelete: (requestId: string) => {
      deleteAlarm({
        variables: {
          alarmIds: [requestId],
        },
      });
    },
    onDeleteAll: () => {
      const {
        getAlarm: {alarm},
      } = data;
      const idArr: number[] = alarm.map((v: any) => v.requestId);
      if (idArr.length > 0) {
        deleteAlarm({
          variables: {
            alarmIds: idArr,
          },
        });
      } else {
        callBackAlert(I18n.t('Alarm.no_delete_data'), () => {
          return;
        });
      }
    },
  };

  return <AlarmPresenter {...props} />;
}

export default AlarmContainer;
