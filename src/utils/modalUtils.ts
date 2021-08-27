import {NavigationProp} from '@react-navigation/native';

export const inventActionModal = (
  navigation: NavigationProp<Record<string, object | undefined>>,
  params: {
    isShow: boolean;
  },
) => navigation.navigate('InventActionModal', params);
