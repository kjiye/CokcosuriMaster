import React, {useState} from 'react';
import I18n from '../../../utils/i18nHelpers';
import {Image} from 'react-native-image-crop-picker';
import {SET_WORKING_CANCEL} from './workingImpossible.queries';
import {WorkState} from '../../../../__generated__/globalTypes';
import WorkingImpossiblePresenter from './WorkingImpossiblePresenter';
import {callBackAlert} from '../../../utils/alert';
import {inventActionModal} from '../../../utils/modalUtils';
import {uploadImageFormatting} from '../../../utils/commonUtils';
import {useMutation} from '@apollo/client';
import {useNavigation} from '@react-navigation/native';

function WorkingImpossibleContainer({route}: any): JSX.Element {
  const navigation = useNavigation();
  const [reason, setReason] = useState<string>('');
  const [images, setImages] = useState<Image[]>([]);

  const [updateWorkingImpossible] = useMutation(SET_WORKING_CANCEL, {
    onError: (error: any) => {
      inventActionModal(navigation, {isShow: false});
      callBackAlert(I18n.t('Error.common'), () => {
        return;
      });
    },
    onCompleted: () => {
      inventActionModal(navigation, {isShow: false});
      callBackAlert(
        I18n.t('Alert.common'),
        () => {
          navigation.navigate('MainTab');
        },
        false,
      );
    },
  });

  const props = {
    item: route.params?.workItem,
    reason,
    imageTotal: images.length,
    onChangeReason: (text: string) => {
      setReason(text);
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
      callBackAlert(
        I18n.t('WorkingImpossible.impossible_ask'),
        () => {
          inventActionModal(navigation, {isShow: true});
          const fileArr = images.map(file => uploadImageFormatting(file));
          updateWorkingImpossible({
            variables: {
              workId: route.params.workItem.id,
              state: WorkState.CANCEL,
              cancelReason: reason,
              files: fileArr,
            },
          });
        },
        true,
      );
    },
  };
  return <WorkingImpossiblePresenter {...props} />;
}

export default WorkingImpossibleContainer;
