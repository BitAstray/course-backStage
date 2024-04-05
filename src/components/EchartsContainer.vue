<!--
 * @Author: BitCreate
 * @Date: 2024-04-05 16:08:11
-->
<template>
  <div ref="echartsContainer" w="full" h="full" px="4"></div>
</template>

<script lang="ts" setup>
import * as Echarts from "echarts";
import type { EChartsOption } from "echarts";

const echartsContainer = ref<HTMLElement>();

const { option } = defineProps<{ option: EChartsOption }>();

onMounted(() => {
  // 基于准备好的dom，初始化echarts实例
  const myChart = Echarts.init(echartsContainer.value!);
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
});
</script>

<style lang="less" scoped></style>
