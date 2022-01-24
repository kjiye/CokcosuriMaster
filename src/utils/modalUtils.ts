import {NavigationProp} from '@react-navigation/native';

/**
 * 모달 함수 호출
 */

export const inventActionModal = (
  navigation: NavigationProp<Record<string, object | undefined>>,
  params: {
    isShow: boolean;
  },
) => navigation.navigate('InventActionModal', params);
