<!--
 * @Author: BitCreate
 * @Date: 2024-04-05 14:33:31
-->
<script lang="ts" setup>
import TopWebsite from "../options/top-website";

const yData = ["直接访问", "百度", "360浏览器", "CSDN"]; // 来源
const data = [431, 341, 131, 98]; // 访问人数

const option = ref(TopWebsite(yData, data));
</script>

<template>
  <div
    h-58
    w-232
    flex="~ col"
    bg="[url(@/assets/image/border/TopWebsiteBorder.png)] no-repeat center cover"
  >
    <div p="x-8 t-4" text="#17caf0 5.5" font="bold">TOP网站来源</div>
    <div w="full" h="full">
      <EchartsContainer :option="option" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.bg {
  background-color: #fff;
}
</style>
