<template>
  <div class="layout">
    <div class="tool-container">
      <a class="download-pdf" href="http://resume.wuhaolin.cn/resume.pdf">下载 PDF</a>
      <p class="last-modified">最后更新于2021年6月</p>
    </div>
    <div class="container">
      <Head />
      <Content>
        <template v-slot:practice>
          <Practice />
        </template>
        <template v-slot:project>
          <Project />
        </template>
        <template v-slot:skill>
          <Skill />
        </template>
      </Content>
    </div>
  </div>
</template>

<script lang="ts" src="./layout.ts"></script>
<style lang="scss" scoped src="./layout.scss"></style>
