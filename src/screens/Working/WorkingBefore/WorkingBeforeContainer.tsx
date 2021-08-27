import React, {useLayoutEffect, useState} from 'react';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import I18n from '../../../utils/i18nHelpers';
import {Image} from 'react-native-image-crop-picker';
import {SET_WORKING_BEFORE} from './workingBefore.queries';
import {WorkState} from '../../../../__generated__/globalTypes';
import WorkingBeforePresenter from './WorkingBeforePresenter';
import {basicHeader} from '../../../components/Header/HeaderOption';
import {callBackAlert} from '../../../utils/alert';
import {uploadImageFormatting} from '../../../utils/commonUtils';
import {useMutation} from '@apollo/client';
import {useTheme} from 'styled-components/native';

function WorkingBeforeContainer({route}: any): JSX.Element {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const theme: any = useTheme();
  const [images, setImages] = useState<Image[]>([]);

  useLayoutEffect(() => {
    if (navigation && isFocused) {
      navigation.setOptions(
        basicHeader({
          title: I18n.t('Header.working'),
          isRight: true,
          buttonType: 'text',
          buttonText: I18n.t('Header.button.working_impossible'),
          buttonTextColor: theme.colors.grey[5],
          buttonPress: () => {
            navigation.navigate('WorkingImpossible', {
              workItem: route.params.workItem,
            });
          },
        }),
      );
    }
  }, [navigation, isFocused]);

  const [updateWorkingBefore, {loading}] = useMutation(SET_WORKING_BEFORE, {
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

  const props = {
    item: route.params?.workItem,
    total: images.length,
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
      if (!loading) {
        updateWorkingBefore({
          variables: {
            workId: route.params.workItem.id,
            state: WorkState.WORKING,
            files: fileArr,
          },
        });
      }
    },
  };
  return <WorkingBeforePresenter {...props} />;
}

export default WorkingBeforeContainer;
