import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  makeVar,
} from '@apollo/client';

export const isLoggedInVar = makeVar(false);

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  uri: 'http://192.168.1.249:4000/graphql',
  cache: new InMemoryCache(),
  defaultOptions: {watchQuery: {fetchPolicy: 'cache-and-network'}},
});

export default client;
