import AsyncStorage from '@react-native-async-storage/async-storage';

const TOKEN = '@token';
const PHONE = '@phone';
const MASTER_ID = '@masterId';

export const getToken = async () => {
  return await AsyncStorage.getItem(TOKEN);
};

export const setToken = async (token?: string) => {
  if (token) {
    await AsyncStorage.setItem(TOKEN, token);
  } else {
    await AsyncStorage.removeItem(TOKEN);
  }
};

export const getUserAppId = async () => {
  return await AsyncStorage.getItem(PHONE);
};

export const setUserAppId = async (phone?: string) => {
  if (phone) {
    await AsyncStorage.setItem(PHONE, phone);
  } else {
    await AsyncStorage.removeItem(PHONE);
  }
};

export const getUserIdx = async () => {
  return Number(await AsyncStorage.getItem(MASTER_ID));
};

export const setUserIdx = async (masterId?: number) => {
  if (masterId) {
    await AsyncStorage.setItem(MASTER_ID, masterId.toString());
  } else {
    await AsyncStorage.removeItem(MASTER_ID);
  }
};
