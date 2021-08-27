import {
  PERMISSIONS,
  Permission,
  check,
  checkMultiple,
  request,
  requestMultiple,
} from 'react-native-permissions';
import {Platform} from 'react-native';

export type PERMISSION_STATUS =
  | 'unavailable'
  | 'denied'
  | 'blocked'
  | 'granted'
  | undefined;

export type APP_PERMISSION = {
  ios: Permission[];
  android: Permission[];
  macos: Permission[];
  windows: Permission[];
  web: Permission[];
  native: Permission[];
};

export const APP_ALL_PERMISSION_LIST: APP_PERMISSION = {
  ios: [PERMISSIONS.IOS.CAMERA, PERMISSIONS.IOS.PHOTO_LIBRARY],
  android: [
    PERMISSIONS.ANDROID.CAMERA,
    PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
    PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
  ],
  macos: [],
  windows: [],
  web: [],
  native: [],
};

export const CAMERA_PERMISSION: APP_PERMISSION = {
  ios: [PERMISSIONS.IOS.CAMERA],
  android: [PERMISSIONS.ANDROID.CAMERA],
  macos: [],
  windows: [],
  web: [],
  native: [],
};

export const GALLERY_PERMISSION: APP_PERMISSION = {
  ios: [PERMISSIONS.IOS.PHOTO_LIBRARY],
  android: [
    PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
    PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
  ],
  macos: [],
  windows: [],
  web: [],
  native: [],
};

export const checkMultiplePermissions = async (permissions: APP_PERMISSION) => {
  return await checkMultiple(permissions[Platform.OS]);
};

export const checkPermission = async (permission: Permission) => {
  return await check(permission);
};

export const requestMultiplePermissions = async (permissions: Permission[]) => {
  return await requestMultiple(permissions);
};

export const requestPermission = async (permission: Permission) => {
  return await request(permission);
};

export const initCheckPermissions = async () => {
  const result = await checkMultiplePermissions(APP_ALL_PERMISSION_LIST);
  const check = APP_ALL_PERMISSION_LIST[Platform.OS].filter(
    v => result[v] !== 'granted',
  );
  return check.length > 0 ? false : true;
};
