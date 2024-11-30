# RN Video 鸿蒙系统适配演示

## 项目简介

本项目旨在演示 React Native 项目集成 [`react-native-video`](https://github.com/react-native-oh-library/react-native-video/tree/sig) 插件在鸿蒙系统(HarmonyOS)上的运行表现。由于目前鸿蒙系统相关的 RN SDK 未开源，本项目提供了一个可行的解决方案。

## 功能特性

- 完整展示 [`react-native-video`](https://github.com/react-native-oh-library/react-native-video/tree/sig) 在鸿蒙系统上的适配方案
- 提供视频播放基础功能演示
- 解决鸿蒙系统 RN SDK 不开源的相关问题

## 环境要求

- React Native >= 0.63.0
- react-native-video >= 5.0.0
- HarmonyOS 2.0 及以上
- Node.js >= 14.0.0
- Yarn

## 安装步骤

### 1. 克隆项目

```bash
git clone git@github.com:bozaigao/harmony_use_video.git
```


### 2. 项目根目录创建并进入 libs 目录

```bash  
cd harmony_use_video
mkdir libs
cd libs
```

### 3. 克隆依赖项目

克隆鸿蒙RN适配核心库
```bash
git clone git@github.com:bozaigao/rnoh.git
```

初始化相关C++子模块
```bash
cd rnoh
git submodule update --init --recursive
cd ..
```

### 4. 返回项目根目录并安装依赖

```bash
cd ..
yarn install
```

### 5. 开发模式：绑定端口启动Metro本地服务（首先确保Harmony模拟器已经启动运行）

```bash
hdc rport tcp:8081 tcp:8081
yarn start
```
[`hdc相关配置参考`](https://gitee.com/openharmony-sig/ohos_react_native/blob/0.72.5-ohos-5.0-release/docs/zh-cn/%E7%8E%AF%E5%A2%83%E6%90%AD%E5%BB%BA.md#%E5%88%9B%E5%BB%BAreact-native%E5%B7%A5%E7%A8%8B)

### 6. 生产模式：RN端打包js文件到reqources/rawfile目录

```bash
yarn dev
```

### 7. Sync然后运行项目

直接使用DevEco Studio打开harmony然后执行sync
最后点击run运行项目：
![image](./sync.png)

# Harmony运行效果图
![image](./demo.png)