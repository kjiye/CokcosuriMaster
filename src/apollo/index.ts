import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  createHttpLink,
  makeVar,
} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import {setToken} from '../utils/storageUtils';

export const tokenVar = makeVar<string | null>(null);
export const userVar = makeVar<any>(null);

export const saveToken = async (token: string) => {
  await setToken(token);
  tokenVar(token);
};

export const removeToken = async () => {
  await setToken();
  tokenVar(null);
  userVar(null);
};

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql',
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
  // uri: 'http://192.168.1.249:4000/graphql',
  // uri: 'http://localhost:4000/graphql',
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  defaultOptions: {watchQuery: {fetchPolicy: 'cache-and-network'}},
});

export default client;
