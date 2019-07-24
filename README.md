# react-todolist
使用react实现一个简单的todolist，分了4个版块学习react基础，

为方便练习，各基础知识模块，代码已分别放入不同的文件夹中

### 01-react基础

- **01-basics-todolist**
  - 实现TodoList新增删除功能
  - 拆分组件与组件之间的传值

### 02-react高级基础

- **02-lifecycle-todolist**
  - PropTypes与DefaultProps的应用
  - React的生命周期函数
- **02-animation-todolist**
  - React中实现CSS过渡动画
  - React中使用CSS动画效果
  - 使用react-transition-group实现动画
  - 使用react-transition-group实现多元素动画

### 03-Redux入门

- **03-redux-todolist**
  - Redux的工作流程
  - 使用Antd实现TodoList页面布局
  - 创建redux中的store
  - Action和Reducer的编写
  - 使用Redux完成TodoList删除功能
  - ActionTypes的拆分
  - 使用actionCreator统一创建action

### 04-Redux进阶（3个文件夹）

- UI组件和容器组件的拆分

- 无状态组件

- Redux-thunk中间件的使用

-  Redux-saga中间件使用

-  React-redux 的使用


### 项目执行
####  1、将项目克隆到本地，cd到react-todolist
```javascript
git clone https://github.com/shanruopeng/react-todolist.git
cd react-todolist
# cd 进入各文件夹
如：cd 01-basics-todolist
```
#### 2、安装依赖
```javascript
npm install 或 yarn install
```
#### 3、执行
```javascript
npm run start 或 yarn start
// npm run build(打包)
```
#### 4、打开浏览器浏览 http://localhost:3000/

Tips：在安装node-sass的时候，有可能不成功，如不成功，请先删除 node_modules ，然后将镜像源换成taobao的，再执行npm install 或 yarn install；
* 删除 node_modules
```javascript
rd/s/q node_modules
```
* 切换淘宝镜像源
```bash
npm config set registry http://registry.npm.taobao.org
或
yarn config set registry http://registry.npm.taobao.org
```
* 再安装依赖
```bash
npm install
yarn 或 yarn install
```
也可以单独为node-sass设置淘宝的二进制包镜像
```bash
npm config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass -g
或
yarn config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass -g
```