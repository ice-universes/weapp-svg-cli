# weapp-svg-cli

## 灵感来源

1. [iconfont-tools](https://github.com/HuaRongSAO/iconfont-tools)

2. [mini-program-iconfont-cli](https://github.com/iconfont-cli/mini-program-iconfont-cli)

这两个项目都是通过 axios 请求获取 iconfont 的 symbol.js 文件, 然后使用正则获取里面的 svg 字符串, 但是考虑到每次修改 svg 文件都要去更新 iconfont 然后 symbol.js 也会更新, 这样过于麻烦, 能不能直接在本地运行 npm 命令然后就直接根据本地的 svg 文件来生成小程序组件呢, 因此就参考这两个项目做了一个小程序的 svg-cli ( •̀ ω •́ )✧


## 使用

### 生成配置文件

```bash
ice--init
```

### 生成小程序组件

```bash
ice--generate
```

### 获取帮助

```bash
ice--help
```

## 本地测试

```bash
npm run build
```

```bash
npm link
```