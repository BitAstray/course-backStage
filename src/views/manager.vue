<!--
 * @Author: BitCreate
 * @Date: 2024-04-05 14:22:39
-->
<script setup lang="ts">
import Header from "@/components/manager/Header";

const { path, matched } = toRefs(useRoute());
const selectedKeys = ref([path]);
</script>

<template>
  <a-layout h-full>
    <!-- 顶部导航 -->
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
      <div flex="~ v-center" gap="5">
        <span text="5 #e5e7eb">小滴课堂</span>
        <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="horizontal">
          <a-menu-item key="/">
            <RouterLink to="/">首页</RouterLink>
          </a-menu-item>
          <!-- 其他导航 -->
          <component :is="Header" />
        </a-menu>
      </div>
    </a-layout-header>

    <a-layout-content m="t-16!" p="x-12!">
      <!-- 面包屑 -->
      <a-breadcrumb m="y-16px!">
        <a-breadcrumb-item>
          <RouterLink to="/">首页</RouterLink>
        </a-breadcrumb-item>

        <a-breadcrumb-item v-for="item in matched" :key="item.name">
          <RouterLink
            :to="
              item.path !== '/manager' && item.path !== '/manager/product'
                ? item.path
                : '#'
            "
            >{{ item.name }}</RouterLink
          >
        </a-breadcrumb-item>
      </a-breadcrumb>
      <!-- 模块内容 -->
      <div bg="white" p="6">
        <RouterView />
      </div>
    </a-layout-content>
  </a-layout>
</template>

<style lang="less" scoped></style>
