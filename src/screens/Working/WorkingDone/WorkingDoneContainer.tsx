import {GET_WORK_DONE_DETAIL, SET_WORKING_DONE} from './workingDone.queries';
import React, {useCallback, useState} from 'react';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {useMutation, useQuery} from '@apollo/client';
import I18n from '../../../utils/i18nHelpers';
import {Image} from 'react-native-image-crop-picker';
import {WorkState} from '../../../../__generated__/globalTypes';
import WorkingDonePresenter from './WorkingDonePresenter';
import {callBackAlert} from '../../../utils/alert';
import {uploadImageFormatting} from '../../../utils/commonUtils';

function WorkingDoneContainer({route}: any): JSX.Element {
  const navigation = useNavigation();
  const [images, setImages] = useState<Image[]>([]);

  const {loading, data, refetch} = useQuery(GET_WORK_DONE_DETAIL, {
    variables: {
      workId: route.params.workItem.id,
    },
  });

  const [updateWorkingDone] = useMutation(SET_WORKING_DONE, {
    onError: (error: any) => {
      callBackAlert(I18n.t('Error.common'), () => {
        return;
      });
    },
    onCompleted: (data: any) => {
      callBackAlert(
        I18n.t('Alert.common'),
        () => {
          navigation.navigate('MainTab');
        },
        false,
      );
    },
  });

  useFocusEffect(
    useCallback(() => {
      refetch();
    }, []),
  );

  const props = {
    loading,
    item: data?.getWorkDetail?.work,
    total: images.length,
    images,
    goPayment: () => {
      navigation.navigate('Payment', {workItem: data?.getWorkDetail?.work});
    },
    addImage: (image: Image) => {
      setImages(s => [...s, image]);
    },
    deleteImage: (index: number) => {
      setImages(s => {
        const arr: Image[] = s;
        arr.splice(index, 1);
        return [...arr];
      });
    },
    okPress: () => {
      const fileArr = images.map(file => uploadImageFormatting(file));
      updateWorkingDone({
        variables: {
          workId: data.getWorkDetail.work.id,
          state: WorkState.DONE,
          files: fileArr,
        },
      });
    },
  };
  return <WorkingDonePresenter {...props} />;
}

export default WorkingDoneContainer;
