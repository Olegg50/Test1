We have a library called "str-utils", bad thing is that it lacks TypeScript declarations.

Provide type declaration for that module in `declarations/str-utils.d.ts`
Check str-utils module implementation at:
* `node_modules/str-utils/index.js`
* `node_modules/str-utils/README.md`

Try to avoid duplicates of type declarations, use type aliases.

Tips:
Visit [this page](https://www.typescriptlang.org/docs/handbook/modules.html#ambient-modules) to get the information about module declaration files.