<template>
  <transition name="fade">
    <div v-if="show" class="i-dialog">
      <div class="dialog-container">
        <div class="title-container">
          <span class="title">{{ title }}</span>
          <span class="close" @click="close">X</span>
        </div>
        <slot name="items"></slot>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" src="./i-dialog.ts"></script>
<style lang="scss" scoped src="./i-dialog.scss"></style>