/*
 * @Author: BitCreate
 * @Date: 2024-04-05 18:32:20
 */
type Data = string | number;
export default function (xData: Data[], data: Data[], hvData: Data[]) {
  return {
    backgroundColor: "transparent",
    // 启用提示框
    tooltip: {
      show: true,
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    // 图例位置，文本样式，图例高度
    legend: {
      right: "-3%",
      textStyle: {
        color: "white",
        fontSize: 10,
      },
      itemHeight: 10,
    },
    // 图标边距
    grid: {
      top: "12%",
      left: "0",
      right: "0",
      bottom: "2%",
      containLabel: true,
    },
    // x轴
    xAxis: [
      {
        type: "category",
        axisLine: {
          show: true,
          lineStyle: {
            color: "#4d6b80",
          },
        },
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        splitArea: {
          show: false,
        },
        axisLabel: {
          interval: 0,
        },
        data: xData,
      },
    ],
    // y轴
    yAxis: {
      type: "value",
      splitLine: {
        show: true,
        lineStyle: {
          color: "#4d6b80",
        },
      },
      axisTick: {
        show: false,
      },
      splitArea: {
        show: false,
      },
    },
    // 数据
    series: [
      {
        name: "浏览量（PV）",
        type: "bar",
        stack: "总量",
        barMaxWidth: 15,
        barGap: "10%",
        itemStyle: {
          color: "#3d6df7",
        },
        data: data,
      },
      {
        name: "访问量（HV）",
        type: "bar",
        stack: "总量",
        itemStyle: {
          color: "#00dd8d",
        },
        data: hvData,
      },
    ],
  };
}
