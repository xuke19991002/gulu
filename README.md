# 使用 vue2.0 学习如何造轮子

使用 parcel 打包 vue 单文件

```
插件：
  npm i -g git-open 帮助我们快速打开远程仓库地址
```

# 测试 button 组件

```
安装依赖包：
  npm i chai -D
  npm i chai-spies
```

# 使用 Karma + Mocha 做单元测试

1. Karma 是一个测试运行器，他可以呼起浏览器，加载测试脚本，然后运行测试用例
2. Mocha 是一个单元测试框架/库，他可以用来写测试用例
3. Sinon 是一个 spy/stub/mock 库，用以辅助测试

## 步骤

1. 安装测试工具
   `npm i -D karma karma-chrome-launcher karma-mocha karma-sinon-chai mocha sinon sinon-chai karma-chai karma-chai-spies`
2. 设置配置文件
   > 配置 package.json

```
{
  "scripts": {
    "dev-test": "parcel watch test/* --no-cache & karma start",
    //
    "test": "parcel build test/* --no-minify && karma start --single-run"
  }
}
```
