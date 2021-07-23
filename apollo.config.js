module.exports = {
  client: {
    includes: ['./src/**/*.{ts,tsx}'],
    tagName: 'gql',
    service: {
      name: 'cokcosuri_api',
      url: 'http://localhost:4000/graphql',
    },
  },
};
