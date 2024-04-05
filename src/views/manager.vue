<!--
 * @Author: BitCreate
 * @Date: 2024-04-05 14:22:39
-->
<template>
  <div w-300 h-200>
    后台管理模块
    <EchartsContainer :option="option" />
  </div>
</template>

<script setup lang="ts">
import examleOption from "@/components/options/examleOption";
import type { EChartsOption } from "echarts";
const xData = ref(["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]);
const yData = ref([820, 932, 901, 934, 1290, 1330, 1320]);
const option = reactive<EChartsOption>(examleOption(xData.value, yData.value));
</script>

<style scoped></style>
