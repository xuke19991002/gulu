# 轱辘 - 一个 Vue UI 组件
[![Build Status](https://travis-ci.org/xuke19991002/gulu.svg?branch=master)](https://travis-ci.org/xuke19991002/gulu)

## 介绍

## 开始使用
1. 添加 css 样式 使用本框架前，请在 CSS 中开启 border-box
  ```
  *，*::before，*::after{box-sizing: boeder-box;}
  ```

  ```
  IE 8 及以上浏览器都支持此样式
  你还需要设置默认颜色等变量（后续会改为 css 变量）
  ```

  ```
  html {
    --button-height: 32px;
    --font-size: 14px;
    --button-bg: white;
    --button-active-bg: #eee;
    --border-raduis: 4px;
    --color: #999;
    --border-color: #999;
    --border-color-hover: #666;
  }
  ```
  IE 15 及以上浏览器都支持该样式

2. 安装 xk-vue-gulu
  ```
  npm i xk-vue-gulu --save 
  ```

3. 引入 xk-vue-gulu
  ```
  import {Button, ButtonGroup, Icon} from 'xk-vue-gulu'
  import 'xk-vue-gulu/dist/index.css'

  export default {
    name: 'app',
    components: {
      'g-button': Button,
      'g-icon': Icon
    }
  }
  ```

4. 引入 svg symbols
  ```
  <script src="//at.alicdn.com/t/font_2034591_7bcmcch3hri.js"></script>
  ```

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码

```

```

```
