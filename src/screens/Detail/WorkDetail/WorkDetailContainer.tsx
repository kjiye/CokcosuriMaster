import {useMutation, useQuery} from '@apollo/client';
import Clipboard from '@react-native-community/clipboard';
import {GET_WORK_DETAIL} from '../detail.queries';
import I18n from '../../../utils/i18nHelpers';
import {Linking} from 'react-native';
import React from 'react';
import {SET_WORKING} from '../../Main/main.queries';
import Toast from 'react-native-simple-toast';
import WorkDetailPresenter from './WorkDetailPresenter';
import {WorkState} from '../../../../__generated__/globalTypes';
import {basicHeader} from '../../../components/Header/HeaderOption';
import {callBackAlert} from '../../../utils/alert';
import {getWorkDetail_getWorkDetail_work} from '../../../../__generated__/getWorkDetail';
import {useNavigation} from '@react-navigation/native';

function WorkDetailContainer({route}: any): JSX.Element {
  const navigation = useNavigation();

  const {loading, data} = useQuery(GET_WORK_DETAIL, {
    variables: {
      workId: route.params.id,
    },
    onCompleted: () => {
      navigation.setOptions(
        basicHeader({
          title: data.getWorkDetail.work.title,
        }),
      );
    },
  });

  const [setWorking] = useMutation(SET_WORKING, {
    onError: (error: any) => {
      callBackAlert(I18n.t('Error.common'), () => {
        return;
      });
    },
    onCompleted: () => {
      callBackAlert(
        I18n.t('Alert.common'),
        () => {
          navigation.goBack();
        },
        false,
      );
    },
  });

  const props = {
    loading,
    work: data?.getWorkDetail?.work,
    bottomBtnPress: (item: getWorkDetail_getWorkDetail_work) => {
      switch (item.state) {
        case WorkState.WAIT:
          callBackAlert(
            `${item.title} / ${item.workCategory.name} / ${
              item.payment ? I18n.t('pay_later') : I18n.t('pay_first')
            }${I18n.t('Alert.accept')}`,
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
          break;
        case WorkState.RESERVE:
          callBackAlert(
            I18n.t('WorkingBefore.before_ask'),
            () => {
              navigation.navigate('WorkingBefore', {workItem: item});
            },
            true,
          );
          break;
        case WorkState.WORKING:
          navigation.navigate('WorkingDone', {workItem: item});
          break;
      }
    },
    copyAddress: async (address: string) => {
      Clipboard.setString(address);
      await Clipboard.getString();
      Toast.show(I18n.t('Alert.copy_address'));
    },
    call: (phone: string) => {
      Linking.openURL(`tel:${phone}`);
    },
  };
  return <WorkDetailPresenter {...props} />;
}

export default WorkDetailContainer;
