import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  makeVar,
} from '@apollo/client';
import {setToken, setUserAppId} from '../utils/storageUtils';
import {SERVER_URL} from '../utils/commonUtils';
import {createUploadLink} from 'apollo-upload-client';
import {setContext} from '@apollo/client/link/context';

export const tokenVar = makeVar<string | null>(null);
export const userVar = makeVar<any>(null);
export const categoryVar = makeVar<any>(null);

export const saveToken = async (token: string, phone: string) => {
  await setToken(token);
  tokenVar(token);
  await setUserAppId(phone);
};

export const removeToken = async () => {
  await setToken();
  tokenVar(null);
  userVar(null);
  await setUserAppId();
};

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
  // headers: {
  //   auth: tokenVar(),
  // },
  link: authLink.concat(httpLink),
  defaultOptions: {watchQuery: {fetchPolicy: 'cache-and-network'}},
});

export default client;
