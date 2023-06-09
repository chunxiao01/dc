<template>
  <div class="menu-card-item">
    <van-card
      num="2"
      price="17.00"
      desc="描述信息"
      title="红烧牛肉面"
      thumb="https://wx4.sinaimg.cn/orj360/001Na2E3ly1hctj5nmza3j60u00mitdo02.jpg"
    >
      <template #tags>
        <van-tag plain type="primary">标签</van-tag>
        <van-tag plain type="primary">标签</van-tag>
      </template>
      <template #footer>
        <van-button size="mini">按钮</van-button>
        <van-button size="mini">按钮</van-button>
      </template>
    </van-card>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
