import type { EChartsOption } from "echarts";

/*
 * @Author: BitCreate
 * @Date: 2024-04-05 16:16:38
 */
type Data = string | number;
export default function (xData: Data[], data: Data[]) {
  return {
    title: {
      text: "ECharts 入门示例",
    },
    tooltip: {},
    legend: {
      data: xData,
    },
    xAxis: {
      data: data,
    },
    yAxis: {},
    series: [
      {
        name: "销量",
        type: "bar",
        data: [5, 20, 36, 10, 10, 20],
      },
    ],
  } as EChartsOption;
}
