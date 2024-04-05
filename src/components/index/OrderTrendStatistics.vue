<script lang="ts" setup>
import OrderTrendStatistics from "../options/order-trend-statistics";

const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const data = ref([10, 22, 33, 44, 55, 66, 77, 88, 99, 100, 111, 122]);
const option = ref(OrderTrendStatistics(months, data.value));
</script>

<template>
  <div
    h-61
    w-96
    flex="~ col"
    bg="[url(@/assets/image/border/OrderTrendStatisticsBorder.png)] no-repeat center cover"
  >
    <div p="x-8 t-4" text="#17caf0 5.5" font="bold">订单量趋势统计</div>
    <EchartsContainer :option="option" />
  </div>
</template>

<style lang="less" scoped>
.bg {
  background-color: #fff;
}
</style>
