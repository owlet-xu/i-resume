<template>
  <div class="project">
    <header class="section-hd">
      <span class="section-title-l"></span>
      <h2 class="section-title">个人项目</h2>
      <span class="section-title-r"></span>
    </header>
    <div class="section-bd">
      <!--项目:Vue-->
      <div class="item">
        <header class="item-hd">
          <span class="item-time">基于Vue的后台管理系统</span>
          <a class="link-icon vue" href="https://cn.vuejs.org/index.html" target="view_window">
            <img src="../../assets/imgs/vue.svg" />
          </a>
        </header>
        <div class="item-bd">
          <ul class="section-content">
            <li><a href="https://github.com/gwuhaolin/reflv">基于flv的React播放器组件</a></li>
            <li><a href="https://github.com/imweb/redemo">快速生成React组件Demo</a></li>
            <li>
              <a href="https://www.ibm.com/developerworks/cn/web/wa-universal-react-native/index.html">React Native 三端同构实战</a> 文章
            </li>
          </ul>
        </div>
      </div>
      <!--项目:Springboot-->
      <div class="item">
        <header class="item-hd">
          <span class="item-time">基于Springboot后台服务</span>
          <a class="link-icon spring" href="https://spring.io/projects/spring-boot" target="view_window">
            <img src="../../assets/imgs/spring.jpg" />
          </a>
        </header>
        <div class="item-bd">
          <ul class="section-content">
            <li>
              <a href="https://github.com/gwuhaolin/lightsocks">lightsocks</a>
              高性能轻量级socks5网络混淆代理，可翻越GFW
            </li>
            <li>
              <a href="https://dy.wuhaolin.cn/">DY电影</a>
              海量免费电影小站，golang实现服务、爬虫、机器学习，RN实现多平台前端
            </li>
            <li>
              <a href="https://github.com/gwuhaolin/livego">livego</a>
              纯go写的直播服务端
            </li>
          </ul>
        </div>
      </div>
      <!--项目:Electron-->
      <div class="item">
        <header class="item-hd">
          <span class="item-time">基于Electron封装的浏览器</span>
          <a class="link-icon electron" href="https://www.electronjs.org/" target="view_window">
            <img src="../../assets/imgs/electron.jpg" />
          </a>
        </header>
        <div class="item-bd">
          <ul class="section-content">
            <li>出版图书<a href="http://webpack.wuhaolin.cn/">《深入浅出 Webpack》</a></li>
            <li>
              <a href="https://github.com/gwuhaolin/web-webpack-plugin">web-webpack-plugin</a>
              Webpack Plugin，可方便的生成HTML与注入资源
            </li>
            <li>
              <a href="https://github.com/gwuhaolin/web-webpack-plugin">ui-component-loader</a>
              Webpack Loader，可按需加载各种UI组件库
            </li>
            <li>文章 <a href="https://github.com/gwuhaolin/blog/issues/4">webpack原理与实战</a></li>
            <li>文章 <a href="https://github.com/gwuhaolin/blog/issues/2">webpack2 终极优化</a></li>
          </ul>
        </div>
      </div>
      <!--项目:.net winform-->
      <div class="item">
        <header class="item-hd">
          <span class="item-time">基于Winform彩票分析工具</span>
          <a class="link-icon microsoft" href="https://dotnet.microsoft.com/" target="view_window">
            <img src="../../assets/imgs/microsoft.jpg" />
          </a>
        </header>
        <div class="item-bd">
          <ul class="section-content">
            <li>
              <a href="https://github.com/gwuhaolin/lightsocks">lightsocks</a>
              高性能轻量级socks5网络混淆代理，可翻越GFW
            </li>
            <li>
              <a href="https://dy.wuhaolin.cn/">DY电影</a>
              海量免费电影小站，golang实现服务、爬虫、机器学习，RN实现多平台前端
            </li>
            <li>
              <a href="https://github.com/gwuhaolin/livego">livego</a>
              纯go写的直播服务端
            </li>
          </ul>
        </div>
      </div>
      <!--项目:Nodejs-->
      <div class="item">
        <header class="item-hd">
          <span class="item-time">基于Nodejs的文件查找小工具</span>
          <a class="link-icon nodejs" href="https://nodejs.org" target="view_window">
            <img src="../../assets/imgs/nodejs.jpg" />
          </a>
        </header>
        <div class="item-bd">
          <ul class="section-content">
            <li>
              <a href="https://github.com/gwuhaolin/chrome-render">chrome-render</a>
              基于headless-chrome的通用服务端渲染方案
            </li>
            <li>
              <a href="https://github.com/gwuhaolin/koa-seo">koa-seo</a>
              无侵入式SEO单页应用方案，koa中间件
            </li>
            <li>
              <a href="https://github.com/gwuhaolin/direct-alipay">direct-alipay</a>
              支付宝支付服务Nodejs包
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./project.ts"></script>
<style lang="scss" scoped src="./project.scss"></style>