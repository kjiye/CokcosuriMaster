import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  makeVar,
} from '@apollo/client';

export const isLoggedInVar = makeVar(false);

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  // uri: 'http://192.168.1.249:4000/graphql',
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
  headers: {
    auth: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjI4MTQzNDc2fQ.w4PxhW0KtTjty7LlfXVdQhQp_YKE-5o0J53MqFRVow8',
  },
  defaultOptions: {watchQuery: {fetchPolicy: 'cache-and-network'}},
});

export default client;
