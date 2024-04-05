<script lang="ts" setup>
import TypeDistribution from "../options/type-distribution";

const data = ref([
  {
    itemStyle: {
      color: "#4374ff",
    },
    value: 335,
    name: "Android",
  },
  {
    itemStyle: {
      color: "#2ce293",
    },
    value: 310,
    name: "iPhone",
  },
  {
    itemStyle: {
      color: "#17caf0",
    },
    value: 234,
    name: "PC",
  },
]);
const option = ref(TypeDistribution(data.value));
</script>

<template>
  <div
    h-51
    w-96
    flex="~ col"
    bg="[url(@/assets/image/border/TypeDistributionBorder.png)] no-repeat center cover"
  >
    <div p="x-8 t-4" text="#17caf0 5.5" font="bold">终端类型分布</div>
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
