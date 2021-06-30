<template>
  <div class="project">
    <IDialog :show.sync="show" :title="'请选择链接地址'">
      <template v-slot:items>
        <div class="item-select" v-for="(item, index) in items" :key="index" @click="toLink(item)">
          {{ item.name }}
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
            <li><a @click="showLinkSelect('resume')">个人在线简历</a></li>
            <li><a @click="showLinkSelect('game')">王者荣耀活动项目</a></li>
            <li><a @click="showLinkSelect('seed')">个人总结vue种子工程</a></li>
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
              <a @click="showLinkSelect('qiqiServer')"> 集成jpa，简单易用，集成方便 </a>
            </li>
            <li>
              <a @click="showLinkSelect('qiqiServer')"> 实现了用户，部门，菜单，权限，基础商品图文等功能 </a>
            </li>
            <li>
              <a @click="showLinkSelect('qiqiServer')"> WebApi，Contract，Services，backend合理架构 </a>
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
            <li><a @click="showLinkSelect('browser')">vue,electron高度集成</a></li>
            <li><a @click="showLinkSelect('browser')">注入脚本分析网页功能</a></li>
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
            <li><a @click="showLinkSelect('lottery')">小型数据库mdb使用</a></li>
            <li><a @click="showLinkSelect('lottery')">excel导入功能</a></li>
            <li><a @click="showLinkSelect('lottery')">彩票分析算法</a></li>
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
              <a @click="showLinkSelect('videoLook')">支持国际化切换</a>
            </li>
            <li>
              <a @click="showLinkSelect('videoLook')">生成视频文件预览视频</a>
            </li>
            <li>
              <a @click="showLinkSelect('videoLook')">匹配字幕文件</a>
            </li>
            <li>
              <a @click="showLinkSelect('videoLook')">搜索文件夹功能</a>
            </li>
            <li>
              <a @click="showLinkSelect('videoLook')">移动文件夹功能</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./project.ts"></script>
<style lang="scss" scoped src="./project.scss"></style>