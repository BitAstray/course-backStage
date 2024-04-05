<!--
 * @Author: BitCreate
 * @Date: 2024-04-05 14:33:31
-->
<script lang="ts" setup></script>

<template>
  <div relative>
    <router-link to="/manager/user">
      <div
        class="bg"
        absolute
        top-20
        left-10
        cursor-pointer
        flex="~ v-center"
        gap="1"
        z-1
      >
        <img src="@/assets/image/backstage_manager_icon.png" w-6 h-5 />
        <span
          text="6 transparent"
          font="bold"
          bg="gradient-to-b clip-text"
          class="from-#1af7ff to-#1558b3"
          >后台管理</span
        >
      </div>
    </router-link>
  </div>
</template>

<style lang="less" scoped></style>
