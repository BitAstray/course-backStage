<!--
 * @Author: BitCreate
 * @Date: 2024-04-05 14:33:31
-->
<script lang="ts" setup>
import UserTrendStatistic from "../options/user-trend-statistics";

let months = ref([6, 7, 8, 9, 10, 11, 12]);
let data = ref([6, 7, 8, 9, 10, 11, 12]);
const option = ref(UserTrendStatistic(months.value, data.value));
</script>

<template>
  <div
    h-55
    w-96
    flex="~ col"
    bg="[url(@/assets/image/border/UserTrendStatisticsBorder.png)] no-repeat center cover"
  >
    <div p="x-8 t-4" text="#17caf0 5.5" font="bold">用户量趋势统计</div>
    <EchartsContainer :option="option" />
  </div>
</template>

<style lang="less" scoped>
.bg {
  background-color: #fff;
}
</style>
