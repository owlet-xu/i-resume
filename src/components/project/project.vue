<template>
  <div class="project">
    <IDialog :show.sync="show">
      <template v-slot:items>
       <div class="item-select" v-for="(item, index) in items" :key="index" @click="toLink(item)">
         {{item.name}}
       </div>
      </template>
    </IDialog>
    <header class="section-hd">
      <span class="section-title-l"></span>
      <h2 class="section-title" @click="showLinkSelect">个人项目</h2>
      <span class="section-title-r"></span>
    </header>
    <div class="section-bd">
      <!--项目:Vue-->
      <div class="item">
        <header class="item-hd">
          <span class="item-time">基于Vue的个人项目介绍</span>
          <a class="link-icon vue" href="https://cn.vuejs.org/index.html" target="view_window">
            <img src="../../assets/imgs/vue.svg" />
          </a>
        </header>
        <div class="item-bd">
          <ul class="section-content">
            <li><a @click="showLinkSelect('vue')">通用后台管理系统</a></li>
            <li>
              <a href="https://github.com/owlet-xu/qiqi-project/tree/master/qiqi-show-client" target="view_window">通用移动端解决方案</a>
            </li>
            <li><a href="http://121.196.145.103:31102" target="view_window">王者荣耀活动项目</a></li>
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
              <a href="https://github.com/owlet-xu/qiqi-project/tree/master/qiqi-service" target="view_window">
                集成jpa，简单易用，集成方便
              </a>
            </li>
            <li>
              <a href="https://github.com/owlet-xu/qiqi-project/tree/master/qiqi-service" target="view_window">
                实现了用户，部门，菜单，权限，基础商品图文等功能
              </a>
            </li>
            <li>
              <a href="https://github.com/owlet-xu/qiqi-project/tree/master/qiqi-service" target="view_window">
                WebApi，Contract，Services，backend合理架构
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!--项目:Electron-->
      <div class="item">
        <header class="item-hd">
          <span class="item-time">基于Electron封装的个人项目</span>
          <a class="link-icon electron" href="https://www.electronjs.org/" target="view_window">
            <img src="../../assets/imgs/electron.jpg" />
          </a>
        </header>
        <div class="item-bd">
          <ul class="section-content">
            <li><a href="https://github.com/owlet-xu/i-browser" target="view_window">基于Electron封装浏览器</a></li>
            <li>
              <a href="https://github.com/gwuhaolin/web-webpack-plugin">基于Electron封装文件处理小工具</a>
            </li>
          </ul>
        </div>
      </div>
      <!--项目:.net winform-->
      <div class="item">
        <header class="item-hd">
          <span class="item-time">基于Winform彩票分析工具</span>
          <a class="link-icon microsoft" href="https://github.com/owlet-xu/MyWinform/tree/develop/SSQ" target="view_window">
            <img src="../../assets/imgs/microsoft.jpg" />
          </a>
        </header>
        <div class="item-bd">
          <ul class="section-content">
            <li>
              <a href="https://github.com/owlet-xu/MyWinform/tree/develop/SSQ" target="view_window">小型数据库mdb使用</a>
            </li>
            <li>
              <a href="https://github.com/owlet-xu/MyWinform/tree/develop/SSQ" target="view_window">excel导入功能</a>
            </li>
            <li>
              <a href="https://github.com/owlet-xu/MyWinform/tree/develop/SSQ" target="view_window">彩票分析算法</a>
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
              <a href="https://github.com/owlet-xu/video-look" target="view_window">支持国际化切换</a>
            </li>
            <li>
              <a href="https://github.com/owlet-xu/video-look" target="view_window">生成视频文件预览视频</a>
            </li>
            <li>
              <a href="https://github.com/owlet-xu/video-look" target="view_window">匹配字幕文件</a>
            </li>
            <li>
              <a href="https://github.com/owlet-xu/video-look" target="view_window">搜索文件夹功能</a>
            </li>
            <li>
              <a href="https://github.com/owlet-xu/video-look" target="view_window">移动文件夹功能</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./project.ts"></script>
<style lang="scss" scoped src="./project.scss"></style>