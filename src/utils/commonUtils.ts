import {Linking, Platform} from 'react-native';
import AndroidOpenSettings from 'react-native-android-open-settings';
import {Image} from 'react-native-image-crop-picker';
import {ReactNativeFile} from 'apollo-upload-client';
import {RegexType} from '../models/common';
import dayjs from 'dayjs';
import {getWorkDetail_getWorkDetail_work_customer_address_coordinate} from '../../__generated__/getWorkDetail';

// export const SERVER_URL = 'http://211.110.229.85:4000/graphql';
export const SERVER_URL = 'http://192.168.1.249:4000/graphql';
// export const SERVER_URL = 'http://localhost:4000/graphql';
// export const SERVER_URL = 'http://192.168.1.245:4000/graphql';
// export const SERVER_URL = 'http://10.80.102.81:4000/graphql';
export const IMG_URL = SERVER_URL.slice(0, SERVER_URL.lastIndexOf('/'));

const regexPattern = (type: RegexType) => {
  switch (type) {
    case 'email':
      return /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    case 'password':
      // return /^[A-za-z0-9+]{6,}$/;
      return /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,}$/;
    case 'phone':
      return /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{3,4}$/;
    case 'licenseNo':
      return /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  }
};

export const checkRegex = (type: RegexType, value: string): boolean => {
  return new RegExp(regexPattern(type), 'g').test(value) || false;
};

export const dateFormatting = (dateTime: string, isTime?: boolean) => {
  const format = isTime ? 'A HH시 mm분' : 'YYYY.MM.DD';
  return dayjs(parseInt(dateTime, 10)).format(format);
};

export const setImageUrl = (path: string | null) => {
  return path !== null
    ? {uri: IMG_URL + path}
    : require('../../assets/image/default.png');
};

export const coordsFormatting = (
  coords: getWorkDetail_getWorkDetail_work_customer_address_coordinate,
) => {
  return {
    latitude: parseFloat(coords.lat),
    longitude: parseFloat(coords.lon),
  };
};

export const uploadImageFormatting = (image: Image) => {
  return new ReactNativeFile({
    // uri: (Platform.OS === 'ios' ? image.sourceURL : image.path) || '',
    uri: image?.sourceURL ? image.sourceURL : image.path,
    name: image?.filename
      ? image.filename
      : image.path.substring(image.path.lastIndexOf('/') + 1),
    type: image.mime,
  });
};

export const networkSetting = () => {
  if (Platform.OS === 'ios') {
    Linking.openURL('App-Prefs:root');
  } else {
    AndroidOpenSettings.wirelessSettings();
  }
};
