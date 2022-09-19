# Npm Publish

## 如何指定需要发布文件？

- 存在 `.npmignore` 文件，以 `.npmignore` 文件为准，在文件中的内容都会被忽略，不会上传；即使有 `.gitignore`文件，也不会生效。
- 不存在 `.npmignore` 文件，以 `.gitignore` 文件为准，一般是无关内容，例如 `.vscode` 等环境配置相关的。
- 不存在 `.npmignore` 也不存在 `.gitignore`，所有文件都会上传。
- `package.json` 中存在 `files` 字段，可以理解为 `files` 为白名单。 -- <b style="color: #C2213C">优先级最高</b>


## Publish Action

```sh
# 先设置registry，防止登录和发布时报错
nrm use npm

# register
$ npm adduser
$ npm adduser --registry=http://registry.npmjs.org/

# login(还需要 OTP code 进行二次校验)
$ npm login --registry=http://registry.npmjs.org/

# logout
$ npm logout

# view current account
$ npm who am i

# publish
$ npm publish [--access=public]
```

# unpublish
$ npm unpublish [pkg]@[version]
```
