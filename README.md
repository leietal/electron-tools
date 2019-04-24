### 骑轨

**electron文档：**[https://electronjs.org/docs](https://electronjs.org/docs)

**高德地图文档：**[http://lbs.amap.com/](http://lbs.amap.com/)

**electron各种资料**[https://github.com/sindresorhus/awesome-electron.git](https://github.com/sindresorhus/awesome-electron.git)


## 使用说明

1. 进入项目目录
```
cd qiji
```

2. 安装依赖
```
cnpm install
```

3. 运行项目
```
npm run start
```

4. 打包项目
```
// 安装打包工具
npm install electron-builder -g

// 全局安装 asar （用于将源码打包成二进制文件）
npm install asar -g

// 执行打包，这里打包的是 windows x64，详细内容请查看 package.json
npm run dist
```
