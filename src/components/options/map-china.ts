/*
 * @Author: BitCreate
 * @Date: 2024-04-05 19:03:35
 */
const data = [
  { name: "台湾", value: 20000 },
  { name: "河北", value: 2000 },
  { name: "山西", value: 2000 },
  { name: "内蒙古", value: 2000 },
  { name: "辽宁", value: 2000 },
  { name: "吉林", value: 2000 },
  { name: "黑龙江", value: 0 },
  { name: "江苏", value: 9999 },
  { name: "浙江", value: 9999 },
  { name: "安徽", value: 9999 },
  { name: "福建", value: 6500 },
  { name: "江西", value: 6500 },
  { name: "山东", value: 6500 },
  { name: "河南", value: 6500 },
  { name: "湖北", value: 1500 },
  { name: "湖南", value: 100 },
  { name: "广东", value: 20000 },
  { name: "广西", value: 1500 },
  { name: "海南", value: 1000 },
  { name: "四川", value: 3000 },
  { name: "贵州", value: 3000 },
  { name: "云南", value: 3000 },
  { name: "西藏", value: 3000 },
  { name: "陕西", value: 100 },
  { name: "甘肃", value: 5000 },
  { name: "青海", value: 2000 },
  { name: "宁夏", value: 2000 },
  { name: "新疆", value: 2000 },
  { name: "北京", value: 2000 },
  { name: "天津", value: 2000 },
  { name: "上海", value: 2000 },
  { name: "重庆", value: 200 },
  { name: "香港", value: 200 },
  { name: "澳门", value: 200 },
  { name: "南海诸岛", value: 15000 },
];

export default function () {
  return {
    geo: {
      type: "map",
      map: "chinaMap", // chinaMap需要和registerMap中的第一个参数保持一致
      roam: true, // 设置允许缩放以及拖动的效果
      coordinateSystem: "geo",
      emphasis: {
        label: {
          show: true,
          color: "red",
          fontSize: 16,
          fontWeight: "600",
        },
      },
      label: {
        show: true,
        color: "white",
        fontSize: 10,
      },
      zoom: 1.25,
      center: [105, 36],
    },
    series: [
      {
        type: "map",
        map: "chinaMap",
        geoIndex: 0,
        data: data,
      },
    ],
    visualMap: {
      show: true,
      left: "5%",
      bottom: "5%",
      seriesIndex: [0],
      type: "piecewise",
      pieces: [
        { min: 100000, label: "10万以上", color: "#59e13d" },
        { min: 50001, max: 100000, label: "10万以下", color: "#ffbe62" },
        { min: 10001, max: 50000, label: "5万以下", color: "#ff3f72" },
        { min: 5001, max: 10000, label: "1万以下", color: "#d8aafa" },
        { min: 1001, max: 5000, label: "5千以下", color: "#3fc7fb" },
        { min: 0, max: 1000, label: "1千以下", color: "#032e5e" },
      ],
      textStyle: {
        color: "white",
      },
    },
    backgroundColor: "transparent",
    itemStyle: {
      color: "red",
    },
  };
}
