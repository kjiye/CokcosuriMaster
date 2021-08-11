import AsyncStorage from '@react-native-async-storage/async-storage';

const TOKEN = '@token';

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
