/*
 * @Author: BitCreate
 * @Date: 2024-04-05 20:03:37
 */
import { RouterLink, type RouteRecordRaw } from "vue-router";
import { MenuItem, SubMenu } from "ant-design-vue";
import { modules } from "@/router/index";

export default function () {
  function handleChildren(item: RouteRecordRaw, path: string) {
    if (item.children) {
      return (
        // 二级菜单
        <SubMenu title={item.name}>
          {/* 判断当前是否有子路由, 如果有则递归创建 */}
          {item.children!.map((child) => handleChildren(child, `${path}/${child.path}`))}
        </SubMenu>
      );
    } else {
      return (
        <MenuItem key={path}>
          <RouterLink to={path}>{item.name}</RouterLink>
        </MenuItem>
      );
    }
  }

  return modules.map((item) => handleChildren(item, `/manager/${item.path}`));
}
