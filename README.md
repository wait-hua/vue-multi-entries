# Vue多页面打包

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

```
浏览器中打开：
- localhost:8080 : 入口一个单页面的后台管理页面
- localhost:8080/more.html : 入口二页面
- localhost:8080/two.html : 入口三页面

## 页面入口文件
src/view/ 下每个文件夹的.hbs都是入口文件（除去config目录下为handerbars模板文件），命名规则为：
``` bash
|-page
|--page.hbs
|--page.js
|--page.vue
```

## 支持功能

- 多入口页面打包
- handerbars模板文件
- 雪碧图合成
- sass 引用资源别名配置
