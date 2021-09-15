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

  const [firstImage, setFirstImage] = useState<Image>();
  const [secondImage, setSecondImage] = useState<Image>();
  const [thirdImage, setThirdImage] = useState<Image>();

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
    // total: images.length,
    btnDisabled: !(firstImage && secondImage && thirdImage),
    images,
    firstImage,
    secondImage,
    thirdImage,
    goPayment: () => {
      navigation.navigate('Payment', {workItem: data?.getWorkDetail?.work});
    },
    // addImage: (image: Image) => {
    //   setImages(s => [...s, image]);
    // },
    addFirstImage: (image: Image) => {
      setFirstImage(image);
    },
    addSecondImage: (image: Image) => {
      setSecondImage(image);
    },
    addThirdImage: (image: Image) => {
      setThirdImage(image);
    },
    deleteFirstImage: () => {
      setFirstImage(undefined);
    },
    deleteSecondImage: () => {
      setSecondImage(undefined);
    },
    deleteThirdImage: () => {
      setThirdImage(undefined);
    },
    deleteImage: (index: number) => {
      setImages(s => {
        const arr: Image[] = s;
        arr.splice(index, 1);
        return [...arr];
      });
    },
    okPress: () => {
      const imageArr: any[] = [
        {...firstImage},
        {...secondImage},
        {...thirdImage},
      ];
      const fileArr = imageArr.map(file => uploadImageFormatting(file));
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
