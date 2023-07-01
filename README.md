# `graphql-code-generator` Codesandbox with `noSilentErrors` option

This is a reproduction that I got a type error with using `noSilentErrors` option in codegen.ts.
The `noSilentErrors` option actually works, but we get a type error when we use it in codegen.ts.

# content

- codegen.ts
- src/validDocument.ts - including a valid document.
- src/invalidDocument.ts - including a invalid document, which have no response property.
- src/gql/ - generated code by `yarn generate`

# preparation

```
$ yarn install
```

# run

## without `noSilentErrors`

1. see "src/gql/graphql.ts" and you will find `ValidUpdateUserDocument` but not `InvalidUpdateUserDocument`
1. run `yarn generate`, you won't get any error.

the result
```
% yarn generate
yarn run v1.22.19
$ yarn codegen
$ graphql-codegen --config ./codegen.ts
✔ Parse Configuration
✔ Generate outputs
✨  Done in 1.94s.
```

## with `noSilentErrors`

1. add `"useSilentErrors": true` in codegen.ts. Then, you will see a type error.
1. run `yarn generate`, you will see an error.

the result. An error is raised, which means the `noSilentErrors` option works properly.

```
% yarn generate
yarn run v1.22.19
$ yarn codegen
$ graphql-codegen --config ./codegen.ts
✔ Parse Configuration
⚠ Generate outputs
  ❯ Generate to src/gql/
    ✔ Load GraphQL schemas
    ✖ Syntax Error: Expected Name, found "}".
    ◼ Generate
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```