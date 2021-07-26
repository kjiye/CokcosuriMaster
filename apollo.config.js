module.exports = {
  client: {
    includes: ['./src/**/*.{ts,tsx}'],
    tagName: 'gql',
    service: {
      name: 'cokcosuri_api',
      url: 'http://192.168.1.249:4000/graphql',
    },
  },
};
