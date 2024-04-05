<!--
 * @Author: BitCreate
 * @Date: 2024-04-05 14:33:31
-->
<script lang="ts" setup>
const list = [
  { price: "1000", title: "今日成交金额" },
  { price: "1000", title: "今日成交金额" },
  { price: "1000", title: "今日成交金额" },
  { price: "1000", title: "今日成交金额" },
];
</script>

<template>
  <div
    h-56
    w-100
    flex="~ col"
    bg="[url(@/assets/image/border/TodayCurrentDataBorder.png)] no-repeat center cover"
  >
    <div p="x-8 t-4" text="#17caf0 5.5" font="bold">今日实时数据</div>
    <div grid="~ rows-2 cols-2" gap="x-8 y-4">
      <div flex="~ col" v-for="item in list">
        <span text="8 #00ffc3 center">
          {{ item.price }}
        </span>
        <span text="4 white center">{{ item.title }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.bg {
  background-color: #fff;
}
</style>
