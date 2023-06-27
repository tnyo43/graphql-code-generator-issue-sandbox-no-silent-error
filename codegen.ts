import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'schema.graphql',
  documents: ['document.graphql', 'src/*.ts'],
  generates: {
    'src/gql/': {
      preset: 'client',
      plugins: []
    }
  }
};

export default config;
