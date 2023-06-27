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

1. run `yarn generate`, you won't get any error.
1. see "src/gql/graphql.ts" and you will find `ValidUpdateUserDocument` but not `InvalidUpdateUserDocument`

## with `noSilentErrors`

1. add `"useSilentErrors": true` in codegen.ts. Then, you will see a type error.
1. run `yarn generate`, you will see an error.
