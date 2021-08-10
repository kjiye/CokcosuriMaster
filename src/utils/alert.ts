import {Alert} from 'react-native';
import I18n from '../../src/utils/i18nHelpers';

export const callBackAlert = (
  message: string,
  okPress: () => void,
  isCancel?: boolean,
  title?: string,
): any => {
  let option: any = [
    {
      text: I18n.t('ok'),
      onPress: () => {
        okPress();
      },
    },
  ];
  if (isCancel) {
    option = [
      ...option,
      {
        text: I18n.t('cancel'),
        onPress: () => {
          return;
        },
        style: 'cancel',
      },
    ];
  }
  return Alert.alert(title ? title : '', message, option);
  // return Alert.alert(title ? title : '', message, [
  //   {
  //     text: I18n.t('ok'),
  //     onPress: () => {
  //       okPress();
  //     },
  //   },
  //   isCancel
  //     ? {
  //         text: I18n.t('cancel'),
  //         onPress: () => {
  //           return;
  //         },
  //         style: 'cancel',
  //       }
  //     : {},
  // ]);
};
