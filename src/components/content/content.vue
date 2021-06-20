<template>
  <div class="content">
    <div class="pra-pro-container">
      <slot name="practice"></slot>
      <slot name="project"></slot>
    </div>
    <slot name="skill"></slot>
    <slot name="appraise"></slot>
  </div>
</template>

<script lang="ts" src="./content.ts"></script>
<style lang="scss" scoped src="./content.scss"></style>