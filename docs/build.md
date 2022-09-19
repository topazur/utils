## Build

> esbuild: <br />
> [rollup](https://www.rollupjs.com/) <br />
> [pkgroll](https://www.npmjs.com/package/pkgroll)

```sh
# { "postinstall": "nr build" }

# { "build": "rollup -c" }
# echo "export default []" >> rollup.config.js
$ ni rollup esbuild rollup-plugin-esbuild rollup-plugin-dts @rollup/plugin-node-resolve @rollup/plugin-commonjs @rollup/plugin-json @rollup/plugin-alias -D

# { "build:pkgroll": "pkgroll --minify" }
$ ni pkgroll -D

# { "start": "esno src/index.ts" } ???
$ ni esno -D

# { "typecheck": "tsc --noEmit" } 类型校验
$ ni typescript -D
```
