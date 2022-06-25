import {ApolloClient, InMemoryCache} from '@apollo/client';
export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4qw6v7u08e301wgfknb0slz/master',
  cache: new InMemoryCache()
});