<!--
 * @Author: BitCreate
 * @Date: 2024-04-05 14:33:31
-->
<script lang="ts" setup>
import ChinaMap from "../options/map-china";

const option = ref(ChinaMap() as any);
</script>

<template>
  <div flex="[1]" mb="5" bg="[url(@/assets/image/background_map.png)] no-repeat center">
    <EchartsContainer :option="option" />
  </div>
</template>

<style lang="less" scoped>
.bg {
  background-color: #fff;
}
</style>
