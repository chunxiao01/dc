<script setup lang="ts">
import { ref } from "vue"
const active = ref(0)
const icon = [
  {
    active: new URL("@/assets/img/icons/menu_active.png", import.meta.url).href,
    inactive: new URL("@/assets/img/icons/menu.png", import.meta.url).href
  },
  {
    active: new URL("@/assets/img/icons/profile_active.png", import.meta.url)
      .href,
    inactive: new URL("@/assets/img/icons/profile.png", import.meta.url).href
  }
]
</script>

<template>
  <div class="tabbar">
    <van-tabbar v-model="active" active-color="#ee0a24">
      <van-tabbar-item to="/menu">
        <span>菜单</span>
        <template #icon="props">
          <img :src="props.active ? icon[0].active : icon[0].inactive" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/profile">
        <span>我的</span>
        <template #icon="props">
          <img :src="props.active ? icon[1].active : icon[1].inactive" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style scoped></style>
