/*
 * @Author: BitCreate
 * @Date: 2024-04-05 13:32:55
 */
import type { Plugin } from "vite";

export default function PxToRem(): Plugin {
  return {
    name: "px-to-rem", //插件名称
    enforce: "pre", //在其他插件之前执行
    transform(code, id) {
      //转换处理函数
      if (!id.includes("vue")) return code; //如果文件路径不包含vue，则不处理
      return code.replace(/(\d+)px/g, (_, $1) => `${$1 / 16}rem`); //px单位替换成rem单位，1px=16rem
    },
  };
}
