<script lang="ts" setup>
const list = [
  { title: "新版java零基础到高级教程小白自学编程", ratio: "22%" },
  { title: "新版java零基础到高级教程小白自学编程", ratio: "22%" },
  { title: "新版java零基础到高级教程小白自学编程", ratio: "22%" },
  { title: "新版java零基础到高级教程小白自学编程", ratio: "22%" },
  { title: "新版java零基础到高级教程小白自学编程", ratio: "22%" },
  { title: "新版java零基础到高级教程小白自学编程", ratio: "22%" },
  { title: "新版java零基础到高级教程小白自学编程", ratio: "22%" },
];
</script>

<template>
  <div
    h-78
    w-96
    flex="~ col"
    bg="[url(@/assets/image/border/TOPPurchaseBorder.png)] no-repeat center cover"
  >
    <div p="x-8 t-4" text="#17caf0 5.5" font="bold">近期销售占比</div>
    <div p="x-5.5" m="t-3">
      <div flex="~ v-center" gap="2" v-for="(item, index) in list">
        <span text="#00ffc3 5.5">{{ index + 1 }}</span>
        <span truncate text="white 4">{{ item.title }}</span>
        <span text="#1dc2ff 3.5">{{ item.ratio }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.bg {
  background-color: #fff;
}
</style>
