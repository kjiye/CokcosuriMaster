import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  makeVar,
} from '@apollo/client';
import {setToken, setUserAppId, setUserIdx} from '../utils/storageUtils';
import {SERVER_URL} from '../utils/commonUtils';
import {createUploadLink} from 'apollo-upload-client';
import {setContext} from '@apollo/client/link/context';

export const tokenVar = makeVar<string | null>(null);
export const userVar = makeVar<any>(null);
export const categoryVar = makeVar<any>(null);
export const sendPushTokenVar = makeVar<boolean>(false);
export const lastStayMainTab = makeVar<string>('WaitScreen');

/**
 * storage 호출 함수
 */

export const saveToken = async (
  token: string,
  phone: string,
  masterId: number,
) => {
  await setToken(token);
  tokenVar(token);
  await setUserAppId(phone);
  await setUserIdx(masterId);
};

export const removeToken = async () => {
  await setToken();
  tokenVar(null);
  userVar(null);
  lastStayMainTab('WaitScreen');
  await setUserAppId();
  await setUserIdx();
};

/**
 * apollo-client 설정
 */

const httpLink = createUploadLink({
  uri: SERVER_URL,
});

const authLink = setContext((_, {headers}) => {
  return {
    headers: {
      ...headers,
      auth: tokenVar(),
    },
  };
});

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  uri: SERVER_URL,
  cache: new InMemoryCache({
    addTypename: false,
  }),
  link: authLink.concat(httpLink),
  defaultOptions: {watchQuery: {fetchPolicy: 'cache-and-network'}},
});

export default client;
