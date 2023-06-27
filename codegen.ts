import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  /** If you remove `noSilentErrors` option, you will see the command `npm codegen` fails silently */
  // noSilentErrors: true,
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
